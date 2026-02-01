import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const items = get().items;
        const exists = items.some(item => item.id === product.id);

        if (!exists) {
          set({
            items: [...items, {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image
            }]
          });
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter(item => item.id !== id)
        });
      },

      toggleItem: (product) => {
        const items = get().items;
        const exists = items.some(item => item.id === product.id);

        if (exists) {
          get().removeItem(product.id);
        } else {
          get().addItem(product);
        }
      },

      isInWishlist: (id) => {
        return get().items.some(item => item.id === id);
      },

      clearWishlist: () => set({ items: [] }),

      getItemCount: () => get().items.length
    }),
    {
      name: 'wishlist-storage'
    }
  )
);

export default useWishlistStore;

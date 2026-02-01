import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1, size = '', color = '') => {
        const items = get().items;
        const existingIndex = items.findIndex(
          item => item.id === product.id && item.size === size && item.color === color
        );

        if (existingIndex >= 0) {
          const newItems = [...items];
          newItems[existingIndex].quantity += quantity;
          set({ items: newItems });
        } else {
          set({
            items: [...items, {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity,
              size,
              color
            }]
          });
        }
      },

      removeItem: (id, size = '', color = '') => {
        set({
          items: get().items.filter(
            item => !(item.id === id && item.size === size && item.color === color)
          )
        });
      },

      updateQuantity: (id, quantity, size = '', color = '') => {
        if (quantity <= 0) {
          get().removeItem(id, size, color);
          return;
        }

        set({
          items: get().items.map(item =>
            item.id === id && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          )
        });
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);

export default useCartStore;

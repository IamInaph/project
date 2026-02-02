import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const API_URL = 'http://localhost:5000/api';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      // Register user
      register: async (name, email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
          }

          set({
            user: {
              _id: data.data._id,
              name: data.data.name,
              email: data.data.email,
              role: data.data.role,
            },
            token: data.data.token,
            isLoading: false,
            error: null,
          });

          return { success: true };
        } catch (error) {
          set({ isLoading: false, error: error.message });
          return { success: false, error: error.message };
        }
      },

      // Login user
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Login failed');
          }

          set({
            user: {
              _id: data.data._id,
              name: data.data.name,
              email: data.data.email,
              role: data.data.role,
            },
            token: data.data.token,
            isLoading: false,
            error: null,
          });

          return { success: true };
        } catch (error) {
          set({ isLoading: false, error: error.message });
          return { success: false, error: error.message };
        }
      },

      // Logout user
      logout: () => {
        set({ user: null, token: null, error: null });
      },

      // Clear error
      clearError: () => {
        set({ error: null });
      },

      // Check if user is authenticated
      isAuthenticated: () => {
        return !!get().token;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Generic fetch wrapper with error handling
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

// Products API
export const productsAPI = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/products?${queryString}` : '/products';
    return fetchAPI(endpoint);
  },

  getById: async (id) => {
    return fetchAPI(`/products/${id}`);
  },

  create: async (productData, token) => {
    return fetchAPI('/products', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(productData),
    });
  },

  update: async (id, productData, token) => {
    return fetchAPI(`/products/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(productData),
    });
  },

  delete: async (id, token) => {
    return fetchAPI(`/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

// Categories API
export const categoriesAPI = {
  getAll: async () => {
    return fetchAPI('/categories');
  },
};

// Users API
export const usersAPI = {
  register: async (userData) => {
    return fetchAPI('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  login: async (credentials) => {
    return fetchAPI('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  getProfile: async (token) => {
    return fetchAPI('/users/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

// Cart API
export const cartAPI = {
  get: async (token) => {
    return fetchAPI('/cart', {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  addItem: async (productId, quantity, token) => {
    return fetchAPI('/cart', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ productId, quantity }),
    });
  },

  updateItem: async (productId, quantity, token) => {
    return fetchAPI(`/cart/${productId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ quantity }),
    });
  },

  removeItem: async (productId, token) => {
    return fetchAPI(`/cart/${productId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  clear: async (token) => {
    return fetchAPI('/cart', {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default {
  products: productsAPI,
  categories: categoriesAPI,
  users: usersAPI,
  cart: cartAPI,
};

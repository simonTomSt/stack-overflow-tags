import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/2.3`,
  timeout: 1000,
});

// Add 'key' param to receive higher request quota
apiClient.interceptors.request.use(
  (config) => {
    if (!config.params) {
      config.params = {};
    }
    config.params['key'] = import.meta.env.VITE_API_KEY;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

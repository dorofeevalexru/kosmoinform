const API_BASE_URL = 'http://localhost:8000';

export const authAPI = {
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Ошибка входа');
    }
    
    return response.json();
  },
  
  refreshToken: async (refreshToken) => {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: refreshToken })
    });
    
    if (!response.ok) {
      throw new Error('Ошибка обновления токена');
    }
    
    return response.json();
  }
};

export const projectsAPI = {
  getAll: async () => {
    // В будущем можно заменить на реальный API
    return Promise.resolve([]);
  },
  
  getById: async (id) => {
    // В будущем можно заменить на реальный API
    return Promise.resolve(null);
  }
};
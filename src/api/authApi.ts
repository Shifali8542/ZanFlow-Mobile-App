// src/api/authApi.ts
import api from './client';

export interface LoginPayload {
  username: string;
  password: string;
}

export const authApi = {
  login: async (data: LoginPayload) => {
    const res = await api.post('/auth/login/', data);
    return res.data;
  },
  logout: async () => {
    const res = await api.post('/auth/logout/');
    return res.data;
  },
};

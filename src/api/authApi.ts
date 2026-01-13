// src/api/authApi.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './client';

export interface LoginPayload {
  username: string;
  password: string;
}

export const authApi = {
  login: async (data: LoginPayload) => {
     const res = await api.post('/auth/login/', data);

    const { access, refresh } = res.data;
    console.log('STORING TOKENS:', { access, refresh });
    await AsyncStorage.setItem('access', access);
    await AsyncStorage.setItem('refresh', refresh);
    return res.data;
  },
  logout: async () => {
     await AsyncStorage.removeItem('access');
    await AsyncStorage.removeItem('refresh');
    const res = await api.post('/auth/logout/');
    return res.data;
  },
};

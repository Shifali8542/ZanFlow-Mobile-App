// src/api/tasksApi.ts
import api from './client';

export interface CreateTaskPayload {
  title: string;
  description: string;
}

export const tasksApi = {
  getTasks: async () => {
    const res = await api.get('/tasks/');
    return res.data;
  },

  getTaskById: async (id: string) => {
    const res = await api.get(`/tasks/${id}`);
    return res.data;
  },

  createTask: async (data: CreateTaskPayload) => {
    const res = await api.post('/tasks/', data);
    return res.data;
  },

  updateTask: async (id: string, data: any) => {
    const res = await api.put(`/tasks/${id}`, data);
    return res.data;
  },

  deleteTask: async (id: string) => {
    const res = await api.delete(`/tasks/${id}`);
    return res.data;
  },
};

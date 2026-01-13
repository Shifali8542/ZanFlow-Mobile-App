import api from './client';
import axios from 'axios';

export interface GetUploadUrlPayload {
  file_name: string;
  file_type: string;
}

export interface GetUploadUrlResponse {
  url: string;
  fields: Record<string, string>;
  file_key: string;
}

//3rd API call Confirm Upload
export interface ConfirmUploadPayload {
  file_key: string;
  file_name: string;
  file_type: string;
  metadata?: {
    gt_category?: 'gt' | 'running_gt';
    [key: string]: any;
  };
}
export type DocumentStatus = 'draft' | 'in_review' | 'approved' | 'archived';
export interface ConfirmUploadResponse {
  id: string;
  status: DocumentStatus;
}

// 4th API call (Get Download URL)
export interface GetDownloadUrlPayload {
  document_id: string;
}

export interface GetDownloadUrlResponse {
  url: string;
}

export const documentsApi = {
  list: async (params?: {
    project?: number;
    status?: string;
    file_type?: string;
    page?: number;
  }) => {
    const response = await api.get('/documents/', { params });
    console.log('Documents list response data:', response.data);
    return response.data;
  },

  get: async (id: string) => {
    const response = await api.get(`/documents/${id}/`);
    return response.data;
  },


  getUploadUrl: async (projectId: number, data: GetUploadUrlPayload) => {
    const response = await api.post<GetUploadUrlResponse>(
      `/projects/${projectId}/get-upload-url/`,
      data
    );
    return response.data;
  },

  uploadFileToS3: async (
    s3Url: string,
    fields: Record<string, string>,
    file: File
  ) => {
    const formData = new FormData();
    Object.keys(fields).forEach(key => {
      formData.append(key, fields[key]);
    });
    formData.append('file', file);
    await axios.post(s3Url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  // This `create` now expects the final S3 file_key
  create: async (data: {
    project: number;
    name: string;
    description: string;
    file_key: string;
    initial_gt_data?: Record<string, unknown>;
    file_type: string;
    original_file_name: string;
  }) => {
    const response = await api.post('/documents/', data);
    return response.data;
  },

  // 3rd API: Confirm Upload
  confirmUpload: async (projectId: number, data: ConfirmUploadPayload) => {
    const response = await api.post<ConfirmUploadResponse>(
      `/projects/${projectId}/confirm-upload/`,
      data
    );
    return response.data;
  },

  // 4th API: Get Download URL
  getDownloadUrl: async (projectId: number, data: GetDownloadUrlPayload) => {
    const response = await api.post<GetDownloadUrlResponse>(
      `/projects/${projectId}/get-download-url/`,
      data
    );
    return response.data;
  },

  update: async (id: string, data: Partial<{ name: string; description: string }>) => {
    const response = await api.patch(`/documents/${id}/`, data);
    console.log('Update document response data:', response.data);
    return response.data;
  },

  delete: async (id: string) => {
    await api.delete(`/documents/${id}/`);
  },

  uploadSource: async (id: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post(`/documents/${id}/upload-source/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  getVersions: async (id: string) => {
    const response = await api.get(`/documents/${id}/versions/`);
    return response.data;
  },

  createVersion: async (id: string, data: { gt_data: Record<string, unknown>; change_summary?: string }) => {
    const response = await api.post(`/documents/${id}/versions/`, data);
    return response.data;
  },

  getVersionDiff: async (id: string, v1: string | number, v2: string | number) => {
    const response = await api.get(`/documents/${id}/versions/diff/`, {
      params: { v1, v2 },
    });
    return response.data;
  },

  submitForReview: async (id: string) => {
    const response = await api.post(`/documents/${id}/submit-for-review/`);
    return response.data;
  },

  approve: async (id: string, versionId?: string) => {
    const response = await api.post(`/documents/${id}/approve/`, {
      version_id: versionId,
    });
    return response.data;
  },
  // Add inside documentsApi object:
  addLabel: async (documentId: string, labelId: number) => {
    const response = await api.post(`/documents/${documentId}/labels/`, { label_id: labelId });
    return response.data;
  },

  removeLabel: async (documentId: string, labelId: number) => {
    const response = await api.delete(`/documents/${documentId}/labels/${labelId}/`);
    return response.data;
  },
};

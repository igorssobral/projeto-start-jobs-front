import { toast } from 'react-toastify';
import api from './api';

export const registerUser = async (formData) => {
  try {
    const response = await api.post('/api/usuarios', formData);
    toast.success('Registro efetuado com sucesso.');

    return response.data;
  } catch (error) {
    return error;
  }
};

export const login = async (email, senha) => {
  try {
    const response = await api.post(`/api/usuarios/login`, null, {
      params: { email, senha },
    });
    return response.data; // Retorna o token JWT do back-end
  } catch (error) {
    toast.error(error.response.data);

    return error.response.data;
  }
};

export const recoveryPassword = (credentials )=> {
  return new Promise((resolve, reject) => {
    api
      .post(`/api/usuarios/forgot-password`, credentials)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const resetPassword = (credentials) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/api/usuarios/reset-password`, credentials)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

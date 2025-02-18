import { toast } from 'react-toastify';
import api from './api';

export const register = async (formData) => {
  const response = await api.post('/api/usuarios', formData);
  toast.success('Registro efetuado com sucesso.');

  return response.data;
};

export const login = async (email, senha) => {
  const response = await api.post(`/api/usuarios/login`, null, {
    params: { email, senha },
  });
  return response.data; // Retorna o token JWT do back-end
};

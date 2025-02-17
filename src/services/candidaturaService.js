import { useAuth } from '../context/auth-context';
import { toast } from 'react-toastify';
import api from './api';

export const ApiCandidatura = () => {
  const { user } = useAuth();

  const adicionarCandidatura = async (candidaturaData) => {
    try {
      const response = await api.post('/api/candidaturas', candidaturaData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      toast.success('Candidatura adicionada.');
      return response.data;
    } catch (error) {
      console.error('Erro ao salvar candidaturas', error);
      toast.error(error.response.data);
      return error;
    }
  };
  const getCandidaturas = async () => {
    try {
      const response = await api.get(
        `/api/candidaturas/usuario/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao obter candidaturas:', error);
      return error;
    }
  };

  const deleteCandidatura = async (id) => {
    try {
      const response = await api.delete(
        `/api/candidaturas/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success('Candidatura removida com sucesso!')
      return response.data;
    } catch (error) {
      console.error('Erro ao obter candidaturas:', error);
      return error;
    }
  };

  const addCandidaturaNewStatus = async (candidaturaId, statusCandidatura) => {
    const updatedStatus = {
      statusCandidatura,
    };
    try {
      const response = await api.put(
        `/api/candidaturas/status/${candidaturaId}`,
        updatedStatus,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success('Nova Etapa adicionada.');

      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      toast.error('Erro ao adicionar nova etapa.');

      return error;
    }
  };
  const updateCandidaturaStatus = async (candidaturaId, statusCandidatura) => {
  
    const updatedStatus = {
      statusCandidatura,
    };

    try {
      const response = await api.put(
        `/api/candidaturas/update-status/${candidaturaId}`,
        updatedStatus,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success('Status Atualizado.');
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar candidatura:', error);
      toast.error('Erro ao atualizar status.');

      return error;
    }
  };

  return {
    adicionarCandidatura,
    getCandidaturas,
    deleteCandidatura,
    addCandidaturaNewStatus,
    updateCandidaturaStatus,
  };
};

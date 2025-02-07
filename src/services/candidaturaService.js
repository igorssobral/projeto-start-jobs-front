import axios from 'axios';
import { useAuth } from '../context/auth-context';
import { toast } from 'react-toastify';

export const ApiCandidatura = () => {
  const { user } = useAuth();

  const adicionarCandidatura = async (candidaturaData) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/candidaturas',
        candidaturaData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

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
      const response = await axios.get(
        `http://localhost:8080/api/candidaturas/usuario/${user.id}`,
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

  const addCandidaturaNewStatus = async (candidaturaId, statusCandidatura) => {
    const updatedStatus = {
      statusCandidatura,
    };
    try {
      const response = await axios.put(
        `http://localhost:8080/api/candidaturas/status/${candidaturaId}`,
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
    console.log(
      '🚀 ~ updateCandidaturaStatus ~ statusCandidatura:',
      statusCandidatura
    );
    const updatedStatus = {
      statusCandidatura,
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/api/candidaturas/update-status/${candidaturaId}`,
        updatedStatus,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log('Candidatura atualizada:', response.data);
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
    addCandidaturaNewStatus,
    updateCandidaturaStatus,
  };
};

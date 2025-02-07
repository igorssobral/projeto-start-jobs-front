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

      toast.success("Candidatura adicionada.")

      return response.data;
    } catch (error) {
      console.error('Erro ao salvar candidaturas', error);
      toast.error('Erro ao salvar candidatura.')
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

  function addCandidaturaNewStatus(candidaturaId, statusCandidatura) {
    const updatedStatus = {
      statusCandidatura,
    };

    axios
      .put(
        `http://localhost:8080/api/candidaturas/status/${candidaturaId}`,
        updatedStatus,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Nova Etapa adicionada.")

        return response.data;
      })
      .catch((error) => {
        console.error('Erro ao atualizar status:', error);
        toast.error('Erro ao adicionar nova etapa.')

        return error;
      });
  }
  function updateCandidaturaStatus(candidaturaId, statusCandidatura) {
    const updatedStatus = {
      statusCandidatura,
    };

    axios
      .put(
        `http://localhost:8080/api/candidaturas/update-status/${candidaturaId}`,
        updatedStatus,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        console.log('Candidatura atualizada:', response.data);
        toast.success("Status Atualizado.")
        return response.data;
      })
      .catch((error) => {
        console.error('Erro ao atualizar candidatura:', error);
        toast.error('Erro ao atualizar status.')

        return error;
      });
  }

  return {
    adicionarCandidatura,
    getCandidaturas,
    addCandidaturaNewStatus,
    updateCandidaturaStatus,
  };
};

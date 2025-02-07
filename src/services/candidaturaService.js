import axios from 'axios';
import { useAuth } from '../context/auth-context';

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
      console.log('🚀 ~ adicionarCandidatura ~ response.data:', response.data)


      return response.data;
    } catch (error) {
      console.error('Erro ao salvar candidaturas', error);
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
        console.log('Candidatura atualizada:', response.data);

        return response.data;
      })
      .catch((error) => {
        console.error('Erro ao atualizar candidatura:', error);

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

        return response.data;
      })
      .catch((error) => {
        console.error('Erro ao atualizar candidatura:', error);

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

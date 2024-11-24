import axios from 'axios';

const BASE_URL = 'https://localhost:8080';

export const estimateTravelCost = async (userId: string, origin: string, destination: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/ride/estimate`, { userId, origin, destination });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao estimar valor da viagem');
  }
};

export const getDrivers = async (routeId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/drivers/${routeId}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar motoristas');
  }
};

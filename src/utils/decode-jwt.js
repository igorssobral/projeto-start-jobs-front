import { jwtDecode } from 'jwt-decode';


export const decodeJwt = (token) => {
  const decoded = jwtDecode(token);
  return decoded;
};

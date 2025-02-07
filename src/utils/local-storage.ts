/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { decodeJwt } from './decode-jwt';

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key)=> {
  const token = localStorage.getItem(key);
  
  if (token) {
    try {
      if (token) {
        const decoded = decodeJwt(token);
        if (decoded) {
          return {
            token: token,
            user: decoded.nome || '',
            id: decoded.idUsuario,
          };
        }
      }
    } catch (error) {
      
    }
  }

  return null;
};


export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const isAuthenticated = () => {
  const user = getLocalStorage('token');
  return user && user.token ? user : null;
};

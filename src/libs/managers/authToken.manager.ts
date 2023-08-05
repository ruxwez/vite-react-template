import { LocalStorageKeys } from "@/constants/localStorageKeys";

// Obtenemos el token de autenticación desde el LocalStorage
export const getAuthToken = (): string | null => {
  return localStorage.getItem(LocalStorageKeys.AuthToken);
};

// Guardamos el token de autenticación en el LocalStorage
export const setAuthToken = (token: string) => {
  localStorage.setItem(LocalStorageKeys.AuthToken, token);

  return token;
};

// Eliminamos el token de autenticación del LocalStorage
export const removeAuthToken = () => {
  localStorage.removeItem(LocalStorageKeys.AuthToken);
}

export const isAuthenticated = () => getAuthToken();
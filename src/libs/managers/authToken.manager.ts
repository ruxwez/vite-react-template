const authTokenKey = "authToken";

// Obtenemos el token de autenticación desde el LocalStorage
export const getAuthToken = (): string | null => {
  return localStorage.getItem(authTokenKey);
};

// Guardamos el token de autenticación en el LocalStorage
export const setAuthToken = (token: string) => {
  localStorage.setItem(authTokenKey, token);

  return token;
};

// Eliminamos el token de autenticación del LocalStorage
export const removeAuthToken = () => {
  localStorage.removeItem(authTokenKey);
}
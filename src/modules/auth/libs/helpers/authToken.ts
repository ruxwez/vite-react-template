import { LocalStorageKeys } from "@/modules/_shared/libs/constants/localStorageKeys";

// We obtain the authentication token from LocalStorage
export const getAuthToken = (): string | null => {
    return localStorage.getItem(LocalStorageKeys.AuthToken);
};

// We save the authentication token in LocalStorage
export const setAuthToken = (token: string) => {
    localStorage.setItem(LocalStorageKeys.AuthToken, token);

    return token;
};

// We remove the authentication token from LocalStorage
export const removeAuthToken = () => {
    localStorage.removeItem(LocalStorageKeys.AuthToken);
}

export const isAuthenticated = () => getAuthToken();
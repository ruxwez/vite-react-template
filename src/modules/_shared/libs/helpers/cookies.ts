/**
 * Advanced options for configuring cookies
 */
export interface CookieOptions {
    /** Days until the cookie expires (0 = session cookie) */
    expirationDays?: number;
    /** Exact expiration date (takes precedence over expirationDays) */
    expires?: Date;
    /** Path on the server where the cookie will be available */
    path?: string;
    /** Domain for which the cookie is valid */
    domain?: string;
    /** Indicates whether the cookie should only be transmitted over HTTPS */
    secure?: boolean;
    /** Restricts cookie access to HTTP requests only (no JS) */
    httpOnly?: boolean;
    /** Controls whether the cookie is sent in cross-site requests */
    sameSite?: 'strict' | 'lax' | 'none';
}

/**
 * Sets a cookie with advanced options
 * 
 * @param name - Cookie name
 * @param value - Cookie value
 * @param options - Configuration options for the cookie
 * 
 * @example
 * // Basic cookie that expires in 7 days
 * setCookie('user', 'john', { expirationDays: 7 });
 * 
 * // Secure cookie with advanced options
 * setCookie('token', '123456', {
 *   expirationDays: 1,
 *   path: '/admin',
 *   secure: true,
 *   sameSite: 'strict'
 * });
 */
export const setCookie = (
    name: string,
    value: string,
    options: CookieOptions = {}
): void => {
    // Build cookie string
    let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    // Handle expiration
    if (options.expires) {
        cookieStr += `; expires=${options.expires.toUTCString()}`;
    } else if (options.expirationDays !== undefined) {
        const d = new Date();
        d.setTime(d.getTime() + options.expirationDays * 24 * 60 * 60 * 1000);
        cookieStr += `; expires=${d.toUTCString()}`;
    }

    // Add additional options
    if (options.path) cookieStr += `; path=${options.path}`;
    if (options.domain) cookieStr += `; domain=${options.domain}`;
    if (options.secure) cookieStr += `; secure`;
    if (options.httpOnly) cookieStr += `; httpOnly`;
    if (options.sameSite) cookieStr += `; sameSite=${options.sameSite}`;

    // Set the cookie
    document.cookie = cookieStr;
};

/**
 * Gets the value of a cookie by its name
 * 
 * @param name - Cookie name
 * @returns Cookie value or empty string if it does not exist
 * 
 * @example
 * const userId = getCookie('user_id');
 * if (userId) {
 *   // The cookie exists
 * }
 */
export const getCookie = (name: string): string => {
    const nameEQ = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }

    return '';
};

/**
 * Checks if a cookie exists
 * 
 * @param name - Cookie name
 * @returns true if the cookie exists, false otherwise
 * 
 * @example
 * if (hasCookie('session_token')) {
 *   // The user has an active session
 * }
 */
export const hasCookie = (name: string): boolean => {
    return getCookie(name) !== '';
};

/**
 * Deletes a cookie by setting its expiration date to the past
 * 
 * @param name - Cookie name
 * @param options - Configuration options (path and domain must match the original ones)
 * 
 * @example
 * // Delete a basic cookie
 * deleteCookie('user');
 * 
 * // Delete a cookie with a specific path
 * deleteCookie('token', { path: '/admin' });
 */
export const deleteCookie = (
    name: string,
    options: Pick<CookieOptions, 'path' | 'domain'> = {}
): void => {
    // Set the expiration date to the past
    const deletedOptions: CookieOptions = {
        ...options,
        expirationDays: -1
    };

    setCookie(name, '', deletedOptions);
};

/**
 * Gets all cookies as an object
 * 
 * @returns Object with all cookies as key-value pairs
 * 
 * @example
 * const allCookies = getAllCookies();
 * console.log(allCookies.theme); // "dark"
 */
export const getAllCookies = (): Record<string, string> => {
    const cookiesObj: Record<string, string> = {};
    const cookies = document.cookie.split(';');

    cookies.forEach(cookie => {
        const parts = cookie.trim().split('=');
        if (parts.length >= 2) {
            const name = decodeURIComponent(parts[0]);
            const value = decodeURIComponent(parts.slice(1).join('='));
            cookiesObj[name] = value;
        }
    });

    return cookiesObj;
};

/**
 * Deletes all cookies accessible from the current location
 * 
 * @example
 * // Log out and clear data
 * clearAllCookies();
 */
export const clearAllCookies = (): void => {
    const cookies = document.cookie.split(';');

    cookies.forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        deleteCookie(name);

        // Try to delete with different combinations of path and domain
        deleteCookie(name, { path: '/' });

        // For cookies with subdomains
        const domain = window.location.hostname;
        if (domain.includes('.')) {
            const rootDomain = domain.split('.').slice(-2).join('.');
            deleteCookie(name, { domain: `.${rootDomain}` });
        }
    });
};

/**
 * Saves an object as JSON in a cookie
 * 
 * @param name - Cookie name
 * @param value - Object to save
 * @param options - Configuration options
 * 
 * @example
 * // Save user preferences
 * setObjectCookie('userPrefs', {
 *   theme: 'dark',
 *   notifications: true
 * }, { expirationDays: 30 });
 */
export const setObjectCookie = <T>(
    name: string,
    value: T,
    options: CookieOptions = {}
): void => {
    const jsonValue = JSON.stringify(value);
    setCookie(name, jsonValue, options);
};

/**
 * Retrieves a JSON object stored in a cookie
 * 
 * @param name - Cookie name
 * @returns The deserialized object or null if the cookie does not exist or is invalid
 * 
 * @example
 * const userPrefs = getObjectCookie<{theme: string, notifications: boolean}>('userPrefs');
 * if (userPrefs && userPrefs.theme === 'dark') {
 *   // Apply dark theme
 * }
 */
export const getObjectCookie = <T>(name: string): T | null => {
    const cookieValue = getCookie(name);
    if (!cookieValue) return null;

    try {
        return JSON.parse(cookieValue) as T;
    } catch (e) {
        console.error(`Error parsing cookie '${name}' as JSON:`, e);
        return null;
    }
};

/**
 * Creates a cookie with a basic encoded value (not secure, just obfuscation)
 * For real encryption, use a proper encryption library
 * 
 * @param name - Cookie name
 * @param value - Value to encode
 * @param options - Configuration options
 */
export const setEncodedCookie = (
    name: string,
    value: string,
    options: CookieOptions = {}
): void => {
    const encoded = btoa(encodeURIComponent(value));
    setCookie(name, encoded, options);
};

/**
 * Retrieves and decodes the value of a cookie encoded with setEncodedCookie
 * 
 * @param name - Cookie name
 * @returns Decoded value or empty string if the cookie does not exist or is invalid
 */
export const getDecodedCookie = (name: string): string => {
    const value = getCookie(name);
    if (!value) return '';

    try {
        return decodeURIComponent(atob(value));
    } catch (e) {
        console.error(`Error decoding cookie '${name}':`, e);
        return '';
    }
};

/**
 * Creates a cookie that will expire after a specific time in seconds
 * 
 * @param name - Cookie name
 * @param value - Cookie value
 * @param maxAgeSeconds - Time to live in seconds
 * @param options - Additional options
 * 
 * @example
 * // Cookie that will last exactly 1 hour
 * setMaxAgeCookie('temp_session', 'active', 3600);
 */
export const setMaxAgeCookie = (
    name: string,
    value: string,
    maxAgeSeconds: number,
    options: Omit<CookieOptions, 'expirationDays' | 'expires'> = {}
): void => {
    let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${maxAgeSeconds}`;

    // Add additional options
    if (options.path) cookieStr += `; path=${options.path}`;
    if (options.domain) cookieStr += `; domain=${options.domain}`;
    if (options.secure) cookieStr += `; secure`;
    if (options.httpOnly) cookieStr += `; httpOnly`;
    if (options.sameSite) cookieStr += `; sameSite=${options.sameSite}`;

    document.cookie = cookieStr;
};

/**
 * Sets or updates multiple cookies at once
 * 
 * @param cookiesData - Object with cookies to set (name: value)
 * @param options - Common options for all cookies
 * 
 * @example
 * setBulkCookies({
 *   userId: '12345',
 *   role: 'admin',
 *   theme: 'light'
 * }, { expirationDays: 7 });
 */
export const setBulkCookies = (
    cookiesData: Record<string, string>,
    options: CookieOptions = {}
): void => {
    Object.entries(cookiesData).forEach(([name, value]) => {
        setCookie(name, value, options);
    });
};

/**
 * Appends a value to a cookie that contains comma-separated values
 * 
 * @param name - Cookie name
 * @param value - Value to append
 * @param options - Cookie options
 * 
 * @example
 * // Add a product to the viewed products history
 * appendToCookie('viewed_products', 'product-123', { expirationDays: 30 });
 */
export const appendToCookie = (
    name: string,
    value: string,
    options: CookieOptions = {}
): void => {
    const currentValue = getCookie(name);
    const newValue = currentValue
        ? `${currentValue},${value}`
        : value;

    setCookie(name, newValue, options);
};

/**
 * Gets an array of values from a cookie with comma-separated values
 * 
 * @param name - Cookie name
 * @returns Array with the values or empty array if the cookie does not exist
 * 
 * @example
 * const viewedProducts = getCookieValueArray('viewed_products');
 * // ['product-123', 'product-456', 'product-789']
 */
export const getCookieValueArray = (name: string): string[] => {
    const value = getCookie(name);
    return value ? value.split(',') : [];
};
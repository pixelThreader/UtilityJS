/**
 * Utility class that performs various storage operations.
 * @class StorageUtility
 */
class StorageUtility {
    // Local Storage Methods

    /**
     * Sets a key-value pair in local storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     */
    localStorageSet(key, value) {
        localStorage.setItem(key, value);
    }

    /**
     * Gets a value from local storage by key.
     * @param {string} key - The key to get.
     * @returns {string|null} - The value, or null if not found.
     */
    localStorageGet(key) {
        return localStorage.getItem(key);
    }

    /**
     * Removes a key-value pair from local storage.
     * @param {string} key - The key to remove.
     */
    localStorageRemove(key) {
        localStorage.removeItem(key);
    }

    /**
     * Clears all key-value pairs from local storage.
     */
    localStorageClear() {
        localStorage.clear();
    }

    /**
     * Checks if a key exists in local storage.
     * @param {string} key - The key to check.
     * @returns {boolean} - True if the key exists, false otherwise.
     */
    localStorageHasKey(key) {
        return localStorage.getItem(key) !== null;
    }

    /**
     * Sets a JSON object in local storage.
     * @param {string} key - The key to set.
     * @param {Object} value - The JSON object to set.
     */
    localStorageSetJSON(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Gets a JSON object from local storage.
     * @param {string} key - The key to get.
     * @returns {Object|null} - The JSON object, or null if not found.
     */
    localStorageGetJSON(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    /**
     * Sets a namespaced key-value pair in local storage.
     * @param {string} namespace - The namespace for the key.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     */
    localStorageSetNamespaced(namespace, key, value) {
        localStorage.setItem(`${namespace}:${key}`, value);
    }

    /**
     * Gets a namespaced value from local storage by key.
     * @param {string} namespace - The namespace for the key.
     * @param {string} key - The key to get.
     * @returns {string|null} - The value, or null if not found.
     */
    localStorageGetNamespaced(namespace, key) {
        return localStorage.getItem(`${namespace}:${key}`);
    }

    // Session Storage Methods

    /**
     * Sets a key-value pair in session storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     */
    sessionStorageSet(key, value) {
        sessionStorage.setItem(key, value);
    }

    /**
     * Gets a value from session storage by key.
     * @param {string} key - The key to get.
     * @returns {string|null} - The value, or null if not found.
     */
    sessionStorageGet(key) {
        return sessionStorage.getItem(key);
    }

    /**
     * Removes a key-value pair from session storage.
     * @param {string} key - The key to remove.
     */
    sessionStorageRemove(key) {
        sessionStorage.removeItem(key);
    }

    /**
     * Clears all key-value pairs from session storage.
     */
    sessionStorageClear() {
        sessionStorage.clear();
    }

    /**
     * Checks if a key exists in session storage.
     * @param {string} key - The key to check.
     * @returns {boolean} - True if the key exists, false otherwise.
     */
    sessionStorageHasKey(key) {
        return sessionStorage.getItem(key) !== null;
    }

    /**
     * Sets a JSON object in session storage.
     * @param {string} key - The key to set.
     * @param {Object} value - The JSON object to set.
     */
    sessionStorageSetJSON(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Gets a JSON object from session storage.
     * @param {string} key - The key to get.
     * @returns {Object|null} - The JSON object, or null if not found.
     */
    sessionStorageGetJSON(key) {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    /**
     * Sets a namespaced key-value pair in session storage.
     * @param {string} namespace - The namespace for the key.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     */
    sessionStorageSetNamespaced(namespace, key, value) {
        sessionStorage.setItem(`${namespace}:${key}`, value);
    }

    /**
     * Gets a namespaced value from session storage by key.
     * @param {string} namespace - The namespace for the key.
     * @param {string} key - The key to get.
     * @returns {string|null} - The value, or null if not found.
     */
    sessionStorageGetNamespaced(namespace, key) {
        return sessionStorage.getItem(`${namespace}:${key}`);
    }

    // Cookie Methods

    /**
     * Sets a cookie with optional path and domain.
     * @param {string} name - The name of the cookie.
     * @param {string} value - The value of the cookie.
     * @param {number} [days] - The number of days until the cookie expires.
     * @param {string} [path] - The path for the cookie.
     * @param {string} [domain] - The domain for the cookie.
     */
    cookieSet(name, value, days, path = '/', domain = '') {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        const domainString = domain ? '; domain=' + domain : '';
        document.cookie = name + '=' + (value || '') + expires + '; path=' + path + domainString;
    }

    /**
     * Gets a cookie by name.
     * @param {string} name - The name of the cookie.
     * @returns {string|null} - The cookie value, or null if not found.
     */
    cookieGet(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    /**
     * Removes a cookie by name.
     * @param {string} name - The name of the cookie.
     */
    cookieRemove(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    /**
     * Gets all cookies.
     * @returns {Object} - An object containing all cookies as key-value pairs.
     */
    cookieGetAll() {
        const cookies = document.cookie.split(';');
        const result = {};
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            result[name] = value;
        });
        return result;
    }

    /**
     * Removes all cookies.
     */
    cookieRemoveAll() {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name] = cookie.trim().split('=');
            document.cookie = name + '=; Max-Age=-99999999;';
        });
    }

    /**
     * Sets a JSON object in cookies.
     * @param {string} name - The name of the cookie.
     * @param {Object} value - The JSON object to set.
     * @param {number} [days] - The number of days until the cookie expires.
     * @param {string} [path] - The path for the cookie.
     * @param {string} [domain] - The domain for the cookie.
     */
    cookieSetJSON(name, value, days, path = '/', domain = '') {
        this.cookieSet(name, JSON.stringify(value), days, path, domain);
    }

    /**
     * Gets a JSON object from cookies by name.
     * @param {string} name - The name of the cookie.
     * @returns {Object|null} - The JSON object, or null if not found.
     */
    cookieGetJSON(name) {
        const value = this.cookieGet(name);
        return value ? JSON.parse(value) : null;
    }

    /**
     * Sets an encrypted value in local storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     * @param {string} secret - The secret key for encryption.
     */
    localStorageSetEncrypted(key, value, secret) {
        const encryptedValue = btoa(unescape(encodeURIComponent(value))); // Simple base64 encoding for demo purposes
        localStorage.setItem(key, encryptedValue);
    }

    /**
     * Gets a decrypted value from local storage.
     * @param {string} key - The key to get.
     * @param {string} secret - The secret key for decryption.
     * @returns {string|null} - The decrypted value, or null if not found.
     */
    localStorageGetEncrypted(key, secret) {
        const value = localStorage.getItem(key);
        if (!value) return null;
        return decodeURIComponent(escape(atob(value))); // Simple base64 decoding for demo purposes
    }

    /**
     * Sets an encrypted value in session storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     * @param {string} secret - The secret key for encryption.
     */
    sessionStorageSetEncrypted(key, value, secret) {
        const encryptedValue = btoa(unescape(encodeURIComponent(value))); // Simple base64 encoding for demo purposes
        sessionStorage.setItem(key, encryptedValue);
    }

    /**
     * Gets a decrypted value from session storage.
     * @param {string} key - The key to get.
     * @param {string} secret - The secret key for decryption.
     * @returns {string|null} - The decrypted value, or null if not found.
     */
    sessionStorageGetEncrypted(key, secret) {
        const value = sessionStorage.getItem(key);
        if (!value) return null;
        return decodeURIComponent(escape(atob(value))); // Simple base64 decoding for demo purposes
    }

    /**
     * Sets an encrypted value in cookies.
     * @param {string} name - The name of the cookie.
     * @param {string} value - The value to set.
     * @param {string} secret - The secret key for encryption.
     * @param {number} [days] - The number of days until the cookie expires.
     * @param {string} [path] - The path for the cookie.
     * @param {string} [domain] - The domain for the cookie.
     */
    cookieSetEncrypted(name, value, secret, days, path = '/', domain = '') {
        const encryptedValue = btoa(unescape(encodeURIComponent(value))); // Simple base64 encoding for demo purposes
        this.cookieSet(name, encryptedValue, days, path, domain);
    }

    /**
     * Gets a decrypted value from cookies by name.
     * @param {string} name - The name of the cookie.
     * @param {string} secret - The secret key for decryption.
     * @returns {string|null} - The decrypted value, or null if not found.
     */
    cookieGetEncrypted(name, secret) {
        const value = this.cookieGet(name);
        if (!value) return null;
        return decodeURIComponent(escape(atob(value))); // Simple base64 decoding for demo purposes
    }

    /**
     * Sets a value with expiration in local storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     * @param {number} ttl - Time to live in milliseconds.
     */
    localStorageSetWithTTL(key, value, ttl) {
        const expires = Date.now() + ttl;
        const data = { value, expires };
        localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Gets a value from local storage considering TTL.
     * @param {string} key - The key to get.
     * @returns {string|null} - The value, or null if not found or expired.
     */
    localStorageGetWithTTL(key) {
        const data = JSON.parse(localStorage.getItem(key));
        if (!data) return null;
        if (Date.now() > data.expires) {
            localStorage.removeItem(key);
            return null;
        }
        return data.value;
    }

    /**
     * Sets a value with expiration in session storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     * @param {number} ttl - Time to live in milliseconds.
     */
    sessionStorageSetWithTTL(key, value, ttl) {
        const expires = Date.now() + ttl;
        const data = { value, expires };
        sessionStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Gets a value from session storage considering TTL.
     * @param {string} key - The key to get.
     * @returns {string|null} - The value, or null if not found or expired.
     */
    sessionStorageGetWithTTL(key) {
        const data = JSON.parse(sessionStorage.getItem(key));
        if (!data) return null;
        if (Date.now() > data.expires) {
            sessionStorage.removeItem(key);
            return null;
        }
        return data.value;
    }

    /**
     * Sets a JSON object with expiration in local storage.
     * @param {string} key - The key to set.
     * @param {Object} value - The JSON object to set.
     * @param {number} ttl - Time to live in milliseconds.
     */
    localStorageSetJSONWithTTL(key, value, ttl) {
        const expires = Date.now() + ttl;
        const data = { value, expires };
        localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Gets a JSON object from local storage considering TTL.
     * @param {string} key - The key to get.
     * @returns {Object|null} - The JSON object, or null if not found or expired.
     */
    localStorageGetJSONWithTTL(key) {
        const data = JSON.parse(localStorage.getItem(key));
        if (!data) return null;
        if (Date.now() > data.expires) {
            localStorage.removeItem(key);
            return null;
        }
        return data.value;
    }

    /**
     * Sets a JSON object with expiration in session storage.
     * @param {string} key - The key to set.
     * @param {Object} value - The JSON object to set.
     * @param {number} ttl - Time to live in milliseconds.
     */
    sessionStorageSetJSONWithTTL(key, value, ttl) {
        const expires = Date.now() + ttl;
        const data = { value, expires };
        sessionStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Gets a JSON object from session storage considering TTL.
     * @param {string} key - The key to get.
     * @returns {Object|null} - The JSON object, or null if not found or expired.
     */
    sessionStorageGetJSONWithTTL(key) {
        const data = JSON.parse(sessionStorage.getItem(key));
        if (!data) return null;
        if (Date.now() > data.expires) {
            sessionStorage.removeItem(key);
            return null;
        }
        return data.value;
    }

    /**
     * Sets an encrypted JSON object in local storage.
     * @param {string} key - The key to set.
     * @param {Object} value - The JSON object to set.
     * @param {string} secret - The secret key for encryption.
     */
    localStorageSetEncryptedJSON(key, value, secret) {
        const encryptedValue = btoa(unescape(encodeURIComponent(JSON.stringify(value)))); // Simple base64 encoding for demo purposes
        localStorage.setItem(key, encryptedValue);
    }

    /**
     * Gets a decrypted JSON object from local storage.
     * @param {string} key - The key to get.
     * @param {string} secret - The secret key for decryption.
     * @returns {Object|null} - The decrypted JSON object, or null if not found.
     */
    localStorageGetEncryptedJSON(key, secret) {
        const value = localStorage.getItem(key);
        if (!value) return null;
        return JSON.parse(decodeURIComponent(escape(atob(value)))); // Simple base64 decoding for demo purposes
    }

    /**
     * Sets an encrypted JSON object in session storage.
     * @param {string} key - The key to set.
     * @param {Object} value - The JSON object to set.
     * @param {string} secret - The secret key for encryption.
     */
    sessionStorageSetEncryptedJSON(key, value, secret) {
        const encryptedValue = btoa(unescape(encodeURIComponent(JSON.stringify(value)))); // Simple base64 encoding for demo purposes
        sessionStorage.setItem(key, encryptedValue);
    }

    /**
     * Gets a decrypted JSON object from session storage.
     * @param {string} key - The key to get.
     * @param {string} secret - The secret key for decryption.
     * @returns {Object|null} - The decrypted JSON object, or null if not found.
     */
    sessionStorageGetEncryptedJSON(key, secret) {
        const value = sessionStorage.getItem(key);
        if (!value) return null;
        return JSON.parse(decodeURIComponent(escape(atob(value)))); // Simple base64 decoding for demo purposes
    }
}

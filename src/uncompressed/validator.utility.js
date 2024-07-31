/**
 * 
 * 
 * ░▒▓█▓▒░░▒▓█▓▒░░▒▓████████▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓████████▓▒░░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░ ░▒▓███████▓▒░
 * ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░       
 * ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░       
 * ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░     ░▒▓██████▓▒░    ░▒▓█▓▒░ ░▒▓██████▓▒░ 
 * ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░
 * ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░
 *  ░▒▓██████▓▒░    ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓████████▓▒░░▒▓█▓▒░   ░▒▓█▓▒░       ░▒▓█▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░ 
 * 
 * 
 * UtilityJs | validator
 * 
 * UtilityJs is a comprehensive JavaScript utility library designed to streamline development, reduce code complexity, and boost productivity through a wide array of utilities.
 * 
 * @copyright (c) UtilityJs
 * @license MIT License
 * 
 * NOTICE: Unauthorized redistribution of any UtilityJs libraries is prohibited. Redistribution is permitted exclusively under the Enterprise plan. Violators may face legal action.
 * For detailed terms of use, visit: https://utilityjs.com/privacy/legal-actions
 */





/**
 * Utility class that performs various validation operations.
 * @class ValidUtility
 */
class ValidUtility {
    /**
     * Validates if the string is a valid email address.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validates if the string is a valid URL.
     * @param {string} url - The URL to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateURL(url) {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlRegex.test(url);
    }

    /**
     * Validates if the string is a valid phone number.
     * @param {string} phoneNumber - The phone number to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneRegex.test(phoneNumber);
    }

    /**
     * Validates if the string is a valid credit card number.
     * @param {string} creditCard - The credit card number to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateCreditCard(creditCard) {
        const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        return creditCardRegex.test(creditCard);
    }

    /**
     * Validates if the string is a valid postal code.
     * @param {string} postalCode - The postal code to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validatePostalCode(postalCode) {
        const postalCodeRegex = /^[A-Za-z0-9]{3,10}$/;
        return postalCodeRegex.test(postalCode);
    }

    /**
     * Validates if the string is a valid SSN (Social Security Number).
     * @param {string} ssn - The SSN to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateSSN(ssn) {
        const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
        return ssnRegex.test(ssn);
    }

    /**
     * Validates if the string is a valid IBAN (International Bank Account Number).
     * @param {string} iban - The IBAN to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateIBAN(iban) {
        const ibanRegex = /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/;
        return ibanRegex.test(iban);
    }

    /**
     * Validates if the string is a valid UUID (Universally Unique Identifier).
     * @param {string} uuid - The UUID to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateUUID(uuid) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidRegex.test(uuid);
    }

    /**
     * Validates if the string is a valid IPv4 address.
     * @param {string} ipv4 - The IPv4 address to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateIPv4(ipv4) {
        const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipv4Regex.test(ipv4);
    }

    /**
     * Validates if the string is a valid IPv6 address.
     * @param {string} ipv6 - The IPv6 address to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateIPv6(ipv6) {
        const ipv6Regex = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;
        return ipv6Regex.test(ipv6);
    }
}

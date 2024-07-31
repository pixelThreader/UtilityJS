/**
 * RegexUtility Class
 * A class with utility functions for working with regular expressions in JavaScript.
 * Usage:
 *   const reg = new RegexUtility();
 *   const regex1 = /abc/gi;
 *   const info1 = reg.understandRegex(regex1);
 *   console.log(info1); // Output: { pattern: "abc", flags: "gi" }
 */

const patterns = [
    {
        sno: 1,
        regex: /[a-z]/,
        need: "alphabets_small_case",
        value_possibles: "abcdefghijklmnopqrstuvwxyz"
    },
    {
        sno: 2,
        regex: /[A-Z]/,
        need: "alphabets_capital_case",
        value_possibles: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
        sno: 3,
        regex: /[0-9]/,
        need: "numbers",
        value_possibles: "0123456789"
    },
    {
        sno: 4,
        regex: /\s/,
        need: "whitespace",
        value_possibles: " "
    },
    {
        sno: 5,
        regex: /\b\w+\b/,
        need: "words",
        value_possibles: "Any word"
    },
    {
        sno: 6,
        regex: /\d{3}-\d{2}-\d{4}/,
        need: "date",
        value_possibles: "Any date"
    }
    // Add more patterns as needed
];

class RegexUtility {
    /**
     * Analyzes a regex pattern and categorizes it based on common needs.
     * @param {string} regexPattern - The regex pattern to analyze.
     * @returns {Array} An array of objects categorizing the regex patterns.
     */
    understandRegex(regexPattern) {


        const results = [];

        patterns.forEach(pattern => {
            const regex = new RegExp(pattern.regex);
            if (regexPattern.match(regex)) {
                results.push({
                    sno: pattern.sno,
                    regex: pattern.regex.toString(),
                    need: pattern.need,
                    value_possibles: pattern.value_possibles
                });
            }
        });

        return results;

    }

    /**
     * Matches a regex pattern against a given string and returns matches.
     * @param {string} str - The string to match against.
     * @param {RegExp} regex - The regular expression to use for matching.
     * @returns {Array} An array of matches or null if no match is found.
     */
    matchRegex(str, regex) {
        return str.match(regex);
    }

    /**
     * Checks if a regex pattern is valid and returns true/false.
     * @param {string} pattern - The regex pattern as a string.
     * @returns {boolean} True if valid, false otherwise.
     */
    validateRegex(pattern) {
        try {
            new RegExp(pattern);
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Escapes special characters in a regex pattern to avoid interpretation.
     * @param {string} pattern - The regex pattern as a string.
     * @returns {string} The escaped regex pattern.
     */
    escapeRegex(pattern) {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * Replaces matches of a regex pattern in a string with a replacement.
     * @param {string} str - The string to perform replacements on.
     * @param {RegExp} regex - The regular expression to match.
     * @param {string} replacement - The replacement string.
     * @returns {string} The string with replacements.
     */
    replaceRegex(str, regex, replacement) {
        return str.replace(regex, replacement);
    }

    /**
     * Splits a string into an array using a regex pattern as the delimiter.
     * @param {string} str - The string to split.
     * @param {RegExp} regex - The regular expression to use as the delimiter.
     * @returns {Array} The array of split substrings.
     */
    splitRegex(str, regex) {
        return str.split(regex);
    }

    /**
     * Finds the first occurrence of a regex pattern in a string and returns its index.
     * @param {string} str - The string to search.
     * @param {RegExp} regex - The regular expression to find.
     * @returns {number} The index of the first match, or -1 if not found.
     */
    findRegex(str, regex) {
        const match = str.match(regex);
        return match ? str.indexOf(match[0]) : -1;
    }

    /**
     * Finds all occurrences of a regex pattern in a string and returns an array of matches.
     * @param {string} str - The string to search.
     * @param {RegExp} regex - The regular expression to find.
     * @returns {Array} An array of all matches.
     */
    findAllRegex(str, regex) {
        const matches = [];
        let match;
        while ((match = regex.exec(str)) !== null) {
            matches.push(match[0]);
            if (!regex.global) break; // Prevent infinite loop if regex is not global
        }
        return matches;
    }

    /**
     * Counts how many times a regex pattern matches in a string.
     * @param {string} str - The string to search.
     * @param {RegExp} regex - The regular expression to count matches.
     * @returns {number} The number of matches.
     */
    countMatchesRegex(str, regex) {
        return (str.match(regex) || []).length;
    }

    /**
     * Checks if a string starts with a substring matching a regex pattern.
     * @param {string} str - The string to check.
     * @param {RegExp} regex - The regular expression to match.
     * @returns {boolean} True if it starts with the pattern, false otherwise.
     */
    startsWithRegex(str, regex) {
        return regex.test(str) && str.search(regex) === 0;
    }

    /**
     * Checks if a string ends with a substring matching a regex pattern.
     * @param {string} str - The string to check.
     * @param {RegExp} regex - The regular expression to match.
     * @returns {boolean} True if it ends with the pattern, false otherwise.
     */
    endsWithRegex(str, regex) {
        const match = str.match(regex);
        return match ? (str.length === str.lastIndexOf(match[0]) + match[0].length) : false;
    }

    /**
     * Tests if a string matches a regex pattern and returns true/false.
     * @param {string} str - The string to test.
     * @param {RegExp} regex - The regular expression to test.
     * @returns {boolean} True if it matches, false otherwise.
     */
    testRegex(str, regex) {
        return regex.test(str);
    }

    /**
     * Extracts capture groups from a regex match and returns them as an array.
     * @param {string} str - The string to search.
     * @param {RegExp} regex - The regular expression to extract groups.
     * @returns {Array} An array of capture groups.
     */
    extractRegexGroups(str, regex) {
        const match = str.match(regex);
        return match ? match.slice(1) : [];
    }

    /**
     * Trims leading and trailing whitespace from a string using a regex pattern.
     * @param {string} str - The string to trim.
     * @param {RegExp} regex - The regular expression to use for trimming.
     * @returns {string} The trimmed string.
     */
    trimRegex(str, regex) {
        return str.replace(regex, '');
    }

    /**
     * Uses a regex pattern to validate an email address format.
     * @param {string} email - The email address to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Uses a regex pattern to validate a phone number format.
     * @param {string} phone - The phone number to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    validatePhone(phone) {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    }

    /**
     * Formats strings based on a regex pattern, such as adding delimiters or formatting dates.
     * @param {string} str - The string to format.
     * @param {RegExp} regex - The regular expression to match for formatting.
     * @param {string} format - The format to apply.
     * @returns {string} The formatted string.
     */
    formatRegex(str, regex, format) {
        return str.replace(regex, format);
    }

    /**
     * Parses structured data from strings using regex patterns, like extracting JSON or XML fragments.
     * @param {string} str - The string to parse.
     * @param {RegExp} regex - The regular expression to match for parsing.
     * @returns {Array} An array of parsed fragments.
     */
    parseRegex(str, regex) {
        const matches = [];
        let match;
        while ((match = regex.exec(str)) !== null) {
            matches.push(match[1]);
            if (!regex.global) break; // Prevent infinite loop if regex is not global
        }
        return matches;
    }

    /**
     * Dynamically generates regex patterns based on input criteria.
     * @param {Object} criteria - The criteria to generate the regex pattern.
     * @returns {RegExp} The generated regular expression.
     */
    generateRegex(criteria) {
        let pattern = '';
        if (criteria.startsWith) {
            pattern += '^' + this.escapeRegex(criteria.startsWith);
        }
        if (criteria.contains) {
            pattern += this.escapeRegex(criteria.contains);
        }
        if (criteria.endsWith) {
            pattern += this.escapeRegex(criteria.endsWith) + '$';
        }
        return new RegExp(pattern, criteria.flags || '');
    }
}



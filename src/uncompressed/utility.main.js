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
 * UtilityJs | main
 * Author: pixelThreader (Piyush Rana) 
 * @license MIT License 'https://raw.githubusercontent.com/piyush20B/UtilityJS/main/LICENSE'
 * 
 * A JavaScript utility library aiming to make life easier, save code,
 * and enhance productivity with a wide range of utilities.
 * 
 */


//  Core uts functions
(function(global) {
    'use strict';

    var utilitySelector = function(selector) {
        return new utilitySelector.fn.init(selector);
    };
    
    utilitySelector.info = function() {
        return {
            name: 'UtilityJS',
            origin: 'India',
            version: '1.0.0',
            author: 'pixelThreader (Piyush Rana)',
            license: 'MIT',
            lisenceUrl: 'https://raw.githubusercontent.com/piyush20B/UtilityJS/main/LICENSE'
        };
    };

    utilitySelector.fn = utilitySelector.prototype = {
        init: function(selector) {
            if (!selector) return this;
            this.elements = document.querySelectorAll(selector);
            return this;
        },
        eachone: function(callback) {
            this.elements.forEach((element, index) => {
                callback.call(element, index, element);
            });
            return this;
        },
        classAdd: function(className) {
            return this.eachone(function() {
                this.classList.add(className);
            });
        },
        classRemove: function(className) {
            return this.eachone(function() {
                this.classList.remove(className);
            });
        },
        classToggle: function(className) {
            return this.eachone(function() {
                this.classList.toggle(className);
            });
        },
        attrAdd: function(attrName, value) {
            return this.eachone(function() {
                this.setAttribute(attrName, value);
            });
        },
        attrRemove: function(attrName) {
            return this.eachone(function() {
                this.removeAttribute(attrName);
            });
        },
        attr: function(attrName, value) {
            if (value === undefined) {
                return this.elements[0].getAttribute(attrName);
            }
            return this.eachone(function() {
                this.setAttribute(attrName, value);
            });
        },
        remove: function() {
            return this.eachone(function() {
                this.parentNode.removeChild(this);
            });
        },
        setOrGetHTML: function(html) {
            if (html === undefined) {
                return this.elements[0].innerHTML;
            }
            return this.eachone(function() {
                this.innerHTML = html;
            });
        },
        setOrGetText: function(text) {
            if (text === undefined) {
                return this.elements[0].textContent;
            }
            return this.eachone(function() {
                this.textContent = text;
            });
        },
        isClassPresent: function(className) {
            return this.elements[0].classList.contains(className);
        },
        isAttrPresent: function(attrName) {
            return this.elements[0].hasAttribute(attrName);
        },
        getStyle: function(styleName) {
            return this.elements[0].style[styleName];
        },
        addStyle: function(styles) {
            return this.eachone(function() {
                for (let property in styles) {
                    this.style[property] = styles[property];
                }
            });
        },
        removeStyle: function(styles) {
            return this.eachone(function() {
                if (Array.isArray(styles)) {
                    styles.forEach(style => {
                        this.style[style] = '';
                    });
                } else {
                    this.style[styles] = '';
                }
            });
        },
        create: function(tag) {
            var element = document.createElement(tag);
            return utilitySelector(element);
        },
        appendTo: function(element) {
            let parent = document.querySelector(element);
            return this.eachone(function() {
                parent.appendChild(this);
            });
        },
        prependTo: function(element) {
            let parent = document.querySelector(element);
            return this.eachone(function() {
                parent.insertBefore(this, parent.firstChild);
            });
        },
        insertAfter: function(element) {
            let referenceNode = document.querySelector(element);
            return this.eachone(function() {
                referenceNode.parentNode.insertBefore(this, referenceNode.nextSibling);
            });
        },
        insertBefore: function(element) {
            let referenceNode = document.querySelector(element);
            return this.eachone(function() {
                referenceNode.parentNode.insertBefore(this, referenceNode);
            });
        }
    };

    // Extend prototype with native DOM methods
    var nativeMethods = [
        'getAttribute', 'setAttribute', 'removeAttribute', 'addEventListener', 'removeEventListener',
        'appendChild', 'removeChild', 'replaceChild', 'cloneNode', 'insertBefore', 'querySelector',
        'querySelectorAll', 'focus', 'blur', 'click', 'classList', 'style'
    ];

    nativeMethods.forEach(function(method) {
        utilitySelector.fn[method] = function() {
            var args = arguments;
            if (this.elements.length > 0 && typeof this.elements[0][method] === 'function') {
                if (args.length > 0) {
                    return this.elements[0][method].apply(this.elements[0], args);
                } else {
                    return this.elements[0][method]();
                }
            }
        };
    });

    utilitySelector.fn.init.prototype = utilitySelector.fn;

    global.uts = global.utilitySelector = utilitySelector;

})(typeof window !== 'undefined' ? window : this);


/**
 * Utility class that performs string utility operations.
 * @class StringUtility
 */
class StringUtility {

    /**
     * Validates that the input is a string.
     * @param {any} input - The input to validate.
     * @throws Will throw an error if the input is not a string.
     */
    validateString(input) {
        if (typeof input !== 'string') {
            throw new Error('Input must be a string');
        }
    }

    /**
     * Trims whitespace from the string.
     * @param {string} str - The string to trim.
     * @returns {string} The trimmed string.
     */
    stringTrim(str) {
        try {
            this.validateString(str);
            return str.trim();
        } catch (error) {
            console.error('Error trimming string:', error.message);
        }
    }

    /**
     * Converts the string to uppercase.
     * @param {string} str - The string to convert.
     * @returns {string} The uppercase string.
     */
    stringToUpperCase(str) {
        try {
            this.validateString(str);
            return str.toUpperCase();
        } catch (error) {
            console.error('Error converting string to uppercase:', error.message);
        }
    }

    /**
     * Converts the string to lowercase.
     * @param {string} str - The string to convert.
     * @returns {string} The lowercase string.
     */
    stringToLowerCase(str) {
        try {
            this.validateString(str);
            return str.toLowerCase();
        } catch (error) {
            console.error('Error converting string to lowercase:', error.message);
        }
    }

    /**
     * Capitalizes the first letter of the string.
     * @param {string} str - The string to capitalize.
     * @returns {string} The capitalized string.
     */
    stringCapitalize(str) {
        try {
            this.validateString(str);
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        } catch (error) {
            console.error('Error capitalizing string:', error.message);
        }
    }

    /**
     * Capitalizes the first letter of the string.
     * @param {string} str - The string to capitalize.
     * @returns {string} The capitalized string.
     */
    stringCapitalizeEach(str) {
        try {
            this.validateString(str);
            return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        } catch (error) {
            console.error('Error capitalizing string:', error.message);
        }
    }

    /**
     * Converts the string to camel case.
     * @param {string} str - The string to convert.
     * @returns {string} The camel case string.
     */
    stringCamelCase(str) {
        try {
            this.validateString(str);
            return str
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
        } catch (error) {
            console.error('Error converting string to camel case:', error.message);
        }
    }

    /**
     * Converts the string to snake case.
     * @param {string} str - The string to convert.
     * @returns {string} The snake case string.
     */
    stringSnakeCase(str) {
        try {
            this.validateString(str);
            return str
                .replace(/\W+/g, ' ')
                .split(/ |\B(?=[A-Z])/)
                .map(word => word.toLowerCase())
                .join('_');
        } catch (error) {
            console.error('Error converting string to snake case:', error.message);
        }
    }

    /**
     * Converts the string to kebab case.
     * @param {string} str - The string to convert.
     * @returns {string} The kebab case string.
     */
    stringKebabCase(str) {
        try {
            this.validateString(str);
            return str
                .replace(/\W+/g, ' ')
                .split(/ |\B(?=[A-Z])/)
                .map(word => word.toLowerCase())
                .join('-');
        } catch (error) {
            console.error('Error converting string to kebab case:', error.message);
        }
    }

    /**
     * Reverses the string.
     * @param {string} str - The string to reverse.
     * @returns {string} The reversed string.
     */
    stringReverse(str) {
        try {
            this.validateString(str);
            return str.split('').reverse().join('');
        } catch (error) {
            console.error('Error reversing string:', error.message);
        }
    }

    /**
     * Checks if the string includes a substring.
     * @param {string} str - The main string.
     * @param {string} substr - The substring to check for.
     * @returns {boolean} True if the substring is found, otherwise false.
     */
    stringIncludes(str, substr) {
        try {
            this.validateString(str);
            this.validateString(substr);
            return str.includes(substr);
        } catch (error) {
            console.error('Error checking if string includes substring:', error.message);
        }
    }

    /**
     * Checks if the string starts with a substring.
     * @param {string} str - The main string.
     * @param {string} substr - The substring to check for.
     * @returns {boolean} True if the string starts with the substring, otherwise false.
     */
    stringStartsWith(str, substr) {
        try {
            this.validateString(str);
            this.validateString(substr);
            return str.startsWith(substr);
        } catch (error) {
            console.error('Error checking if string starts with substring:', error.message);
        }
    }

    /**
     * Checks if the string ends with a substring.
     * @param {string} str - The main string.
     * @param {string} substr - The substring to check for.
     * @returns {boolean} True if the string ends with the substring, otherwise false.
     */
    stringEndsWith(str, substr) {
        try {
            this.validateString(str);
            this.validateString(substr);
            return str.endsWith(substr);
        } catch (error) {
            console.error('Error checking if string ends with substring:', error.message);
        }
    }

    /**
     * Repeats the string a specified number of times.
     * @param {string} str - The string to repeat.
     * @param {number} times - The number of times to repeat the string.
     * @returns {string} The repeated string.
     */
    stringRepeat(str, times) {
        try {
            this.validateString(str);
            if (typeof times !== 'number' || times < 0) {
                throw new Error('Times must be a non-negative number');
            }
            return str.repeat(times);
        } catch (error) {
            console.error('Error repeating string:', error.message);
        }
    }

    /**
     * Replaces a substring with a new string.
     * @param {string} str - The main string.
     * @param {string} searchValue - The substring to replace.
     * @param {string} newValue - The new string to replace the substring with.
     * @returns {string} The string with the substring replaced.
     */
    stringReplace(str, searchValue, newValue) {
        try {
            this.validateString(str);
            this.validateString(searchValue);
            this.validateString(newValue);

            const regex = new RegExp(searchValue, 'g');
            const result = str.replace(regex, newValue);

            if (result === str) {
                throw new Error(`No matches found for "${searchValue}"`);
            }

            return result;
        } catch (error) {
            console.error('Error replacing substring in string:', error.message);
        }
    }


    /**
     * Escapes special characters in the string.
     * @param {string} str - The string to escape.
     * @returns {string} The escaped string.
     */
    stringEscape(str) {
        try {
            this.validateString(str);
            return str.replace(/[.*+?^${}()|[\]\\]/g, '');
        } catch (error) {
            console.error('Error escaping string:', error.message);
        }
    }

    /**
     * Pads the start of the string with another string until it reaches the specified length.
     * @param {string} str - The main string.
     * @param {number} targetLength - The target length of the string.
     * @param {string} padString - The string to pad with.
     * @returns {string} The padded string.
     */
    stringPadStart(str, targetLength, padString) {
        try {
            this.validateString(str);
            this.validateString(padString);
            if (typeof targetLength !== 'number' || targetLength < 0) {
                throw new Error('Target length must be a non-negative number');
            }
            return str.padStart(targetLength, padString);
        } catch (error) {
            console.error('Error padding start of string:', error.message);
        }
    }

    /**
     * Pads the end of the string with another string until it reaches the specified length.
     * @param {string} str - The main string.
     * @param {number} targetLength - The target length of the string.
     * @param {string} padString - The string to pad with.
     * @returns {string} The padded string.
     */
    stringPadEnd(str, targetLength, padString) {
        try {
            this.validateString(str);
            this.validateString(padString);
            if (typeof targetLength !== 'number' || targetLength < 0) {
                throw new Error('Target length must be a non-negative number');
            }
            return str.padEnd(targetLength, padString);
        } catch (error) {
            console.error('Error padding end of string:', error.message);
        }
    }

    /**
     * Splits the string into an array of substrings.
     * @param {string} str - The main string.
     * @param {string|RegExp} separator - The separator to split by.
     * @returns {Array<string>} The array of substrings.
     */
    stringSplit(str, separator) {
        try {
            this.validateString(str);
            return str.split(separator);
        } catch (error) {
            console.error('Error splitting string:', error.message);
        }
    }

    /**
     * Creates a formatted string using a template and values.
     * @param {string} template - The string template.
     * @param {Object} values - The values to insert into the template.
     * @returns {string} The formatted string.
     */
    stringTemplate(template, values) {
        try {
            this.validateString(template);
            return template.replace(/\${(.*?)}/g, (match, key) => values[key.trim()]);
        } catch (error) {
            console.error('Error creating template string:', error.message);
        }
    }
}

/**
 * Utility class that performs number utility operations.
 * @class NumberUtility
 */
class NumberUtility {

    /**
     * Validates that the input is a number.
     * @param {any} input - The input to validate.
     * @throws Will throw an error if the input is not a number.
     */
    validateNumber(input) {
        if (typeof input !== 'number' || isNaN(input)) {
            throw new Error('Input must be a valid number');
        }
    }

    /**
     * Checks if the number is an integer.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is an integer, otherwise false.
     */
    numberIsInteger(num) {
        try {
            this.validateNumber(num);
            return Number.isInteger(num);
        } catch (error) {
            console.error('Error checking if number is integer:', error.message);
        }
    }

    /**
     * Checks if the number is a float.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is a float, otherwise false.
     */
    numberIsFloat(num) {
        try {
            this.validateNumber(num);
            return !Number.isInteger(num);
        } catch (error) {
            console.error('Error checking if number is float:', error.message);
        }
    }

    /**
     * Checks if the number is even.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is even, otherwise false.
     */
    numberIsEven(num) {
        try {
            this.validateNumber(num);
            return num % 2 === 0;
        } catch (error) {
            console.error('Error checking if number is even:', error.message);
        }
    }

    /**
     * Checks if the number is odd.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is odd, otherwise false.
     */
    numberIsOdd(num) {
        try {
            this.validateNumber(num);
            return num % 2 !== 0;
        } catch (error) {
            console.error('Error checking if number is odd:', error.message);
        }
    }

    /**
     * Clamps the number between a minimum and maximum value.
     * @param {number} num - The number to clamp.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The clamped number.
     */
    numberClamp(num, min, max) {
        try {
            this.validateNumber(num);
            this.validateNumber(min);
            this.validateNumber(max);
            if (min > max) throw new Error('Minimum value cannot be greater than maximum value');
            return Math.min(Math.max(num, min), max);
        } catch (error) {
            console.error('Error clamping number:', error.message);
        }
    }

    /**
     * Generates a random number between a minimum and maximum value.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The random number.
     */
    numberRandom(min, max) {
        try {
            this.validateNumber(min);
            this.validateNumber(max);
            if (min > max) throw new Error('Minimum value cannot be greater than maximum value');
            return Math.random() * (max - min) + min;
        } catch (error) {
            console.error('Error generating random number:', error.message);
        }
    }

    /**
     * Formats the number to a fixed number of decimal places.
     * @param {number} num - The number to format.
     * @param {number} digits - The number of decimal places.
     * @returns {string} The formatted number as a string.
     */
    numberToFixed(num, digits) {
        try {
            this.validateNumber(num);
            if (!Number.isInteger(digits) || digits < 0) throw new Error('Digits must be a non-negative integer');
            return num.toFixed(digits);
        } catch (error) {
            console.error('Error formatting number to fixed:', error.message);
        }
    }

    /**
     * Formats the number to a specified precision.
     * @param {number} num - The number to format.
     * @param {number} precision - The precision.
     * @returns {string} The formatted number as a string.
     */
    numberToPrecision(num, precision) {
        try {
            this.validateNumber(num);
            if (!Number.isInteger(precision) || precision < 1) throw new Error('Precision must be a positive integer');
            return num.toPrecision(precision);
        } catch (error) {
            console.error('Error formatting number to precision:', error.message);
        }
    }

    /**
     * Formats the number to a currency string.
     * @param {number} num - The number to format.
     * @param {string} locale - The locale string (e.g., 'en-US').
     * @param {string} currency - The currency code (e.g., 'USD').
     * @returns {string} The formatted currency string.
     */
    numberToCurrency(num, locale = 'en-US', currency = 'USD') {
        try {
            this.validateNumber(num);
            return num.toLocaleString(locale, { style: 'currency', currency: currency });
        } catch (error) {
            console.error('Error formatting number to currency:', error.message);
        }
    }

    /**
     * Parses a string to an integer.
     * @param {string} str - The string to parse.
     * @param {number} radix - The radix (base) to use for parsing.
     * @returns {number} The parsed integer.
     */
    numberParseInt(str, radix = 10) {
        try {
            if (typeof str !== 'string') throw new Error('Input must be a string');
            return parseInt(str, radix);
        } catch (error) {
            console.error('Error parsing string to integer:', error.message);
        }
    }

    /**
     * Parses a string to a float.
     * @param {string} str - The string to parse.
     * @returns {number} The parsed float.
     */
    numberParseFloat(str) {
        try {
            if (typeof str !== 'string') throw new Error('Input must be a string');
            return parseFloat(str);
        } catch (error) {
            console.error('Error parsing string to float:', error.message);
        }
    }

    /**
     * Rounds the number to the nearest integer.
     * @param {number} num - The number to round.
     * @returns {number} The rounded number.
     */
    numberRound(num) {
        try {
            this.validateNumber(num);
            return Math.round(num);
        } catch (error) {
            console.error('Error rounding number:', error.message);
        }
    }

    /**
     * Rounds the number up to the nearest integer.
     * @param {number} num - The number to round up.
     * @returns {number} The rounded up number.
     */
    numberCeil(num) {
        try {
            this.validateNumber(num);
            return Math.ceil(num);
        } catch (error) {
            console.error('Error rounding number up:', error.message);
        }
    }

    /**
     * Rounds the number down to the nearest integer.
     * @param {number} num - The number to round down.
     * @returns {number} The rounded down number.
     */
    numberFloor(num) {
        try {
            this.validateNumber(num);
            return Math.floor(num);
        } catch (error) {
            console.error('Error rounding number down:', error.message);
        }
    }

    /**
     * Returns the minimum value from a list of numbers.
     * @param {...number} nums - The numbers to compare.
     * @returns {number} The minimum value.
     */
    numberMin(...nums) {
        try {
            nums.forEach(this.validateNumber);
            return Math.min(...nums);
        } catch (error) {
            console.error('Error finding minimum number:', error.message);
        }
    }

    /**
     * Returns the maximum value from a list of numbers.
     * @param {...number} nums - The numbers to compare.
     * @returns {number} The maximum value.
     */
    numberMax(...nums) {
        try {
            nums.forEach(this.validateNumber);
            return Math.max(...nums);
        } catch (error) {
            console.error('Error finding maximum number:', error.message);
        }
    }

    /**
     * Returns the sum of a list of numbers.
     * @param {...number} nums - The numbers to sum.
     * @returns {number} The sum of the numbers.
     */
    numberSum(...nums) {
        try {
            nums.forEach(this.validateNumber);
            return nums.reduce((acc, num) => acc + num, 0);
        } catch (error) {
            console.error('Error summing numbers:', error.message);
        }
    }

    /**
     * Returns the average of a list of numbers.
     * @param {...number} nums - The numbers to average.
     * @returns {number} The average of the numbers.
     */
    numberAverage(...nums) {
        try {
            nums.forEach(this.validateNumber);
            return this.numberSum(...nums) / nums.length;
        } catch (error) {
            console.error('Error calculating average:', error.message);
        }
    }

    /**
     * Returns the median of a list of numbers.
     * @param {...number} nums - The numbers to find the median of.
     * @returns {number} The median of the numbers.
     */
    numberMedian(...nums) {
        try {
            nums.forEach(this.validateNumber);
            nums.sort((a, b) => a - b);
            const mid = Math.floor(nums.length / 2);
            return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        } catch (error) {
            console.error('Error calculating median:', error.message);
        }
    }

    /**
     * Returns the mode(s) of a list of numbers.
     * @param {...number} nums - The numbers to find the mode of.
     * @returns {Array<number>} The mode(s) of the numbers.
     */
    numberMode(...nums) {
        try {
            nums.forEach(this.validateNumber);
            const frequency = {};
            nums.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
            const maxFreq = Math.max(...Object.values(frequency));
            return Object.keys(frequency).filter(key => frequency[key] === maxFreq).map(Number);
        } catch (error) {
            console.error('Error finding mode of numbers:', error.message);
        }
    }
}

/**
 * Utility class that performs number HTML operations.
 * @class HtmlUtility
 */
class HtmlUtility {
    /**
     * Converts a plain string into an HTML element.
     * @param {string} str - The string to convert.
     * @returns {HTMLElement} - The resulting HTML element.
     */
    stringToHTML(html) {
        // Create a new div element to decode HTML entities
        var tempDiv = document.createElement('div');

        // Replace common HTML entities with their corresponding characters
        tempDiv.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
        
        // Return the decoded HTML string
        return tempDiv.innerHTML;
    }


    /**
     * Wraps a string in a specified HTML tag.
     * @param {string} str - The string to wrap.
     * @param {string} tagName - The HTML tag name.
     * @returns {string} - The resulting HTML string.
     */
    stringFormat(str, tagName, attributes = {}) {
        const attrs = Object.keys(attributes)
            .map(key => `${key}="${attributes[key]}"`)
            .join(' ');
        if (attrs) {
            return (`<${tagName} ${attrs}>${str}</${tagName}>`);
        }
        return (`<${tagName}>${str}</${tagName}>`);
    }

    /**
     * Escapes HTML characters in a string.
     * @param {string} str - The string to escape.
     * @returns {string} - The escaped string.
     */
    escapeHTML(str) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    /**
     * Wraps a string in <b> tags to make it bold.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    boldString(str, attributes = {}) {
        return this.stringFormat(str, 'b', attributes);
    }

    /**
     * Wraps a string in <i> tags to make it italic.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    italicString(str, attributes = {}) {
        return this.stringFormat(str, 'i', attributes);
    }

    /**
     * Wraps a string in <u> tags to underline it.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    underlineString(str, attributes = {}) {
        return this.stringFormat(str, 'u', attributes);
    }

    /**
     * Creates an anchor (<a>) element from a string and URL.
     * @param {string} str - The text for the anchor.
     * @param {string} url - The URL for the anchor.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createAnchor(str, url, attributes = {}) {
        const attrs = Object.keys(attributes)
            .map(key => `${key}="${attributes[key]}"`)
            .join(' ');
        return `<a href="${url}" ${attrs}>${str}</a>`;
    }

    /**
     * Wraps a string in <li> tags to create a list item.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createListItem(str, attributes = {}) {
        return this.stringFormat(str, 'li', attributes);
    }

    /**
     * Wraps a string in <p> tags to create a paragraph.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createParagraph(str, attributes = {}) {
        return this.stringFormat(str, 'p', attributes);
    }

    /**
     * Wraps a string in a heading tag (<h1> to <h6>).
     * @param {string} str - The string to wrap.
     * @param {number} level - The heading level (1 to 6).
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createHeading(str, level, attributes = {}) {
        if (level < 1 || level > 6) {
            throw new Error('Heading level must be between 1 and 6');
        }
        return this.stringFormat(str, `h${level}`, attributes);
    }

    /**
     * Wraps a string in <span> tags.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createSpan(str, attributes = {}) {
        return this.stringFormat(str, 'span', attributes);
    }

    /**
     * Wraps a string in <div> tags.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    stringToDiv(str, attributes = {}) {
        return this.stringFormat(str, 'div', attributes);
    }

    /**
     * Wraps a string in <button> tags.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    stringToButton(str, attributes = {}) {
        return this.stringFormat(str, 'button', attributes);
    }

    /**
     * Wraps a string in <td> tags for a table cell.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createTableCell(str, attributes = {}) {
        return this.stringFormat(str, 'td', attributes);
    }

    /**
     * Wraps a string in <tr> tags for a table row.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createTableRow(str, attributes = {}) {
        return this.stringFormat(str, 'tr', attributes);
    }

    /**
     * Converts an array of strings to an unordered list (<ul>).
     * @param {string[]} items - The array of strings.
     * @param {Object} attributes - The attributes to add to the (unorderd list) "ul" tag.
     * @param {Object} listItemAttributes - The attributes to add to all the nested "li" tags.
     * @returns {string} - The resulting HTML string.
     */
    createUnorderedList(items, attributes = {}, listItemAttributes = {}) {
        const attrs = Object.keys(attributes)
            .map(key => `${key}="${attributes[key]}"`)
            .join(' ');
        const listItems = items.map(item => this.createListItem(item, listItemAttributes)).join('');
        return `<ul ${attrs}>${listItems}</ul>`;
    }

    /**
     * Converts an array of strings to an ordered list (<ol>).
     * @param {string[]} items - The array of strings.
     * @param {Object} attributes - The attributes to add to the (orderd list) "ol" tag.
     * @param {Object} listItemAttributes - The attributes to add to all the nested "li" tags.
     * @returns {string} - The resulting HTML string.
     */
    createOrderedList(items, attributes = {}, listItemAttributes = {}) {
        const attrs = Object.keys(attributes)
            .map(key => `${key}="${attributes[key]}"`)
            .join(' ');
        const listItems = items.map(item => this.createListItem(item, listItemAttributes)).join('');
        return `<ol ${attrs}>${listItems}</ol>`;
    }

    /**
     * General utility to wrap a string with any specified HTML tag and attributes.
     * @param {string} str - The string to wrap.
     * @param {string} tagName - The HTML tag name.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    wrapWithTag(str, tagName, attributes = {}) {
        const attrs = Object.keys(attributes)
            .map(key => `${key}="${attributes[key]}"`)
            .join(' ');
        return `<${tagName} ${attrs}>${str}</${tagName}>`;
    }

    /**
     * Wraps a string in <mark> tags to highlight it.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    highlightString(str, attributes = {}) {
        return this.stringFormat(str, 'mark', attributes);
    }

    /**
     * Wraps a string in <blockquote> tags.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this element.
     * @returns {string} - The resulting HTML string.
     */
    createBlockquote(str, attributes = {}) {
        return this.stringFormat(str, 'blockquote', attributes);
    }

    /**
     * Wraps a string in <pre><code> tags to format it as a code block.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes_pre - The attributes to add to the "pre" tag.
     * @param {Object} attributes_code - The attributes to add to the "code" tag.
     * @returns {string} - The resulting HTML string.
     */
    createCodeBlock(str, attributes_pre = {}, attributes_code = {}) {
        const attrs = Object.keys(attributes_pre)
            .map(key => `${key}="${attributes_pre[key]}"`)
            .join(' ');
        const attrs_code = Object.keys(attributes_code)
            .map(key => `${key}="${attributes_code[key]}"`)
            .join(' ');
        if (attrs) {
            return (`<pre ${attrs}><code>${this.escapeHTML(str)}</code></pre>`);
        } else if (attrs_code) {
            return (`<pre><code ${attrs_code}>${this.escapeHTML(str)}</code></pre>`);
        } else if (attrs && attrs_code) {
            return (`<pre ${attrs}><code ${attrs_code}>${this.escapeHTML(str)}</code></pre>`);
        }
        return `<pre><code>${this.escapeHTML(str)}</code></pre>`;
    }

    /**
     * Wraps a string in <label> tags.
     * @param {string} str - The string to wrap.
     * @param {Object} attributes - The attributes to add to this label element.
     * @returns {string} - The resulting HTML string.
     */
    createLabel(str, attributes = {}) {
        return this.stringFormat(str, 'label', attributes);
    }
}

/**
 * Utility class for array operations.
 * @class ArrayUtility
 */
class ArrayUtility {

    /**
     * Chunks an array into smaller arrays of a specified size.
     * @param {Array} array - The array to chunk.
     * @param {number} size - The size of each chunk.
     * @returns {Array[]} - The array of chunks.
     */
    arrayChunk(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    /**
     * Flattens a nested array into a single-level array.
     * @param {Array} array - The nested array to flatten.
     * @returns {Array} - The flattened array.
     */
    arrayFlatten(array) {
        return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.arrayFlatten(val) : val), []);
    }

    /**
     * Removes duplicate values from an array.
     * @param {Array} array - The array to filter.
     * @returns {Array} - The array with unique values.
     */
    arrayUnique(array) {
        return [...new Set(array)];
    }

    /**
     * Returns the difference between two arrays.
     * @param {Array} array1 - The first array.
     * @param {Array} array2 - The second array.
     * @returns {Array} - The array of values present in the first array but not in the second.
     */
    arrayDifference(array1, array2) {
        return array1.filter(x => !array2.includes(x));
    }

    /**
     * Returns the intersection of two arrays.
     * @param {Array} array1 - The first array.
     * @param {Array} array2 - The second array.
     * @returns {Array} - The array of values present in both arrays.
     */
    arrayIntersection(array1, array2) {
        return array1.filter(x => array2.includes(x));
    }

    /**
     * Returns the union of two arrays.
     * @param {Array} array1 - The first array.
     * @param {Array} array2 - The second array.
     * @returns {Array} - The array of all unique values present in either array.
     */
    arrayUnion(array1, array2) {
        return this.arrayUnique([...array1, ...array2]);
    }

    /**
     * Removes a specified value from an array.
     * @param {Array} array - The array to modify.
     * @param {*} value - The value to remove.
     * @returns {Array} - The array with the value removed.
     */
    arrayRemove(array, value) {
        return array.filter(x => x !== value);
    }

    /**
     * Shuffles an array randomly.
     * @param {Array} array - The array to shuffle.
     * @returns {Array} - The shuffled array.
     */
    arrayShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Removes falsy values from an array.
     * @param {Array} array - The array to filter.
     * @returns {Array} - The array with falsy values removed.
     */
    arrayCompact(array) {
        return array.filter(Boolean);
    }

    /**
     * Sorts an array based on a comparison function.
     * @param {Array} array - The array to sort.
     * @param {Function} [compareFn] - The comparison function.
     * @returns {Array} - The sorted array.
     */
    arraySort(array, compareFn) {
        return array.sort(compareFn);
    }

    /**
     * Merges multiple arrays into one.
     * @param {...Array} arrays - The arrays to merge.
     * @returns {Array} - The merged array.
     */
    arrayMerge(...arrays) {
        return [].concat(...arrays);
    }

    /**
     * Creates a shallow copy of an array.
     * @param {Array} array - The array to clone.
     * @returns {Array} - The cloned array.
     */
    arrayClone(array) {
        return [...array];
    }

    /**
     * Filters an array based on a predicate function.
     * @param {Array} array - The array to filter.
     * @param {Function} predicate - The predicate function.
     * @returns {Array} - The filtered array.
     */
    arrayFilter(array, predicate) {
        return array.filter(predicate);
    }

    /**
     * Maps an array based on a transform function.
     * @param {Array} array - The array to map.
     * @param {Function} transform - The transform function.
     * @returns {Array} - The mapped array.
     */
    arrayMap(array, transform) {
        return array.map(transform);
    }

    /**
     * Reduces an array to a single value based on a reducer function.
     * @param {Array} array - The array to reduce.
     * @param {Function} reducer - The reducer function.
     * @param {*} initialValue - The initial value.
     * @returns {*} - The reduced value.
     */
    arrayReduce(array, reducer, initialValue) {
        return array.reduce(reducer, initialValue);
    }

    /**
     * Finds the first element in an array that matches a predicate function.
     * @param {Array} array - The array to search.
     * @param {Function} predicate - The predicate function.
     * @returns {*} - The found element or undefined if not found.
     */
    arrayFind(array, predicate) {
        return array.find(predicate);
    }

    /**
     * Checks if all elements in an array match a predicate function.
     * @param {Array} array - The array to check.
     * @param {Function} predicate - The predicate function.
     * @returns {boolean} - True if all elements match, false otherwise.
     */
    arrayEvery(array, predicate) {
        return array.every(predicate);
    }

    /**
     * Checks if some elements in an array match a predicate function.
     * @param {Array} array - The array to check.
     * @param {Function} predicate - The predicate function.
     * @returns {boolean} - True if some elements match, false otherwise.
     */
    arraySome(array, predicate) {
        return array.some(predicate);
    }

    /**
     * Checks if an array includes a specified value.
     * @param {Array} array - The array to check.
     * @param {*} value - The value to check for.
     * @returns {boolean} - True if the value is included, false otherwise.
     */
    arrayIncludes(array, value) {
        return array.includes(value);
    }

    /**
     * Returns a shallow copy of a portion of an array.
     * @param {Array} array - The array to slice.
     * @param {number} [start] - The start index.
     * @param {number} [end] - The end index.
     * @returns {Array} - The sliced array.
     */
    arraySlice(array, start, end) {
        return array.slice(start, end);
    }
}

/**
 * Utility class for object operations.
 * @class ObjectUtility
 */
class ObjectUtility {

    /**
     * Creates a shallow clone of an object.
     * @param {Object} obj - The object to clone.
     * @returns {Object} - The cloned object.
     */
    objectClone(obj) {
        return { ...obj };
    }

    /**
     * Merges multiple objects into one.
     * @param {...Object} objects - The objects to merge.
     * @returns {Object} - The merged object.
     */
    objectMerge(...objects) {
        return Object.assign({}, ...objects);
    }

    /**
     * Deep merges multiple objects into one.
     * @param {...Object} objects - The objects to deep merge.
     * @returns {Object} - The deeply merged object.
     */
    objectDeepMerge(...objects) {
        const isObject = obj => obj && typeof obj === 'object';
        return objects.reduce((prev, obj) => {
            Object.keys(obj).forEach(key => {
                const prevValue = prev[key];
                const currValue = obj[key];

                if (Array.isArray(prevValue) && Array.isArray(currValue)) {
                    prev[key] = prevValue.concat(...currValue);
                } else if (isObject(prevValue) && isObject(currValue)) {
                    prev[key] = this.objectDeepMerge(prevValue, currValue);
                } else {
                    prev[key] = currValue;
                }
            });
            return prev;
        }, {});
    }

    /**
     * Returns the keys of an object.
     * @param {Object} obj - The object.
     * @returns {string[]} - The array of keys.
     */
    objectKeys(obj) {
        return Object.keys(obj);
    }

    /**
     * Returns the values of an object.
     * @param {Object} obj - The object.
     * @returns {Array} - The array of values.
     */
    objectValues(obj) {
        return Object.values(obj);
    }

    /**
     * Returns the entries of an object as an array of [key, value] pairs.
     * @param {Object} obj - The object.
     * @returns {Array[]} - The array of [key, value] pairs.
     */
    objectEntries(obj) {
        return Object.entries(obj);
    }

    /**
     * Creates an object from an array of [key, value] pairs.
     * @param {Array[]} entries - The array of [key, value] pairs.
     * @returns {Object} - The created object.
     */
    objectFromEntries(entries) {
        return Object.fromEntries(entries);
    }

    /**
     * Checks if an object has a specified key.
     * @param {Object} obj - The object.
     * @param {string} key - The key to check for.
     * @returns {boolean} - True if the key exists, false otherwise.
     */
    objectHasKey(obj, key) {
        return obj.hasOwnProperty(key);
    }

    /**
     * Omits specified keys from an object.
     * @param {Object} obj - The object.
     * @param {string[]} keys - The keys to omit.
     * @returns {Object} - The object without the omitted keys.
     */
    objectOmit(obj, keys) {
        const result = { ...obj };
        keys.forEach(key => delete result[key]);
        return result;
    }

    /**
     * Picks specified keys from an object.
     * @param {Object} obj - The object.
     * @param {string[]} keys - The keys to pick.
     * @returns {Object} - The object with only the picked keys.
     */
    objectPick(obj, keys) {
        const result = {};
        keys.forEach(key => {
            if (key in obj) {
                result[key] = obj[key];
            }
        });
        return result;
    }

    /**
     * Deep freezes an object, making it immutable.
     * @param {Object} obj - The object to deep freeze.
     * @returns {Object} - The deep frozen object.
     */
    objectDeepFreeze(obj) {
        Object.freeze(obj);
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
                this.objectDeepFreeze(obj[key]);
            }
        });
        return obj;
    }

    /**
     * Creates a deep clone of an object.
     * @param {Object} obj - The object to clone.
     * @returns {Object} - The deep cloned object.
     */
    objectDeepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Checks if two objects are deeply equal.
     * @param {Object} obj1 - The first object.
     * @param {Object} obj2 - The second object.
     * @returns {boolean} - True if the objects are deeply equal, false otherwise.
     */
    objectDeepEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    /**
     * Gets the value at a specified path in an object.
     * @param {Object} obj - The object.
     * @param {string} path - The path to the value (e.g., 'a.b.c').
     * @returns {*} - The value at the specified path.
     */
    objectGet(obj, path) {
        return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
    }

    /**
     * Sets a value at a specified path in an object.
     * @param {Object} obj - The object.
     * @param {string} path - The path to the value (e.g., 'a.b.c').
     * @param {*} value - The value to set.
     * @returns {Object} - The updated object.
     */
    objectSet(obj, path, value) {
        const keys = path.split('.');
        let curr = obj;

        keys.slice(0, -1).forEach((key, index) => {
            if (!curr[key]) {
                curr[key] = {};
            }
            curr = curr[key];
        });

        curr[keys[keys.length - 1]] = value;
        return obj;
    }

    /**
     * Maps the values of an object based on a transform function.
     * @param {Object} obj - The object to map.
     * @param {Function} transform - The transform function.
     * @returns {Object} - The mapped object.
     */
    objectMap(obj, transform) {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, transform(value, key)]));
    }

    /**
     * Filters the values of an object based on a predicate function.
     * @param {Object} obj - The object to filter.
     * @param {Function} predicate - The predicate function.
     * @returns {Object} - The filtered object.
     */
    objectFilter(obj, predicate) {
        return Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value, key)));
    }

    /**
     * Reduces an object to a single value based on a reducer function.
     * @param {Object} obj - The object to reduce.
     * @param {Function} reducer - The reducer function.
     * @param {*} initialValue - The initial value.
     * @returns {*} - The reduced value.
     */
    objectReduce(obj, reducer, initialValue) {
        return Object.entries(obj).reduce((acc, [key, value]) => reducer(acc, value, key), initialValue);
    }

    /**
     * Finds the key of the first value in an object that matches a predicate function.
     * @param {Object} obj - The object to search.
     * @param {Function} predicate - The predicate function.
     * @returns {string|undefined} - The found key or undefined if not found.
     */
    objectFindKey(obj, predicate) {
        return Object.keys(obj).find(key => predicate(obj[key], key));
    }

    /**
     * Finds the value of the first key in an object that matches a predicate function.
     * @param {Object} obj - The object to search.
     * @param {Function} predicate - The predicate function.
     * @returns {*} - The found value or undefined if not found.
     */
    objectFindValue(obj, predicate) {
        return Object.values(obj).find(value => predicate(value));
    }
}

class BoolUtility {
    /**
     * Checks if a value is null.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is null, else false.
     */
    isNull(value) {
        return value === null;
    }

    /**
     * Checks if a value is undefined.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is undefined, else false.
     */
    isUndefined(value) {
        return value === undefined;
    }

    /**
     * Checks if a value is an object.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is an object, else false.
     */
    isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Checks if a value is an array.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is an array, else false.
     */
    isArray(value) {
        return Array.isArray(value);
    }

    /**
     * Checks if a value is a function.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a function, else false.
     */
    isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Checks if a value is a string.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a string, else false.
     */
    isString(value) {
        return typeof value === 'string';
    }

    /**
     * Checks if a value is a number.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a number, else false.
     */
    isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    /**
     * Checks if a value is a boolean.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a boolean, else false.
     */
    isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Checks if a value is a date.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a date, else false.
     */
    isDate(value) {
        return value instanceof Date && !isNaN(value);
    }

    /**
     * Checks if a value is a regular expression.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a RegExp, else false.
     */
    isRegExp(value) {
        return value instanceof RegExp;
    }

    /**
     * Checks if a value is a promise.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a promise, else false.
     */
    isPromise(value) {
        return value instanceof Promise;
    }

    /**
     * Checks if a value is a symbol.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a symbol, else false.
     */
    isSymbol(value) {
        return typeof value === 'symbol';
    }

    /**
     * Checks if a value is a primitive.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is a primitive, else false.
     */
    isPrimitive(value) {
        return (value !== Object(value));
    }

    /**
     * Checks if a value is iterable.
     * @param {*} value - The value to check.
     * @returns {boolean} - Returns true if value is iterable, else false.
     */
    isIterable(value) {
        return value != null && typeof value[Symbol.iterator] === 'function';
    }

    /**
     * Invokes the given function n times.
     * @param {number} n - The number of times to invoke the function.
     * @param {function} iteratee - The function to invoke.
     * @returns {Array} - Returns the array of results.
     */
    times(n, iteratee) {
        return Array.from({ length: n }, (_, i) => iteratee(i));
    }


    /**
     * Invokes func after wait milliseconds. Any additional arguments are provided to func when it is invoked.
     * @param {function} func - The function to delay.
     * @param {number} wait - The number of milliseconds to delay invocation.
     * @param  {...any} args - The arguments to invoke func with.
     * @returns {number} - Returns the timer id.
     */
    delay(func, wait, ...args) {
        return setTimeout(func, wait, ...args);
    }

}
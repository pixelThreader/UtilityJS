/**
 * 
 * 
 * ░▒▓█▓▒  ▒▓█▓▒░░▒▓████████▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓████████▓▒░░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░ ░▒▓███████▓▒░
 * ░▒▓█▓▒  ▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░       
 * ░▒▓█▓▒  ▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░       
 * ░▒▓█▓▒  ▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░     ░▒▓██████▓▒░    ░▒▓█▓▒░ ░▒▓██████▓▒░ 
 * ░▒▓█▓▒  ▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░
 * ░▒▓█▓▒  ▒▓█▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░
 *  ░▒▓██████▓▒░    ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓████████▓▒░░▒▓█▓▒░   ░▒▓█▓▒░       ░▒▓█▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░ 
 * 
 * 
 * UtilityJs | gui / codeColor
 * Author: pixelThreader (Piyush Rana) 
 * @license MIT License 'https://raw.githubusercontent.com/piyush20B/UtilityJS/main/LICENSE'
 * 
 * A JavaScript utility library aiming to make life easier, save code,
 * and enhance productivity with a wide range of utilities.
 * 
 */


/**
 * laguages: HTML, CSS, JS, JSON, C, Java, Python, Go, Kotlin
 *
*/


let possible_languages = [
    "javascript",
    "c",
    "java",
    "python"
]

const configurations = {
    "javascript": {
        punctuations: ['.', ',', ';', ':', '(', ')',
            '{', '}', '[', ']', '<', '>', '=', '!', '?', '\\', '&', '|', '~', '^',
            '`', "'", '"', '@', '#', '$', '%', ' '],
        reserved_keys: [
            'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do',
            'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof',
            'interface', 'let', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'static', 'super', 'switch',
            'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'
        ],
        builtIns: [
            'Array', 'ArrayBuffer', 'BigInt', 'Boolean', 'DataView', 'Date', 'Error', 'EvalError', 'Float32Array', 'Float64Array',
            'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'JSON', 'Map', 'Number', 'Object', 'Promise', 'Proxy', 'RangeError',
            'ReferenceError', 'Reflect', 'RegExp', 'Set', 'String', 'Symbol', 'SyntaxError', 'TypeError', 'Uint8Array', 'Uint8ClampedArray',
            'Uint16Array', 'Uint32Array', 'WeakMap', 'WeakSet'
        ],
        commentsConfig: {
            singleLine: ['//'],
            multiLineStart: ['/*'],
            multiLineEnd: ['*/']
        },
        classnames: {
            string: 'str',
            link: 'lnk',
            comment: 'cmnt',
            keywords: 'kwd',
            number: 'num',
            punctuation: 'punc',
            function: 'fntn',
            operator: 'op',
            variable: 'var',
            property: 'prop',
            symbol: 'sym',
            builtin: 'btin'
        },
        stringTokens: ['\'', '"', '`']
    },
    "python": {
        punctuations: ['.', ',', ';', ':', '(', ')',
            '{', '}', '[', ']', '<', '>', '=', '!', '?', '\\', '&', '|', '~', '^',
            '`', "'", '"', '@', '#', '$', '%', ' '],
        reserved_keys: [
            'False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def',
            'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import',
            'in', 'is', 'lambda', 'match', 'math', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return',
            'try', 'while', 'with', 'yield'
        ],
        builtIns: [
            'int', 'float', 'complex', 'bool', 'str', 'list', 'tuple', 'dict', 'set', 'frozenset',
            'bytes', 'bytearray', 'memoryview', 'range', 'object', 'type', 'Exception', 'BaseException',
            'ArithmeticError', 'AttributeError', 'BufferError', 'EOFError', 'ImportError', 'IndexError',
            'KeyError', 'KeyboardInterrupt', 'MemoryError', 'NameError', 'NotImplementedError', 'OSError',
            'OverflowError', 'ReferenceError', 'RuntimeError', 'StopIteration', 'SyntaxError', 'TypeError',
            'ValueError', 'Warning', 'UserWarning', 'DeprecationWarning', 'SyntaxWarning', 'RuntimeWarning',
            'FutureWarning', 'ImportWarning', 'UnicodeWarning', 'BytesWarning', 'ResourceWarning'
        ],
        commentsConfig: {
            singleLine: ['#'],
            multiLineStart: ['"""', "'''"],
            multiLineEnd: ['"""', "'''"]
        },
        classnames: {
            string: 'str',
            link: 'lnk',
            comment: 'cmnt',
            keywords: 'kwd',
            number: 'num',
            punctuation: 'punc',
            function: 'fntn',
            operator: 'op',
            variable: 'var',
            property: 'prop',
            symbol: 'sym',
            builtin: 'btin'
        },
        stringTokens: ['\'', '"']
    },
    "c": {
        punctuations: ['.', ',', ';', ':', '(', ')',
            '{', '}', '[', ']', '<', '>', '=', '!', '?', '\\', '&', '|', '~', '^',
            '`', "'", '"', '@', '#', '$', '%', ' '],
        reserved_keys: [
            "auto", "break", "case", "char", "const", "continue", "default", "do", "double", "else",
            "enum", "extern", "float", "for", "goto", "if", "inline", "int", "long", "register",
            "return", "short", "signed", "sizeof", "static", "struct", "switch", "typedef", "union",
            "unsigned", "void", "volatile", "while"
        ],
        builtIns: [
            "char", "int", "float", "double", "void", "short", "long", "unsigned", "signed", "size_t",
            "ptrdiff_t", "wchar_t", "bool", "struct", "union", "enum", "FILE"
        ],
        commentsConfig: {
            singleLine: ['//'],
            multiLineStart: ['/*'],
            multiLineEnd: ['*/']
        },
        classnames: {
            string: 'str',
            link: 'lnk',
            comment: 'cmnt',
            keywords: 'kwd',
            number: 'num',
            punctuation: 'punc',
            function: 'fntn',
            operator: 'op',
            variable: 'var',
            property: 'prop',
            symbol: 'sym',
            builtin: 'btin'
        },
        stringTokens: ['\'', '"']
    },
    "java": {
        punctuations: ['.', ',', ';', ':', '(', ')',
            '{', '}', '[', ']', '<', '>', '=', '!', '?', '\\', '&', '|', '~', '^',
            '`', "'", '"', '@', '#', '$', '%', ' '],
        reserved_keys: [
            "abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const",
            "continue", "default", "do", "double", "else", "enum", "extends", "final", "finally", "float",
            "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native",
            "new", "null", "package", "private", "protected", "public", "return", "short", "static", "strictfp",
            "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile",
            "while"
        ],
        builtIns: [
            "Object", "String", "Integer", "Double", "Boolean", "Character", "Byte", "Short", "Long", "Float",
            "Math", "System", "Thread", "File", "IOException", "Exception", "RuntimeException", "ArrayList", "HashMap",
            "LinkedList", "HashSet", "TreeSet", "Collections", "Stream", "LocalDate", "LocalTime", "LocalDateTime",
            "Date", "Calendar", "Random", "Pattern", "Matcher"
        ],
        commentsConfig: {
            singleLine: ['//'],
            multiLineStart: ['/*'],
            multiLineEnd: ['*/']
        },
        classnames: {
            string: 'str',
            link: 'lnk',
            comment: 'cmnt',
            keywords: 'kwd',
            number: 'num',
            punctuation: 'punc',
            function: 'fntn',
            operator: 'op',
            variable: 'var',
            property: 'prop',
            symbol: 'sym',
            builtin: 'btin'
        },
        stringTokens: ['\'', '"']
    },
};

/**
 * Class for identifying comment.
 */
class CommentResolver {
    /**
     * @param {Object} commentsConfig - Configuration for comments.
     * @param {string} commentsConfig.singleLine - Single line comment indicator.
     * @param {Array<string>} commentsConfig.multiLine - Start of multi-line comment indicators.
     * @param {Array<string>} commentsConfig.multiLineEnd - End of multi-line comment indicators.
     */
    constructor(commentsConfig) {
        this.commentsConfig = commentsConfig;
    }

    /**
     * Classifies a word based on multi-line comment delimiters.
     * 
     * @param {string} word - The word to be classified.
     * @param {Object} commentsConfig - Configuration for comment types.
     * @param {Array<string>} commentsConfig.multiLine - Multi-line comment start delimiters.
     * @returns {Array<string>} - An array with classified parts of the word.
     */
    wordClassify(word, commentsConfig) {
        const multiLineStarts = commentsConfig.multiLine;
        let result = [];
        let currentIndex = 0;

        while (currentIndex < word.length) {
            let matchFound = false;

            for (let delimiter of multiLineStarts) {
                if (word.startsWith(delimiter, currentIndex)) {
                    if (currentIndex > 0) {
                        result.push(word.slice(0, currentIndex));
                    }
                    result.push(delimiter);
                    word = word.slice(currentIndex + delimiter.length);
                    currentIndex = 0;
                    matchFound = true;
                    break;
                }
            }

            if (!matchFound) {
                currentIndex++;
            }
        }

        if (word.length > 0) {
            result.push(word);
        }

        return result;
    }

    /**
     * Removes and wraps single-line comments with a <span> tag.
     * @param {string[]} lines - Array of lines of code.
     * @param {Object} commentsConfig - Configuration for single-line comments.
     * @returns {string[]} - Array of lines with single-line comments wrapped in <span> tags.
     */
    removeSingleLine(lines, commentsConfig) {
        return lines.map(line => {
            if (line.includes(commentsConfig.singleLine)) {
                let commentIndex = line.indexOf(commentsConfig.singleLine);
                return line.substring(0, commentIndex) + '<span class="cmnt">' + line.substring(commentIndex) + '</span>';
            }
            return line;
        });
    }

    /**
     * Formats multi-line comments in the provided code string.
     * @param {string} lines - Array of lines of code.
     * @param {Object} commentsConfig - Configuration for comments.
     * @returns {string[]} - Code with multi-line comments wrapped in <span> tags.
     */
    removeMultiline(lines, commentsConfig) {
        let result = [];
        let insideComment = false;
        let commentBuffer = '';

        for (let line of lines) {
            if (insideComment) {
                commentBuffer += line + '\n'; // Accumulate lines inside multi-line comment

                if (line.includes(commentsConfig.multiLineEnd)) {
                    insideComment = false;
                    commentBuffer = commentBuffer.replace(commentsConfig.multiLineEnd, commentsConfig.multiLineEnd + '</span>');
                    result.push(commentBuffer.trimEnd());
                    commentBuffer = '';
                }
            } else {
                if (line.includes(commentsConfig.multiLine)) {
                    let commentStartIndex = line.indexOf(commentsConfig.multiLine);
                    let beforeComment = line.substring(0, commentStartIndex);
                    let commentText = line.substring(commentStartIndex);

                    if (commentText.includes(commentsConfig.multiLineEnd)) {
                        commentText = commentText.replace(commentsConfig.multiLineEnd, commentsConfig.multiLineEnd + '</span>');
                        result.push(beforeComment + '<span class="cmnt">' + commentText);
                    } else {
                        result.push(beforeComment + '<span class="cmnt">' + commentText);
                        insideComment = true;
                    }
                } else {
                    result.push(line);
                }
            }
        }

        // If still inside a multi-line comment at the end
        if (insideComment) {
            result.push('</span>');
        }

        return result.map(line => line.trimEnd());
    }

    /**
     * Formats multi-line comments in the provided code string.
     * @param {string} lines - Array of lines of code.
     * @param {Object} commentsConfig - Configuration for multi-line comments.
     * @param {Array<string>} commentsConfig.multiLine - Start of multi-line comment indicators.
     * @param {Array<string>} commentsConfig.multiLineEnd - End of multi-line comment indicators.
     * @returns {string[]} - Array of lines with multi-line comments wrapped in <span> tags.
     */
    removeMultilineSame(lines, commentsConfig) {
        let isCommentBlockStarted = false;
        let result = [];
        let multiLineStarts = commentsConfig.multiLine;
        lines.forEach((line) => {
            let updatedLine = [];
            let lineConstructor = [];
            let words = line.split(' ')
            words.forEach(word => {
                let b = this.wordClassify(word, commentsConfig);

                // Check if any element in b exists in a
                let exists = b.some(element => multiLineStarts.includes(element));
                if (exists && !isCommentBlockStarted) {
                    isCommentBlockStarted = true;
                    word = `<span class="cmnt">${word}`;
                    lineConstructor.push(word);
                } else if (exists && isCommentBlockStarted) {
                    isCommentBlockStarted = false;
                    word = `${word}</span>`;
                    lineConstructor.push(word);
                } else {
                    lineConstructor.push(word);
                }
            })
            updatedLine = lineConstructor.join(' ');
            result.push(updatedLine.trimEnd());
            lineConstructor = [];
        });

        return result;
    }

    /**
     * Integrates both single-line and multi-line comment removal into a single function.
     * @param {string} code - Code as a single string.
     * @returns {string} - Code with comments wrapped in <span> tags.
     */
    integrateComments(code) {
        let lines = code.split('\n');
        let isSame = this.commentsConfig.isSameToken || false;
        let singleLineRemoved = this.removeSingleLine(lines, this.commentsConfig);
        if (isSame) {
            return this.removeMultilineSame(singleLineRemoved, this.commentsConfig).join('\n');
        }
        let multiLineRemoved = this.removeMultiline(singleLineRemoved, this.commentsConfig);

        return multiLineRemoved.join('\n');
    }
}

/**
 * Class for identifying and wrapping strings in span tags.
 */
class StringResolver {

    /**
     * @param {Array<string>} stringTokens - Array of tokens for strings.
     */
    constructor(stringTokens) {
        this.stringTokens = stringTokens;
    }

    /**
     * Identifies strings in the code and wraps them in span tags with class "str".
     * 
     * @param {string} code - The code to identify strings in.
     * @returns {string} - The code with strings wrapped in span tags.
     */
    codeStringIdentifier(code) {
        let result = '';
        let currentString = '';
        let insideString = false;
        let currentDelimiter = '';

        for (let i = 0; i < code.length; i++) {
            let char = code[i];

            if (insideString) {
                currentString += char;

                if (char === currentDelimiter && (i === 0 || code[i - 1] !== '\\')) {
                    result += `<span class="str">${currentString}</span>`;
                    currentString = '';
                    insideString = false;
                }
            } else {
                if (this.stringTokens.includes(char)) {
                    insideString = true;
                    currentDelimiter = char;
                    currentString = char;
                } else {
                    result += char;
                }
            }
        }

        return result;
    }
}


/**
 * Class for identifying Keywords.
 */
class KeyWordResolver {

    /**
     * @param {string[]} reservedKeywords - Array of reserved keywords.
     */
    constructor(reservedKeywords) {
        this.reservedKeywords = reservedKeywords;
        this.keywordRegex = new RegExp(`\\b(${reservedKeywords.join('|')})\\b`, 'g');
    }

    /**
     * Identifies keywords in the code and wraps them in span tags with class "kwd".
     * 
     * @param {string} code - The code to identify keywords in.
     * @returns {string} - The code with keywords wrapped in span tags.
     */
    codeKeywordIdentifier(code) {
        let lines = code.split('\n');
        let result = [];

        lines.forEach((line) => {
            let lineResult = line.replace(this.keywordRegex, '<span class="kwd">$1</span>');
            result.push(lineResult);
        });

        return result.join('\n');
    }
}

/**
 * Class for identifying function names.
 */
class FunctionResolver {

    /**
     * Identifies function names in the code and wraps them in span tags with appropriate classes.
     */
    codeFunctionIdentifier(code) {
        let result = '';
        let isFunctionName = false;
        let isValidFunctionName = false;

        const validFunctionNamePattern = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
        const functionPattern = /(\w+)\s*(?=\()/g;

        // Replace function names with span tags
        result = code.replace(functionPattern, (match, p1) => {
            if (validFunctionNamePattern.test(p1)) {
                isValidFunctionName = true;
                return `<span class="fntn">${p1}</span>`;
            } else {
                isValidFunctionName = false;
                return `<span class="fntner">${p1}</span>`;
            }
        });

        return result;
    }
}

/**
 * Class for identifying punctuation marks.
 */
class PunctuationResolver {

    /**
     * Identifies punctuation marks in the code and wraps them in span tags with the class "punc".
     * 
     * @param {string} code - The code to identify punctuation marks in.
     * @returns {string} - The code with punctuation marks wrapped in span tags.
     */
    codePunctuationIdentifier(code) {
        const punctuationPattern = /([!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
        return code.replace(punctuationPattern, '<span class="punc">$1</span>');
    }
}

/**
 * Class for identifying numeric data.
 */
class NumberResolver {

    /**
     * Identifies numeric data in the code and wraps them in span tags with the class "num".
     * 
     * @param {string} code - The code to identify numeric data in.
     * @returns {string} - The code with numeric data wrapped in span tags.
     */
    codeNumberIdentifier(code) {
        // Regex to match isolated numbers (integers and floats)
        const numberPattern = /\b\d+(\.\d+)?\b/g;
        return code.replace(numberPattern, '<span class="num">$&</span>');
    }
}




class CodeColorFormatter {
    constructor() {
        this.defaultClassNames = {
            string: 'str',
            link: 'lnk',
            comment: 'cmnt',
            keywords: 'keywd',
            number: 'num',
            punctuation: 'punc',
            function: 'fntn',
            operator: 'op',
            variable: 'var',
            property: 'prop',
            symbol: 'sym',
            builtin: 'btin'
        };

        this.defaultColors = {
            string: 'orange',
            link: 'blue',
            comment: 'gray',
            keywords: 'teal',
            number: 'yellow',
            punctuation: 'silver',
            operator: 'green',
            variable: 'lightblue',
            symbol: 'cyan',
            other: 'white'
        };
    }

    Color(selector, config) {
        const punctuations = config.punctuations || [];
        const reservedKeys = config.reserved_keys || [];
        const builtIns = config.builtIns || [];
        const commentsConfig = config.commentsConfig || {};
        const classNames = { ...this.defaultClassNames, ...config.classnames };
        const stringTokens = config.stringTokens || [`'`, `"`, '`'];

        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const formattedCode = this.formatCode(element.textContent, punctuations, reservedKeys, builtIns, commentsConfig, classNames, stringTokens);
            element.innerHTML = formattedCode;
        });
    }

    formatCode(code, punctuations, reservedKeys, builtIns, commentsConfig, classNames, stringTokens) {
        let codeLines = code.split('\n');
        let formattedCode = [];
        let isInString = false;
        let isInComment = false;
        let skipThistoken = false;
        let isMultiline = false;
        let temp_str = [];

        codeLines.forEach(line => {
            // Preserve leading whitespace
            let leadingSpaces = line.match(/^\s*/)[0];
            let trimmedLine = line.trim();

            let words = this.splitByAlphanumericAndPunctuation(trimmedLine);
            console.log(words)
            let wordList = [];

            words.forEach((word, index) => {

                if (skipThistoken) {
                    temp_str.push(word);
                    skipThistoken = false;
                    return;
                }

                // Handle starting a string
                if (stringTokens.includes(word) && !isInComment && !isInString) {
                    // Start a new string
                    let strvar = `<span class="${classNames.string}">${word}`;
                    temp_str.push(strvar);
                    isInString = true;
                    skipThistoken = true;
                    return;
                }

                // Handle single line starting a comment
                if ((commentsConfig.singleLine.includes(word + words[index + 1]) || commentsConfig.singleLine.includes(word)) && !isInString) {
                    isInComment = true;
                    temp_str.push(`<span class="${classNames.comment}">${word}`);
                    return; //Skip further processing for this word
                }
                // Handle close single line starting a comment
                if (isInComment && this.isLastElement(words, index) && !isMultiline && !isInString) {
                    temp_str.push(`${word}</span>`);
                    wordList.push(temp_str.join(''));
                    temp_str = []; // Clear temp_str for the next segment
                    isInComment = false;
                    return; //Skip further processing for this word
                }









                // Handle multi line starting a comment
                if ((commentsConfig.multiLineStart.includes(word + words[index + 1]) || commentsConfig.singleLine.includes(word)) && !isInString) {
                    temp_str.push(`<span class="${classNames.comment}">${word}`);
                    isMultiline = true;
                    isInComment = true;
                    skipThistoken = true;
                    return; //Skip further processing for this word
                }

                // Handle close multi line comment
                if (isInComment && this.isLastElement(words, index) && isMultiline && this.checkPunc(this.findPhrase(index, words), commentsConfig.multiLineEnd) && !isInString) {
                    temp_str.push(`${word}</span>`);
                    wordList.push(temp_str.join(' '));
                    temp_str = []; // Clear temp_str for the next segment
                    isMultiline = false;
                    skipThistoken = false;
                    isInComment = false;
                    return; //Skip further processing for this word
                }










                // Handle ending a string
                if (isInString && stringTokens.includes(word) && !isInComment) {
                    temp_str.push(`${word}</span>`);
                    wordList.push(temp_str.join(''));
                    temp_str = []; // Clear temp_str for the next segment
                    isInString = false;
                    return; // Skip further processing for this word
                }

                // Handle content inside strings and comments
                if (isInString || isInComment) {
                    temp_str.push(word);
                } else {
                    // Handle keywords and punctuation outside strings and comments
                    if (reservedKeys.includes(word) && !isInString) {
                        wordList.push(`<span class="${classNames.keywords}">${word}</span>`);
                    } else if (punctuations.includes(word) && !isInString) {
                        wordList.push(`<span class="${classNames.punctuation}">${word}</span>`);
                    } else if (builtIns.includes(word) && !isInString) {
                        wordList.push(`<span class="${classNames.builtin}">${word}</span>`);
                    } else {
                        if (words[index + 1] === '(') {
                            wordList.push(`<span class="${classNames.function}">${word}</span>`);
                        } else {
                            wordList.push(word);
                        }
                    }
                }
            });

            // Reconstruct line with preserved leading spaces
            let formattedLine = leadingSpaces + wordList.join('');
            formattedCode.push(formattedLine);
        });
        return formattedCode.join('\n');
    }

    splitByAlphanumericAndPunctuation(str) {
        const regex = /(\w+|\s+|[^\w\s])/g;
        return str.match(regex) || [];
    }

    findMatches(a, b) {
        // Create an object to store the matches
        let matches = {};
        let found = false;

        // Iterate over array b
        b.forEach((itemB, indexB) => {
            // Check if itemB exists in array a
            a.forEach((itemA, indexA) => {
                if (itemB === itemA) {
                    // If match found, set the flag to true
                    found = true;
                    // Store the match and its indices
                    matches[itemB] = { indexA, indexB };
                }
            });
        });

        // Return the result as an object containing the boolean and the matches
        return { found, matches };
    }

    isLastElement(array, index) {
        return index === array.length - 1;
    }

    findPhrase(index, charArray) {
        // If the given index points to a space, return it directly
        if (charArray[index] === ' ') {
            return ' ';
        }

        // Define a helper function to check if a character is a word boundary
        function isBoundary(char) {
            return char === ' ' || char === '.' || char === ',' || char === '?' || char === '!' || char === ':' || char === ';';
        }

        // Determine the start of the phrase
        let startIndex = index;
        while (startIndex > 0 && !isBoundary(charArray[startIndex - 1])) {
            startIndex--;
        }

        // Determine the end of the phrase
        let endIndex = index;
        while (endIndex < charArray.length && !isBoundary(charArray[endIndex])) {
            endIndex++;
        }

        // Extract the phrase from the character array
        let result = charArray.slice(startIndex, endIndex).join('');

        // If the endIndex character is a boundary character (and not a space), include it
        if (endIndex < charArray.length && isBoundary(charArray[endIndex]) && charArray[endIndex] !== ' ') {
            result += charArray[endIndex];
        }

        return result;
    }

    checkPunc(string, arr) {
        // Check if the string starts or ends with any of the punctuations in the array
        for (let punc of arr) {
            if (string.startsWith(punc) || string.endsWith(punc)) {
                return true;
            }
        }
        return false;
    }
}


class HighlightCode {
    constructor() {
        this.language = "javascript";
        this.element = 'pre code';
    }

    init(selector = 'pre code', language = 'javascript') {

        if (possible_languages.includes(language)) {

            let codeformatter = new CodeColorFormatter();

            let config = configurations[language];

            codeformatter.Color(selector, config);
        } else {
            console.error(`Snap! Code Highlighter for language '${language}' is not supportrd now.`)
        }
    }
}
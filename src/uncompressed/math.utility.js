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
 * UtilityJs | MathUtility
 * Author: pixelThreader (Piyush Rana) 
 * @license MIT License 'https://raw.githubusercontent.com/piyush20B/UtilityJS/main/LICENSE'
 * 
 * A JavaScript utility library aiming to make life easier, save code,
 * and enhance productivity with a wide range of utilities.
 * 
 */

class MathUtility {
    // Basic Arithmetic

    /**
      * Adds two numbers or sums an array of numbers.
      * @param {...number|number[]} args - The numbers to add.
      * @returns {number} - The sum of the numbers.
      * @throws {Error} - If invalid arguments are passed.
      */
    add(...args) {
        if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            return args[0] + args[1];
        } else if (args.length === 1 && Array.isArray(args[0])) {
            return args[0].reduce((acc, val) => acc + val, 0);
        } else {
            throw new Error('Invalid arguments passed to add');
        }
    }

    /**
      * Subtracts the second number from the first number.
      * @param {...number} args - The numbers to subtract.
      * @returns {number} - The difference of the numbers.
      * @throws {Error} - If invalid arguments are passed.
      */
    subtract(...args) {
        if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            return args[0] - args[1];
        } else {
            throw new Error('Invalid arguments passed to subtract');
        }
    }

    /**
      * Multiplies two numbers or multiplies all elements in an array.
      * @param {...number|number[]} args - The numbers to multiply.
      * @returns {number} - The product of the numbers.
      * @throws {Error} - If invalid arguments are passed.
      */
    multiply(...args) {
        if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            return args[0] * args[1];
        } else if (args.length === 1 && Array.isArray(args[0])) {
            return args[0].reduce((acc, val) => acc * val, 1);
        } else {
            throw new Error('Invalid arguments passed to multiply');
        }
    }

    /**
      * Divides the first number by the second number.
      * @param {...number} args - The numbers to divide.
      * @returns {number} - The quotient of the numbers.
      * @throws {Error} - If invalid arguments are passed or division by zero.
      */
    divide(...args) {
        if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            if (args[1] === 0) {
                throw new Error('Division by zero');
            }
            return args[0] / args[1];
        } else {
            throw new Error('Invalid arguments passed to divide');
        }
    }

    /**
      * Returns the remainder of division of two numbers.
      * @param {number} a - The dividend.
      * @param {number} b - The divisor.
      * @returns {number} - The remainder.
      */
    modulus(a, b) {
        return a % b;
    }

    /**
      * Raises a base number to an exponent.
      * @param {number} base - The base number.
      * @param {number} exponent - The exponent.
      * @returns {number} - The result of base raised to exponent.
      */
    exponentiation(base, exponent) {
        return base ** exponent;
    }

    // Advanced Arithmetic

    /**
      * Returns the square root of a number.
      * @param {number} number - The number.
      * @returns {number} - The square root.
      */
    squareRoot(number) {
        return Math.sqrt(number);
    }
    /**
      * Returns the cube root of a number.
      * @param {number} number - The number.
      * @returns {number} - The cube root.
      */
    cubeRoot(number) {
        return Math.cbrt(number);
    }

    /**
      * Returns the nth root of a number.
      * @param {number} number - The number.
      * @param {number} exp - The root to take (e.g., 2 for square root, 3 for cube root).
      * @returns {number} - The nth root of the number.
      */
    nthRoot(number, exp) {
        return Math.pow(number, 1 / exp);
    }

    /**
      * Returns the factorial of a number.
      * @param {number} number - The number.
      * @returns {number} - The factorial.
      * @throws {Error} - If the number is negative.
      */
    factorial(number) {
        if (number < 0) {
            throw new Error('Factorial of a negative number is not defined');
        }
        if (number === 0 || number === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
    /**
      * Returns the number of permutations of n items taken r at a time.
      * @param {number} n - The total number of items.
      * @param {number} r - The number of items taken.
      * @returns {number} - The number of permutations.
      * @throws {Error} - If inputs are invalid.
      */
    permutations(n, r) {
        if (n < r || n < 0 || r < 0) {
            throw new Error('Invalid input for permutations');
        }
        return this.factorial(n) / this.factorial(n - r);
    }

    /**
      * Returns the number of combinations of n items taken r at a time.
      * @param {number} n - The total number of items.
      * @param {number} r - The number of items taken.
      * @returns {number} - The number of combinations.
      * @throws {Error} - If inputs are invalid.
      */
    combinations(n, r) {
        if (n < r || n < 0 || r < 0) {
            throw new Error('Invalid input for combinations');
        }
        return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
    }

    /**
      * Returns the absolute value of a number.
      * @param {number} number - The number.
      * @returns {number} - The absolute value.
      */
    absoluteValue(number) {
        return Math.abs(number);
    }

    // Trigonometry with Degree-Radian Conversion

    /**
      * Converts degrees to radians.
      * @param {number} degrees - The angle in degrees.
      * @returns {number} - The angle in radians.
      */
    degreeToRadian(degrees) {
        return degrees * (Math.PI / 180);
    }

    /**
      * Converts radians to degrees.
      * @param {number} radians - The angle in radians.
      * @returns {number} - The angle in degrees.
      */
    radianToDegree(radians) {
        return radians * (180 / Math.PI);
    }

    /**
      * Returns the sine of an angle.
      * @param {number} angle - The angle in radians.
      * @returns {number} - The sine of the angle.
      */
    sine(angle) {
        return Math.sin(angle);
    }

    /**
      * Returns the cosine of an angle.
      * @param {number} angle - The angle in radians.
      * @returns {number} - The cosine of the angle.
      */
    cosine(angle) {
        return Math.cos(angle);
    }

    /**
      * Returns the tangent of an angle.
      * @param {number} angle - The angle in radians.
      * @returns {number} - The tangent of the angle.
      */
    tangent(angle) {
        return Math.tan(angle);
    }

    /**
      * Returns the arcsine of a number.
      * @param {number} value - The value.
      * @returns {number} - The arcsine in radians.
      */
    inverseSine(value) {
        return Math.asin(value);
    }

    /**
      * Returns the arccosine of a number.
      * @param {number} value - The value.
      * @returns {number} - The arccosine in radians.
      */
    inverseCosine(value) {
        return Math.acos(value);
    }

    /**
      * Returns the arctangent of a number.
      * @param {number} value - The value.
      * @returns {number} - The arctangent in radians.
      */
    inverseTangent(value) {
        return Math.atan(value);
    }

    // Logarithms
    /**
      * Returns the natural logarithm of a number.
      * @param {number} value - The value.
      * @returns {number} - The natural logarithm.
      */
    naturalLogarithm(value) {
        return Math.log(value);
    }

    /**
      * Returns the base-10 logarithm of a number.
      * @param {number} value - The value.
      * @returns {number} - The base-10 logarithm.
      */
    base10Logarithm(value) {
        return Math.log10(value);
    }

    /**
      * Returns the logarithm of a number with a custom base.
      * @param {number} value - The value.
      * @param {number} base - The base.
      * @returns {number} - The logarithm with the specified base.
      */
    customBaseLogarithm(value, base) {
        return Math.log(value) / Math.log(base);
    }

    // Exponential Functions
    /**
      * Calculates exponential growth.
      * @param {number} base - The initial value.
      * @param {number} rate - The growth rate.
      * @param {number} time - The time period.
      * @returns {number} - The value after growth.
      */
    exponentialGrowth(base, rate, time) {
        return base * Math.exp(rate * time);
    }

    /**
      * Calculates exponential decay.
      * @param {number} initial - The initial value.
      * @param {number} rate - The decay rate.
      * @param {number} time - The time period.
      * @returns {number} - The value after decay.
      */
    exponentialDecay(initial, rate, time) {
        return initial * Math.exp(-rate * time);
    }

    /**
      * Raises a base number to an exponent using Math.pow.
      * @param {number} base - The base number.
      * @param {number} exponent - The exponent.
      * @returns {number} - The result of base raised to exponent.
      */
    exponentiationWithBase(base, exponent) {
        return Math.pow(base, exponent);
    }

    // Random Number Generation
    /**
      * Generates a random number between min and max.
      * @param {number} min - The minimum value.
      * @param {number} max - The maximum value.
      * @returns {number} - A random number between min and max.
      */
    uniformRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
      * Generates a random number with a normal distribution.
      * @param {number} mean - The mean value.
      * @param {number} stdDev - The standard deviation.
      * @returns {number} - A random number with normal distribution.
      */
    normalRandom(mean, stdDev) {
        let u = 0, v = 0;
        while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
        while (v === 0) v = Math.random();
        const normal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return mean + stdDev * normal;
    }

    /**
      * Generates a random number between min and max with specified precision.
      * @param {number} min - The minimum value.
      * @param {number} max - The maximum value.
      * @param {number} [precision=0] - The number of decimal places.
      * @returns {number} - A random number between min and max with precision.
      */
    customRangeRandom(min, max, precision = 0) {
        const rand = Math.random() * (max - min) + min;
        return parseFloat(rand.toFixed(precision));
    }

    // Statistical Functions
    /**
      * Calculates the mean of an array of numbers.
      * @param {number[]} values - The array of numbers.
      * @returns {number} - The mean of the numbers.
      * @throws {Error} - If the input is invalid.
      */
    mean(values) {
        if (!Array.isArray(values) || values.length === 0) {
            throw new Error('Invalid input');
        }
        const sum = values.reduce((acc, val) => acc + val, 0);
        return sum / values.length;
    }

    /**
      * Calculates the median of an array of numbers.
      * @param {number[]} values - The array of numbers.
      * @returns {number} - The median of the numbers.
      * @throws {Error} - If the input is invalid.
      */
    median(values) {
        if (!Array.isArray(values) || values.length === 0) {
            throw new Error('Invalid input');
        }
        values.sort((a, b) => a - b);
        const middle = Math.floor(values.length / 2);
        if (values.length % 2 === 0) {
            return (values[middle - 1] + values[middle]) / 2;
        } else {
            return values[middle];
        }
    }

    /**
      * Calculates the mode of an array of numbers.
      * @param {number[]} values - The array of numbers.
      * @returns {number[]} - The mode(s) of the numbers.
      * @throws {Error} - If the input is invalid.
      */
    mode(values) {
        if (!Array.isArray(values) || values.length === 0) {
            throw new Error('Invalid input');
        }
        const frequencyMap = {};
        values.forEach(val => {
            frequencyMap[val] = (frequencyMap[val] || 0) + 1;
        });
        let maxFrequency = 0;
        let modes = [];
        for (const val in frequencyMap) {
            if (frequencyMap[val] > maxFrequency) {
                maxFrequency = frequencyMap[val];
                modes = [val];
            } else if (frequencyMap[val] === maxFrequency) {
                modes.push(val);
            }
        }
        return modes;
    }

    /**
      * Calculates the standard deviation of an array of numbers.
      * @param {number[]} values - The array of numbers.
      * @returns {number} - The standard deviation.
      * @throws {Error} - If the input is invalid.
      */
    standardDeviation(values) {
        if (!Array.isArray(values) || values.length === 0) {
            throw new Error('Invalid input');
        }
        const mean = this.mean(values);
        const sum = values.reduce((acc, val) => acc + (val - mean) ** 2, 0);
        return Math.sqrt(sum / values.length);
    }

    /**
      * Calculates the variance of an array of numbers.
      * @param {number[]} values - The array of numbers.
      * @returns {number} - The variance.
      * @throws {Error} - If the input is invalid.
      */
    variance(values) {
        if (!Array.isArray(values) || values.length === 0) {
            throw new Error('Invalid input');
        }
        const mean = this.mean(values);
        const sum = values.reduce((acc, val) => acc + (val - mean) ** 2, 0);
        return sum / values.length;
    }

    /**
      * Calculates the correlation matrix for multiple arrays of numbers.
      * @param {number[][]} values - The arrays of numbers.
      * @returns {number[][]} - The correlation matrix.
      * @throws {Error} - If the input is invalid.
      */
    correlation(values) {
        // Input validation
        if (!Array.isArray(values) || values.length < 2) {
            throw new Error('Invalid input: Expected an array of arrays with at least two arrays');
        }

        // Check lengths of all arrays
        const length = values[0].length;
        if (!values.every(arr => Array.isArray(arr) && arr.length === length)) {
            throw new Error('Invalid input: All arrays must have the same length');
        }

        // Calculate mean for each set of values
        const means = values.map(arr => this.mean(arr));

        // Calculate correlation coefficient
        const numSets = values.length;
        const correlationMatrix = [];

        for (let i = 0; i < numSets; i++) {
            correlationMatrix[i] = [];
            for (let j = 0; j < numSets; j++) {
                if (i === j) {
                    correlationMatrix[i][j] = 1; // Correlation of a set with itself is 1
                } else {
                    let num = 0, denom1 = 0, denom2 = 0;
                    for (let k = 0; k < length; k++) {
                        num += (values[i][k] - means[i]) * (values[j][k] - means[j]);
                        denom1 += (values[i][k] - means[i]) ** 2;
                        denom2 += (values[j][k] - means[j]) ** 2;
                    }
                    correlationMatrix[i][j] = num / Math.sqrt(denom1 * denom2);
                }
            }
        }

        return correlationMatrix;
    }

    /**
      * Calculates the covariance of two arrays of numbers.
      * @param {number[]} values1 - The first array of numbers.
      * @param {number[]} values2 - The second array of numbers.
      * @returns {number} - The covariance.
      * @throws {Error} - If the input is invalid.
      */
    covariance(values1, values2) {
        if (!Array.isArray(values1) || !Array.isArray(values2) || values1.length !== values2.length || values1.length === 0) {
            throw new Error('Invalid input');
        }
        const mean1 = this.mean(values1);
        const mean2 = this.mean(values2);
        let sum = 0;
        for (let i = 0; i < values1.length; i++) {
            sum += (values1[i] - mean1) * (values2[i] - mean2);
        }
        return sum / values1.length;
    }

    // Matrix Operations

    /**
      * Adds two matrices.
      * @param {number[][]} matrix1 - The first matrix.
      * @param {number[][]} matrix2 - The second matrix.
      * @returns {number[][]} - The result of addition.
      * @throws {Error} - If matrices are not the same size.
      */
    matrixAddition(matrix1, matrix2) {
        if (!Array.isArray(matrix1) || !Array.isArray(matrix2) || matrix1.length === 0 || matrix1.length !== matrix2.length) {
            throw new Error('Invalid input for matrix addition');
        }
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
            const row = [];
            for (let j = 0; j < matrix1[i].length; j++) {
                row.push(matrix1[i][j] + matrix2[i][j]);
            }
            result.push(row);
        }
        return result;
    }

    /**
      * Subtracts the second matrix from the first matrix.
      * @param {number[][]} matrix1 - The first matrix.
      * @param {number[][]} matrix2 - The second matrix.
      * @returns {number[][]} - The result of subtraction.
      * @throws {Error} - If matrices are not the same size.
      */
    matrixSubtraction(matrix1, matrix2) {
        if (!Array.isArray(matrix1) || !Array.isArray(matrix2) || matrix1.length === 0 || matrix1.length !== matrix2.length) {
            throw new Error('Invalid input for matrix subtraction');
        }
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
            const row = [];
            for (let j = 0; j < matrix1[i].length; j++) {
                row.push(matrix1[i][j] - matrix2[i][j]);
            }
            result.push(row);
        }
        return result;
    }

    /**
      * Multiplies two matrices.
      * @param {number[][]} matrix1 - The first matrix.
      * @param {number[][]} matrix2 - The second matrix.
      * @returns {number[][]} - The result of multiplication.
      * @throws {Error} - If matrices are not compatible for multiplication.
      */
    matrixMultiplication(matrix1, matrix2) {
        if (!Array.isArray(matrix1) || !Array.isArray(matrix2) || matrix1.length === 0 || matrix2.length === 0 || matrix1[0].length !== matrix2.length) {
            throw new Error('Invalid input for matrix multiplication');
        }
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
            const row = [];
            for (let j = 0; j < matrix2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < matrix2.length; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                row.push(sum);
            }
            result.push(row);
        }
        return result;
    }

    /**
      * Transposes a matrix.
      * @param {number[][]} matrix - The matrix to transpose.
      * @returns {number[][]} - The transposed matrix.
      */
    matrixTranspose(matrix) {
        if (!Array.isArray(matrix) || matrix.length === 0) {
            throw new Error('Invalid input for matrix transpose');
        }
        const rows = matrix.length;
        const cols = matrix[0].length;
        const result = [];
        for (let j = 0; j < cols; j++) {
            const row = [];
            for (let i = 0; i < rows; i++) {
                row.push(matrix[i][j]);
            }
            result.push(row);
        }
        return result;
    }

    /**
      * Calculates the inverse of a matrix.
      * @param {number[][]} matrix - The matrix.
      * @returns {number[][]} - The inverse of the matrix.
      * @throws {Error} - If the matrix is not square or not invertible.
      */
    matrixInverse(matrix) {
        // Assuming square matrix and determinant is non-zero for simplicity
        if (!Array.isArray(matrix) || matrix.length === 0 || matrix.length !== matrix[0].length) {
            throw new Error('Invalid input for matrix inverse');
        }
        const n = matrix.length;
        const identity = this.createIdentityMatrix(n);
        const augmentedMatrix = this.matrixConcat(matrix, identity);

        for (let i = 0; i < n; i++) {
            // Make the diagonal element 1
            const divider = augmentedMatrix[i][i];
            for (let j = 0; j < 2 * n; j++) {
                augmentedMatrix[i][j] /= divider;
            }

            // Make other elements in the column 0
            for (let k = 0; k < n; k++) {
                if (k !== i) {
                    const multiplier = augmentedMatrix[k][i];
                    for (let j = 0; j < 2 * n; j++) {
                        augmentedMatrix[k][j] -= multiplier * augmentedMatrix[i][j];
                    }
                }
            }
        }

        // Extract the inverse matrix from augmented matrix
        const inverseMatrix = [];
        for (let i = 0; i < n; i++) {
            inverseMatrix.push(augmentedMatrix.map(row => row.slice(n)));
        }

        return inverseMatrix;
    }

    /**
      * Creates an identity matrix of the given size.
      * @param {number} size - The size of the identity matrix.
      * @returns {number[][]} - The identity matrix.
      */
    createIdentityMatrix(size) {
        const identity = [];
        for (let i = 0; i < size; i++) {
            const row = new Array(size).fill(0);
            row[i] = 1;
            identity.push(row);
        }
        return identity;
    }

    /**
      * Concatenates two matrices horizontally.
      * @param {number[][]} matrix1 - The first matrix.
      * @param {number[][]} matrix2 - The second matrix.
      * @returns {number[][]} - The concatenated matrix.
      * @throws {Error} - If the input matrices are invalid.
      */
    matrixConcat(matrix1, matrix2) {
        if (!Array.isArray(matrix1) || !Array.isArray(matrix2) || matrix1.length === 0 || matrix2.length === 0 || matrix1.length !== matrix2.length) {
            throw new Error('Invalid input for matrix concatenation');
        }
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
            result.push(matrix1[i].concat(matrix2[i]));
        }
        return result;
    }

    /**
      * Calculates the determinant of a matrix.
      * @param {number[][]} matrix - The matrix.
      * @returns {number} - The determinant of the matrix.
      * @throws {Error} - If the input matrix is invalid.
      */
    matrixDeterminant(matrix) {
        if (!Array.isArray(matrix) || matrix.length === 0 || matrix.length !== matrix[0].length) {
            throw new Error('Invalid input for matrix determinant');
        }
        const n = matrix.length;
        if (n === 1) {
            return matrix[0][0];
        }
        let det = 0;
        for (let i = 0; i < n; i++) {
            const minor = this.matrixMinor(matrix, 0, i);
            det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * this.matrixDeterminant(minor);
        }
        return det;
    }

    /**
      * Returns the minor of a matrix element.
      * @param {number[][]} matrix - The matrix.
      * @param {number} row - The row index.
      * @param {number} col - The column index.
      * @returns {number[][]} - The minor matrix.
      */
    matrixMinor(matrix, row, col) {
        return matrix.filter((_, i) => i !== row).map(row => row.filter((_, j) => j !== col));
    }

    // Complex Numbers

    /**
      * Adds two complex numbers.
      * @param {Object} complex1 - The first complex number.
      * @param {number} complex1.real - The real part.
      * @param {number} complex1.imaginary - The imaginary part.
      * @param {Object} complex2 - The second complex number.
      * @param {number} complex2.real - The real part.
      * @param {number} complex2.imaginary - The imaginary part.
      * @returns {Object} - The sum of the complex numbers.
      */
    complexAddition(complex1, complex2) {
        return { real: complex1.real + complex2.real, imaginary: complex1.imaginary + complex2.imaginary };
    }

    /**
      * Subtracts the second complex number from the first complex number.
      * @param {Object} complex1 - The first complex number.
      * @param {number} complex1.real - The real part.
      * @param {number} complex1.imaginary - The imaginary part.
      * @param {Object} complex2 - The second complex number.
      * @param {number} complex2.real - The real part.
      * @param {number} complex2.imaginary - The imaginary part.
      * @returns {Object} - The difference of the complex numbers.
      */
    complexSubtraction(complex1, complex2) {
        return { real: complex1.real - complex2.real, imaginary: complex1.imaginary - complex2.imaginary };
    }

    /**
      * Multiplies two complex numbers.
      * @param {Object} complex1 - The first complex number.
      * @param {number} complex1.real - The real part.
      * @param {number} complex1.imaginary - The imaginary part.
      * @param {Object} complex2 - The second complex number.
      * @param {number} complex2.real - The real part.
      * @param {number} complex2.imaginary - The imaginary part.
      * @returns {Object} - The product of the complex numbers.
      */
    complexMultiplication(complex1, complex2) {
        const real = complex1.real * complex2.real - complex1.imaginary * complex2.imaginary;
        const imaginary = complex1.real * complex2.imaginary + complex1.imaginary * complex2.real;
        return { real, imaginary };
    }

    /**
      * Divides the first complex number by the second complex number.
      * @param {Object} complex1 - The first complex number.
      * @param {number} complex1.real - The real part.
      * @param {number} complex1.imaginary - The imaginary part.
      * @param {Object} complex2 - The second complex number.
      * @param {number} complex2.real - The real part.
      * @param {number} complex2.imaginary - The imaginary part.
      * @returns {Object} - The quotient of the complex numbers.
      */
    complexDivision(complex1, complex2) {
        const denominator = complex2.real ** 2 + complex2.imaginary ** 2;
        const real = (complex1.real * complex2.real + complex1.imaginary * complex2.imaginary) / denominator;
        const imaginary = (complex1.imaginary * complex2.real - complex1.real * complex2.imaginary) / denominator;
        return { real, imaginary };
    }

    /**
      * Returns the conjugate of a complex number.
      * @param {Object} complex - The complex number.
      * @param {number} complex.real - The real part.
      * @param {number} complex.imaginary - The imaginary part.
      * @returns {Object} - The conjugate of the complex number.
      */
    complexConjugate(complex) {
        return { real: complex.real, imaginary: -complex.imaginary };
    }

    /**
      * Returns the magnitude of a complex number.
      * @param {Object} complex - The complex number.
      * @param {number} complex.real - The real part.
      * @param {number} complex.imaginary - The imaginary part.
      * @returns {number} - The magnitude of the complex number.
      */
    complexMagnitude(complex) {
        return Math.sqrt(complex.real ** 2 + complex.imaginary ** 2);
    }


    /**
      * Returns the phase of a complex number.
      * @param {Object} complex - The complex number.
      * @param {number} complex.real - The real part.
      * @param {number} complex.imaginary - The imaginary part.
      * @returns {number} - The phase of the complex number in radians.
      */
    complexPhase(complex) {
        return Math.atan2(complex.imaginary, complex.real);
    }

    // Number Theory

    /**
      * Checks if a number is prime.
      * @param {number} number - The number to check.
      * @returns {boolean} - True if the number is prime, false otherwise.
      */
    isPrime(number) {
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 === 0 || number % 3 === 0) {
            return false;
        }
        let i = 5;
        while (i * i <= number) {
            if (number % i === 0 || number % (i + 2) === 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }

    /**
      * Returns the prime factors of a number.
      * @param {number} number - The number to factorize.
      * @returns {number[]} - The prime factors of the number.
      * @throws {Error} - If the input number is less than or equal to 1.
      */
    primeFactors(number) {
        if (number <= 1) {
            throw new Error('Prime factorization is not defined for numbers less than or equal to 1');
        }
        const factors = [];
        let divisor = 2;
        while (number >= divisor) {
            if (number % divisor === 0) {
                factors.push(divisor);
                number /= divisor;
            } else {
                divisor++;
            }
        }
        return factors;
    }

    /**
      * Calculates the greatest common divisor (GCD) of two numbers.
      * @param {number} a - The first number.
      * @param {number} b - The second number.
      * @returns {number} - The GCD of the two numbers.
      */
    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    /**
      * Calculates the least common multiple (LCM) of two numbers.
      * @param {number} a - The first number.
      * @param {number} b - The second number.
      * @returns {number} - The LCM of the two numbers.
      */
    lcm(a, b) {
        return Math.abs(a * b) / this.gcd(a, b);
    }

    /**
      * Calculates the Euler's Totient function of a number.
      * @param {number} n - The number.
      * @returns {number} - The value of Euler's Totient function.
      */
    eulerTotientFunction(n) {
        let result = n;
        for (let p = 2; p * p <= n; ++p) {
            if (n % p === 0) {
                while (n % p === 0) {
                    n /= p;
                }
                result -= result / p;
            }
        }
        if (n > 1) {
            result -= result / n;
        }
        return result;
    }

    // Geometry

    /**
      * Calculates the area of a circle.
      * @param {number} radius - The radius of the circle.
      * @returns {number} - The area of the circle.
      */
    circleArea(radius) {
        return Math.PI * radius ** 2;
    }

    /**
      * Calculates the perimeter of a circle.
      * @param {number} radius - The radius of the circle.
      * @returns {number} - The perimeter of the circle.
      */
    circlePerimeter(radius) {
        return 2 * Math.PI * radius;
    }

    /**
      * Calculates the area of a rectangle.
      * @param {number} length - The length of the rectangle.
      * @param {number} width - The width of the rectangle.
      * @returns {number} - The area of the rectangle.
      */
    rectangleArea(length, width) {
        return length * width;
    }

    /**
      * Calculates the perimeter of a rectangle.
      * @param {number} length - The length of the rectangle.
      * @param {number} width - The width of the rectangle.
      * @returns {number} - The perimeter of the rectangle.
      */
    rectanglePerimeter(length, width) {
        return 2 * (length + width);
    }

    /**
      * Calculates the area of a triangle.
      * @param {number} base - The base of the triangle.
      * @param {number} height - The height of the triangle.
      * @returns {number} - The area of the triangle.
      */
    triangleArea(base, height) {
        return 0.5 * base * height;
    }

    /**
      * Calculates the perimeter of a triangle.
      * @param {number} side1 - The first side of the triangle.
      * @param {number} side2 - The second side of the triangle.
      * @param {number} side3 - The third side of the triangle.
      * @returns {number} - The perimeter of the triangle.
      */
    trianglePerimeter(side1, side2, side3) {
        return side1 + side2 + side3;
    }

    /**
      * Calculates the volume of a sphere.
      * @param {number} radius - The radius of the sphere.
      * @returns {number} - The volume of the sphere.
      */
    sphereVolume(radius) {
        return (4 / 3) * Math.PI * radius ** 3;
    }

    /**
      * Calculates the volume of a cube.
      * @param {number} side - The side length of the cube.
      * @returns {number} - The volume of the cube.
      */
    cubeVolume(side) {
        return side ** 3;
    }

    /**
      * Calculates the volume of a cylinder.
      * @param {number} radius - The radius of the cylinder.
      * @param {number} height - The height of the cylinder.
      * @returns {number} - The volume of the cylinder.
      */
    cylinderVolume(radius, height) {
        return Math.PI * radius ** 2 * height;
    }



    // Financial Mathematics

    /**
      * Calculates the compound interest.
      * @param {number} principal - The principal amount.
      * @param {number} rate - The interest rate.
      * @param {number} time - The time period.
      * @returns {number} - The compound interest.
      */
    compoundInterest(principal, rate, time) {
        return principal * (1 + rate / 100) ** time;
    }


    /**
     * Calculates the present value of a future amount.
     * @param {number} futureValue - The future value.
     * @param {number} rate - The discount rate.
     * @param {number} time - The time period.
     * @returns {number} - The present value.
     */
    presentValue(futureValue, rate, time) {
        return futureValue / (1 + rate / 100) ** time;
    }

    /**
      * Generates an amortization schedule for a loan.
      * @param {number} principal - The principal amount.
      * @param {number} annualInterestRate - The annual interest rate.
      * @param {number} years - The term of the loan in years.
      * @returns {Object[]} - The amortization schedule.
      */

    amortizationSchedule(principal, annualInterestRate, years) {
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const totalPayments = years * 12;
        const monthlyPayment = principal * (monthlyInterestRate * (1 + monthlyInterestRate) ** totalPayments) / ((1 + monthlyInterestRate) ** totalPayments - 1);
        const schedule = [];
        let balance = principal;
        for (let month = 1; month <= totalPayments; month++) {
            const interestPayment = balance * monthlyInterestRate;
            const principalPayment = monthlyPayment - interestPayment;
            balance -= principalPayment;
            schedule.push({
                month,
                principalPayment,
                interestPayment,
                balance: Math.max(balance, 0) // Ensure balance doesn't go negative
            });
        }
        return schedule;
    }

    // Conversion Functions

    /**
      * Converts Celsius to Fahrenheit.
      * @param {number} celsius - The temperature in Celsius.
      * @returns {number} - The temperature in Fahrenheit.
      */
    celsiusToFahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    }

    /**
      * Converts Fahrenheit to Celsius.
      * @param {number} fahrenheit - The temperature in Fahrenheit.
      * @returns {number} - The temperature in Celsius.
      */
    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    /**
      * Converts Celsius to Kelvin.
      * @param {number} celsius - The temperature in Celsius.
      * @returns {number} - The temperature in Kelvin.
      */
    celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    /**
      * Converts Kelvin to Celsius.
      * @param {number} kelvin - The temperature in Kelvin.
      * @returns {number} - The temperature in Celsius.
      */
    kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    // Error Handling and Validation

    /**
      * Checks if a value is infinity.
      * @param {number} value - The value to check.
      * @returns {boolean} - True if the value is infinity, false otherwise.
      */
    isInfinity(value) {
        return value === Infinity || value === -Infinity;
    }

    /**
      * Checks if a value is NaN.
      * @param {number} value - The value to check.
      * @returns {boolean} - True if the value is NaN, false otherwise.
      */
    isNaN(value) {
        return Number.isNaN(value);
    }

    /**
      * Checks if a value is an integer.
      * @param {number} value - The value to check.
      * @returns {boolean} - True if the value is an integer, false otherwise.
      */
    isInteger(value) {
        return Number.isInteger(value);
    }

    /**
      * Checks if a value is a float.
      * @param {number} value - The value to check.
      * @returns {boolean} - True if the value is a float, false otherwise.
      */
    isFloat(value) {
        return !Number.isNaN(value) && Number.isFinite(value) && !Number.isInteger(value);
    }

    /**
      * Rounds a number to a specified number of decimal places.
      * @param {number} value - The number to round.
      * @param {number} decimals - The number of decimal places.
      * @returns {number} - The rounded number.
      */
    roundToDecimal(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
}
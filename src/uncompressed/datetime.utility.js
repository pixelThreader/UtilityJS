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
 * UtilityJs | datetime
 * 
 * A JavaScript utility library aiming to make life easier, save code,
 * and enhance productivity with a wide range of utilities.
 * 
 * @copyright (c) UtilityJs
 * @license MIT License
 * 
 * WARNING: Redistribution of any of the libraries developed by UtilityJs is illegal without permission.
 * Legal actions may be taken against unauthorized distribution.
 * Read terms of use: https://utilityjs.com/privacy/legal-actions
 */

class DateTimeUtility {
    /**
     * Formats the given date according to the specified format string.
     * 
     * Supported date formats:
     * 'dd-mm-yyyy', 'yyyy-mm-dd', 'dd-yyyy-mm', 'mm-dd-yyyy', 'dd-mm-yy', 'yy-mm-dd',
     * 'mm-yyyy-dd', 'yyyy-dd-mm', 'mm-yy-dd', 'dd-yy-mm', 'yy-dd-mm', 'yyyy-mm-dd',
     * 'dd-yyyy-mm', 'mm-yyyy-dd', 'yy-mm-dd', 'dd-yy-mm', 'mm-yy-dd', 'yyyy-mm-dd',
     * 'dd-mm-yy', 'dd-yyyy-mm'
     * 
     * Supported time formats:
     * 'hh:mm:ss', 'hh:ss:mm', 'hh:mm:ss 12', 'hh:mm:ss 24', 'mm:ss:hh', 'ss:hh:mm',
     * 'mm:ss:hh 12', 'mm:ss:hh 24', 'ss:mm:hh', 'hh:mm 12', 'hh:mm 24', 'mm:ss 12',
     * 'mm:ss 24', 'ss:mm 12', 'ss:mm 24', 'hh 12', 'hh 24', 'mm 12', 'mm 24', 'ss 12'
     * 
     * @param {Date} date - The date to format.
     * @param {string} format - The format string.
     * @return {string} - The formatted date string.
     */
    dateTimeFormat(format, date=true, time=true) {
        let today = new Date();
        const padZero = (num, size) => num.toString().padStart(size, '0');

        const dateOptions = {
            'dd': padZero(today.getDate(), 2),
            'mm': padZero(today.getMonth() + 1, 2),
            'yyyy': today.getFullYear().toString(),
            'yy': today.getFullYear().toString().slice(-2).padStart(2, '0'),
        };

        const timeOptions = {
            'hh': padZero((today.getHours() % 12 || 12), 2),
            'HH': padZero(today.getHours(), 2),
            'mm': padZero(today.getMinutes(), 2),
            'ss': padZero(today.getSeconds(), 2),
            '12': today.getHours() >= 12 ? 'PM' : 'AM',
            '24': ''
        };
        
        const dateRegex = /(dd|mm|yyyy|yy)/g;
        const timeRegex = /(hh|HH|mm|ss|12|24)/g;

        let formattedDate = format.replace(dateRegex, match => {
            if (match === 'yyyy') {
                return dateOptions['yyyy'];
            } else if (match === 'yy') {
                return dateOptions['yy'];
            } else if (match === 'dd') {
                return dateOptions['dd'];
            } else if (match === 'mm') {
                return dateOptions['mm'];
            }
        });

        formattedDate = formattedDate.replace(timeRegex, match => {
            if (match === 'hh' || match === 'HH') {
                return (format.includes('24') ? dateOptions['HH'] : dateOptions['hh']);
            } else if (match === 'mm') {
                return dateOptions['mm'];
            } else if (match === 'ss') {
                return dateOptions['ss'];
            } else if (match === '12' || match === '24') {
                return dateOptions[match];
            }
        });

        return formattedDate;
    }

    /**
     * Parses a date string into a Date object.
     * @param {string} dateString - The date string to parse.
     * @returns {Date} - The parsed Date object.
     * @throws {Error} - If the input dateString is invalid.
     */
    dateParse(dateString) {
        const parsedDate = new Date(dateString);
        if (isNaN(parsedDate.getTime())) {
            throw new Error('Invalid date string');
        }
        return parsedDate;
    }

    /**
     * Adds a specified number of days to a date.
     * @param {Date} date - The starting date.
     * @param {number} days - The number of days to add.
     * @returns {Date} - The resulting date after adding days.
     */
    dateAddDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    /**
     * Adds a specified number of months to a date.
     * @param {Date} date - The starting date.
     * @param {number} months - The number of months to add.
     * @returns {Date} - The resulting date after adding months.
     */
    dateAddMonths(date, months) {
        const result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    }

    /**
     * Adds a specified number of years to a date.
     * @param {Date} date - The starting date.
     * @param {number} years - The number of years to add.
     * @returns {Date} - The resulting date after adding years.
     */
    dateAddYears(date, years) {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() + years);
        return result;
    }

    /**
     * Subtracts a specified number of days from a date.
     * @param {Date} date - The starting date.
     * @param {number} days - The number of days to subtract.
     * @returns {Date} - The resulting date after subtracting days.
     */
    dateSubtractDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
    }

    /**
     * Subtracts a specified number of months from a date.
     * @param {Date} date - The starting date.
     * @param {number} months - The number of months to subtract.
     * @returns {Date} - The resulting date after subtracting months.
     */
    dateSubtractMonths(date, months) {
        const result = new Date(date);
        result.setMonth(result.getMonth() - months);
        return result;
    }

    /**
     * Subtracts a specified number of years from a date.
     * @param {Date} date - The starting date.
     * @param {number} years - The number of years to subtract.
     * @returns {Date} - The resulting date after subtracting years.
     */
    dateSubtractYears(date, years) {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() - years);
        return result;
    }

    /**
     * Sets the time of a date to the start of the day (00:00:00.000).
     * @param {Date} date - The date to modify.
     * @returns {Date} - The modified date set to the start of the day.
     */
    dateStartOfDay(date) {
        const result = new Date(date);
        result.setHours(0, 0, 0, 0);
        return result;
    }

    /**
     * Sets the time of a date to the end of the day (23:59:59.999).
     * @param {Date} date - The date to modify.
     * @returns {Date} - The modified date set to the end of the day.
     */
    dateEndOfDay(date) {
        const result = new Date(date);
        result.setHours(23, 59, 59, 999);
        return result;
    }

    /**
     * Sets the date to the start of the month (1st day at 00:00:00.000).
     * @param {Date} date - The date to modify.
     * @returns {Date} - The modified date set to the start of the month.
     */
    dateStartOfMonth(date) {
        const result = new Date(date);
        result.setDate(1);
        result.setHours(0, 0, 0, 0);
        return result;
    }

    /**
     * Sets the date to the end of the month (last day at 23:59:59.999).
     * @param {Date} date - The date to modify.
     * @returns {Date} - The modified date set to the end of the month.
     */
    dateEndOfMonth(date) {
        const result = new Date(date);
        result.setMonth(result.getMonth() + 1, 0);
        result.setHours(23, 59, 59, 999);
        return result;
    }

    /**
     * Checks if a given year is a leap year.
     * @param {number} year - The year to check.
     * @returns {boolean} - True if the year is a leap year, false otherwise.
     */
    dateIsLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    /**
     * Gets the number of days in a given month of a year.
     * @param {number} year - The year of the month.
     * @param {number} month - The month (1-based index).
     * @returns {number} - The number of days in the specified month.
     */
    dateDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    /**
     * Calculates the difference in days between two dates.
     * @param {Date} date1 - The first date.
     * @param {Date} date2 - The second date.
     * @returns {number} - The difference in days between date1 and date2.
     */
    dateDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    /**
     * Converts a date to a Unix timestamp (milliseconds since Jan 1, 1970).
     * @param {Date} date - The date to convert.
     * @returns {number} - The Unix timestamp representation of the date.
     */
    dateToTimestamp(date) {
        return date.getTime();
    }

    /**
     * Converts a Unix timestamp (milliseconds since Jan 1, 1970) to a Date object.
     * @param {number} timestamp - The Unix timestamp to convert.
     * @returns {Date} - The Date object representing the timestamp.
     */
    dateFromTimestamp(timestamp) {
        return new Date(timestamp);
    }

    /**
     * Checks if date1 is before date2.
     * @param {Date} date1 - The first date.
     * @param {Date} date2 - The second date.
     * @returns {boolean} - True if date1 is before date2, false otherwise.
     */
    dateIsBefore(date1, date2) {
        return date1.getTime() < date2.getTime();
    }

    /**
     * Checks if date1 is after date2.
     * @param {Date} date1 - The first date.
     * @param {Date} date2 - The second date.
     * @returns {boolean} - True if date1 is after date2, false otherwise.
     */
    dateIsAfter(date1, date2) {
        return date1.getTime() > date2.getTime();
    }

    /**
     * Checks if a given date is today.
     * @param {Date} date - The date to check.
     * @returns {boolean} - True if the date is today, false otherwise.
     */
    dateIsToday(date) {
        const today = this.today();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    /**
     * Checks if a given date is a weekend (Saturday or Sunday).
     * @param {Date} date - The date to check.
     * @returns {boolean} - True if the date is a weekend, false otherwise.
     */
    dateIsWeekend(date) {
        const day = date.getDay();
        return day === 0 || day === 6;
    }

    /**
     * Checks if a given date is a weekday (Monday to Friday).
     * @param {Date} date - The date to check.
     * @returns {boolean} - True if the date is a weekday, false otherwise.
     */
    dateIsWeekday(date) {
        const day = date.getDay();
        return day >= 1 && day <= 5;
    }

    /**
     * Returns the current date (today).
     * @returns {Date} - The current date.
     */
    today(...params) {
        return new Date(...params);
    }


    // Converts a date to a specified time zone
    dateToTimeZone(date, timeZone) {
        return new Date(date.toLocaleString('en-US', { timeZone }));
    }

    // Converts a date to the local time zone
    dateToLocalTimeZone(date) {
        return new Date(date);
    }

    // Checks if a date string is valid
    dateIsValid(dateString) {
        const date = new Date(dateString);
        return !isNaN(date);
    }

    // Calculates the relative time from now to a given date
    dateRelativeToNow(date) {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} days ago`;
        if (hours > 0) return `${hours} hours ago`;
        if (minutes > 0) return `${minutes} minutes ago`;
        return 'just now';
    }

    // Adds business days to a date
    dateAddBusinessDays(date, days) {
        const result = new Date(date);
        let count = 0;
        while (count < days) {
            result.setDate(result.getDate() + 1);
            const day = result.getDay();
            if (day !== 0 && day !== 6) {
                count++;
            }
        }
        return result;
    }

    // Determines the moon phase for a given date
    dateMoonPhase(date) {
        const lunarCycle = 29.53058867;
        const knownNewMoon = new Date('2000-01-06T18:14:00Z');
        const diff = (date - knownNewMoon) / (1000 * 60 * 60 * 24);
        const daysIntoCycle = diff % lunarCycle;
        if (daysIntoCycle < 1.84566) return 'New Moon';
        if (daysIntoCycle < 5.53699) return 'Waxing Crescent';
        if (daysIntoCycle < 9.22831) return 'First Quarter';
        if (daysIntoCycle < 12.91963) return 'Waxing Gibbous';
        if (daysIntoCycle < 16.61096) return 'Full Moon';
        if (daysIntoCycle < 20.30228) return 'Waning Gibbous';
        if (daysIntoCycle < 23.99361) return 'Last Quarter';
        return 'Waning Crescent';
    }

    // Creates an array of dates between two dates
    dateRange(startDate, endDate) {
        const dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    }

    // Checks if a date is within a given range
    dateInRange(date, startDate, endDate) {
        return date >= startDate && date <= endDate;
    }

    // Calculates the age from a given date to today
    dateAge(date) {
        const today = new Date();
        let age = today.getFullYear() - date.getFullYear();
        const monthDifference = today.getMonth() - date.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < date.getDate())) {
            age--;
        }
        return age;
    }

    // Checks if a given date is a public holiday
    dateIsPublicHoliday(date) {
        const publicHolidays = [
            '2024-01-01', // New Year's Day
            '2024-07-04', // Independence Day
            '2024-12-25', // Christmas Day
        ];
        const dateString = date.toISOString().split('T')[0];
        return publicHolidays.includes(dateString);
    }

    // Determines the current season for a given date
    dateSeason(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        if ((month === 12 && day >= 21) || (month <= 3 && (month < 3 || day < 20))) {
            return 'Winter';
        }
        if ((month === 3 && day >= 20) || (month <= 6 && (month < 6 || day < 21))) {
            return 'Spring';
        }
        if ((month === 6 && day >= 21) || (month <= 9 && (month < 9 || day < 23))) {
            return 'Summer';
        }
        return 'Autumn';
    }

}
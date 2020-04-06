/*
JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

This date and time is the same as the UNIX epoch, which is the predominant base value for 
computer-recorded date and time values.

Date()
    Creates a new Date object.
*/

date = new Date()
console.log(date,typeof date)

//properties

console.log(Date.length)
// The value of Date.length is 7. This is the number of arguments handled by the constructor.

//methods

console.log(Date.now())
// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.

console.log(Date.parse())
// Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.

console.log(Date.UTC())
// Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

//getter

console.log(date.getDate())
// Date.prototype.getDate()
// Returns the day of the month (1–31) for the specified date according to local time.

console.log(date.getDay())
// Date.prototype.getDay()
// Returns the day of the week (0–6) for the specified date according to local time.

console.log(date.getFullYear())
// Date.prototype.getFullYear()
// Returns the year (4 digits for 4-digit years) of the specified date according to local time.

console.log(date.getHours())
// Date.prototype.getHours()
// Returns the hour (0–23) in the specified date according to local time.

console.log(date.getMilliseconds())
// Date.prototype.getMilliseconds()
// Returns the milliseconds (0–999) in the specified date according to local time.

console.log(date.getMinutes())
// Date.prototype.getMinutes()
// Returns the minutes (0–59) in the specified date according to local time.

console.log(date.getMonth())
// Date.prototype.getMonth()
// Returns the month (0–11) in the specified date according to local time.

console.log(date.getSeconds())
// Date.prototype.getSeconds()
// Returns the seconds (0–59) in the specified date according to local time.

// Conversion getter

console.log(date.toDateString())
// Date.prototype.toDateString()
// Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.

console.log(date.toJSON())
// Date.prototype.toJSON()
// Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().

console.log(date.toGMTString())
// Date.prototype.toGMTString()
// Returns a string representing the Date based on the GMT (UTC) time zone. Use toUTCString() instead.

console.log(date.toLocaleDateString())
// Date.prototype.toLocaleDateString()
// Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

console.log(date.toString())
// Date.prototype.toString()
// Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.

console.log(date.toTimeString())
// Date.prototype.toTimeString()
// Returns the "time" portion of the Date as a human-readable string.

console.log(date.toUTCString())
// Date.prototype.toUTCString()
// Converts a date to a string using the UTC timezone.
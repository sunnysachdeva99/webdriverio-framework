/*
The String global object is a constructor for strings or a sequence of characters.

Strings can also be created using the String constructor:

String(thing): 
    thing - Anything to be converted to a string.

Strings are useful for holding data that can be represented in text form. Some of 
the most-used operations on strings are to check their length, to build and 
concatenate them using the + and += string operators, checking for the existence 
or location of substrings with the indexOf() method, or extracting substrings with 
the substring() method.
*/
/*
Character access:
    There are two ways to access an individual character in a string. 
    
    The first is the charAt() method:
*/
console.log('cat'.charAt(1)) // returns "a"

//The other way \is to treat the string as an array-like object,to a numerical index:

console.log('cat'[1]) // returns "a"

//Comparing strings:
let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

//properties

string = String("Hello")
console.log(string.length,typeof string)


//methods

console.log(string.charAt(2))
// Returns the character (exactly one UTF-16 code unit) at the specified index.

console.log(string.concat('world'))
// Combines the text of two (or more) strings and returns a new string.

console.log(string.indexOf('w',0))
// Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

console.log(string.lastIndexOf('l'))
// String.prototype.lastIndexOf(searchValue [, fromIndex])
// Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

console.log(string.match('ld'))
// String.prototype.match(regexp)
// Used to match regular expression regexp against a string.

console.log(string.replace('l','s'))
// String.prototype.replace(searchFor, replaceWith)
// Used to replace occurrences of searchFor using replaceWith.

console.log(string.search('he'))
// String.prototype.search(regexp)
// //Search for a match between a regular expression regexp and the calling string.

console.log(string.slice(0,7))
// String.prototype.slice(beginIndex[, endIndex])
// //Extracts a section of a string and returns a new string.

console.log(string.split('w'))
// String.prototype.split([sep [, limit] ])
// Returns an array of strings populated by splitting the calling string at occurences of the substring sep.

console.log(string.startsWith('h'))
// String.prototype.startsWith(searchString [, length])
// Determines whether the calling string begins with the characters of string searchString.

console.log(string.substr(1,4))
// String.prototype.substr()
// Returns the characters in a string beginning at the specified location through the specified number of characters.

console.log(string.substring(1,4))
// String.prototype.substring(indexStart [, indexEnd])
// Returns a new string containing characters of the calling string from (or between) the specified index (or indeces).

console.log(string.toLowerCase())
// String.prototype.toLowerCase()
// Returns the calling string value converted to lowercase.

console.log(string.toUpperCase())
// String.prototype.toUpperCase()
// Returns the calling string value converted to uppercase.

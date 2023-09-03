function isAlphanumeric(str) {
return str.match(/^[0-9a-zA-Z]+$/) !== null;
}
console.log(isAlphanumeric("abc123"));  // true
console.log(isAlphanumeric("abc!@#"));  // false
console.log(isAlphanumeric("123456"));  // true
console.log(isAlphanumeric(""));  // false


function isAlphanumeric(str) {
    return /^[0-9a-zA-Z]+$/.test(str);
    }
    console.log(isAlphanumeric("abc123"));  // true
    console.log(isAlphanumeric("abc!@#"));  // false
    console.log(isAlphanumeric("123456"));  // true
    console.log(isAlphanumeric(""));  // false
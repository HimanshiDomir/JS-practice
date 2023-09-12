const test = 'a really long string that we want to truncate';

const truncate = (str, end) => {
    if (str.length > end) {
        return `${str.substring(0, end).padEnd(str.length, '.')}`; // or directly add '...'
    }
    return str;
};

console.log(truncate(test, 20));
console.log(test)
// padEnd takes length of resulting substring;
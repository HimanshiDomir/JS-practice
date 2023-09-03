var arr1 = [1, 3, 5, 7, 9];
var arr2 = [1, 2, 4, 5, 7];
var arr3 = [1, 2, 5, 7, 8];
var arr = [arr1, arr2, arr3];

var arr4 = arr.slice();

console.log(arr4.shift().filter(v => arr4.every(a => a.includes(v))));


// *******************reduce function**********************
console.log(arr.reduce((p, c) =>
p.filter(e => c.includes(e))));
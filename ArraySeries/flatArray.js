const arr = [1, 2, [3, 4, [5, 6]]];
// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
      : arr.slice();
};
console.log(flatDeep(arr, Infinity));
// [1, 2, 3, 4, 5, 6]



// if flat without deep value
const arr1 = [1, 2, [3, 4, [5, 6]]];
function flatterArray(arr) {
   const newArray = [];
   // to enable deep level flatten use recursion with reduce and concat
   function flatArray(arr) {

      arr.forEach((val) => Array.isArray(val) ? flatArray(val) : newArray.push(val));

   };
   flatArray(arr);
   return newArray;
}
console.log(flatterArray(arr));
// [1, 2, 3, 4, 5, 6]
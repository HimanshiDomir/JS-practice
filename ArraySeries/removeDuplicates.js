//function to extract the duplicate items from the array
function removeDuplicateItems(array) {
    var result = [];
    var saw= new Map();
    for (let i = 0; i < array.length; i++) {
     if (!saw.has(array[i])) {
       saw.set(array[i], true);
       result.push(array[i]);
     }
    }
    return result;
  }
  
  const array = [11, 21, 21, 31, 41, 41, 51];
  console.log(removeDuplicateItems(array));
//function to extract the duplicate items from the array
function removeDuplicateItems(array) {
    var result = [];
   // var saw= new Map();
    for (let i = 0; i < array.length; i++) {
     if (!result.includes(array[i])) {
       // saw.set(array[i], true);
       result.push(array[i]);
     }
    }
    return result;
  }
  
  const array = [21, 21, 11, 31, 41, 41, 51, 11, 21, 41];
  console.log(removeDuplicateItems(array));



  const arr = [{ key: 1 }, { key: 1 }, { key: 2 }];
  const result = [];
  const map = new Map();

  for (let item of arr) {
    if (!map.has(item.key)) {
      result.push(item);
      map.set(item.key, item);
    }
  }

  console.log(result);
  // remove duplicate iibjects from array




  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 4];

  const result1 = arr1.concat(
    arr2.filter((num) => {
      return !arr1.includes(num);
    })
  );
  console.log(result1);

  // Answer is C) [1, 2, 3, 4] because the above code is to find the union of two arrays
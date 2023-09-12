let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

let a = [1,3,2,7,4,5]

Array.prototype.sort = function(compareFn) {
   return mergeSort(this)
    // Split the array into halves and merge them recursively 
    function mergeSort(arr) {
        if (arr.length === 1) {
            // return once we hit an array with a single item
            return arr
        }
        const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
        const left = arr.slice(0, middle) // items on the left side
        const right = arr.slice(middle) // items on the right side
        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    }
    // compare the arrays item by item and return the concatenated result
    function merge(left, right) {
        let result = []
        let indexLeft = 0
        let indexRight = 0
        while (indexLeft < left.length && indexRight < right.length) {
            let _left = left[indexLeft]
            let _right = right[indexRight]
            if(!compareFn) {
                compareFn = (a,b) => a-b;
            }
            if (composeCompareFn(compareFn(_left, _right))) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }
    function composeCompareFn(compareResult) {
        if (Math.sign(compareResult) == -1)
            return true
        if (Math.sign(compareResult) == 1)
            return false
        if (compareResult == 0)
            return false
    }
}
console.log(employees.sort((a,b) => a.age-b.age));

console.log(a.sort());
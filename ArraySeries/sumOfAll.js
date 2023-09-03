function sum(array) {
    let sum = 0;
    for (element of array){
        sum += element;
    }

    return sum;
}
console.log(sum([1, 2, 3, 4, -11]))
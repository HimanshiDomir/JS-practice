function count(str, substring) {

    return (str.toLowerCase().split(substring.toLowerCase())).length - 1;
}
let myString = "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane gave Mike 1 of her orange so she is now left with only 1 Orange.";
console.log(count(myString, 'orange'));


function countI(str, substring) {
    let i = str.toLowerCase().indexOf(substring.toLowerCase());
    let count = 0;
    while (i !== -1) {
        count++;
        i = str.toLowerCase().indexOf(substring.toLowerCase(), i + 1);
    }
    return count;

}
console.log(countI(myString, 'orange'));
// using recursion
for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
}
function fibonacci(num) {
if(num<2){
    return num;
}
return fibonacci(num-1) + fibonacci(num-2);
}
console.log("Fibonacci(5): " + fibonacci(5)); // 3  ---- 0,1,1,2,3,5,8,13, 21, 34, 55
console.log("Fibonacci(8): " + fibonacci(8)); //  34



// for loop
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        console.log(num1)
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
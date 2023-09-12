const deepCopy = function(input) {
    if(input === null || typeof input !== "object") return input;
const output = Array.isArray(input) ? [] : {};
for(key in input) {
    output[key] = deepCopy(input[key])
}
return output;
}
const c = {a:'him',b:{c:1}};
console.log(deepCopy(c) == c);

// splice, sort and reverse works on orignal array
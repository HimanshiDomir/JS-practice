const isDeepEqual = function(object1, object2) {
const objKeys1 = Object.keys(object1);
const objKeys2 = Object.keys(object2);
if(objKeys1.length !== objKeys2.length) return false;
for(key in objKeys1) {
    const value1 = objKeys1[key];
    const value2 = objKeys2[key];
    const isObjects = isObject(value1) && isObject(value2);
    if((isObjects && !isDeepEqual(value1, value2)) || (!isObjects && value1 !== value2)) return false;
}
return true;
};
const isObject = (object) => {
    return object != null && typeof object === "object";
  };
  
  const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35 
};

const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 34,
};
console.log(isDeepEqual(person1, person2)); //true
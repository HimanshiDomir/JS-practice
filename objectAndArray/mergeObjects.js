// custom function to merge javascript objects
const merge = (...arguments) => {
    let target = {};
    let merger = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                target[prop] = obj[prop];
            }
        }
        return target;
    };
    for (let i = 0; i < arguments.length; i++) {
        merger(arguments[i]);
    }
    return target;
}

console.log(merge({ab:1},{a:2},{c:3}));
// custom function to merge javascript objects
const merge = (...arguments) => {
    let target = {};
    let merger = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                target[prop] = obj[prop];
            }
        }
    };
    for (let i = 0; i < arguments.length; i++) {
        merger(arguments[i]);
    }
    return target;
}
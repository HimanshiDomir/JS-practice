var str = "a a  a   d";

const countChars = str =>{
    const rs = {}
    for (let word of str) {
        if (word !== " ") rs[word] = rs[word] + 1|| 1;
    }
    return rs;
}
console.log(countChars(str));


// **************************inludes space**************************

let txt = "a a  a   d";
let txtArr = txt.split('');
let objCnt = txtArr.reduce((accum, currVal) => {
    accum[currVal] = (accum[currVal] || 0) + 1;
    return accum;
}, {});
console.log(objCnt);
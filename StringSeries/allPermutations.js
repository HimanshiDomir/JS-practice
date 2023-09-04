function permute(str, l, r) {
    if (l == r)
        console.log(str,'inside');
    else {
        for (let i = l; i <= r; i++) {
            console.log(i,l,r)
            str = swap(str, l, i);
            console.log(str)
            permute(str, l + 1, r);
            console.log(str,l,r)
            str = swap(str, l, i);
        }
    }
}

function swap(a, i, j) {
    let charArray = a.split("");
    [charArray[j], charArray[i]] = [charArray[i], charArray[j]];
    console.log(charArray)
    return (charArray).join("");
}

let str = "ABC";
let n = str.length;
permute(str, 0, n - 1);
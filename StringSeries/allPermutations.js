function permute(str, l, r) {
    if (l == r)
        console.log(str);
    else {
        for (let i = l; i <= r; i++) {
            console.log(i,l,r)
            str = swap(str, l, i);
            permute(str, l + 1, r);
            str = swap(str, l, i);
        }
    }
}

function swap(a, i, j) {
    let charArray = a.split("");
    [charArray[j], charArray[i]] = [charArray[i], charArray[j]];
    return (charArray).join("");
}

let str = "ABC";
let n = str.length;
permute(str, 0, n - 1);
function capitalize(string) {
    if (string.length < 0) return;
    let str = string.split(' ');
    str.forEach((s, i) => {
        str[i] = s.charAt(0).toUpperCase() + s.slice(1);
    });
    return str.join(' ');
}

console.log(capitalize('i am a good girl'));
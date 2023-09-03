/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * array.length);
       // var temp = array[i];
        // array[i] = array[j];
        // array[j] = temp;
        [array[j], array[i]]= [array[i], array[j]]
    }
    return array;
}
console.log(shuffleArray([1,2,3,4]));
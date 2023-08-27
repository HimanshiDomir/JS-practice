function reverseString(sentence, left, right) {
    if (!sentence || sentence.length < 2) return
    while (left < right) {
        console.log(left,right)
        let temp = sentence[left]
        sentence = sentence.substr(0, left) + sentence[right] + sentence.substr(left+1)
        console.log(sentence);
        sentence = sentence.substr(0, right) + temp + sentence.substr(right+1)
        console.log(sentence);
        
        left++
        right--
    }
    return sentence
}

function reverseWords(sentence) {
    let left = 0
    let right = 0
    sentence = sentence.split('').reverse().join('')
    console.log(sentence);
    while (true) {
        while(sentence[left] === ' ') left++
        console.log('left',left);
        if (left >= sentence.length) break
        right = left + 1
        while (right < sentence.length && sentence[right] != ' ') right++
        sentence = reverseString(sentence, left, right-1)
        left = right
    }
    return sentence
}

let sentence = "I love javascript";
console.log(sentence);
console.log(reverseWords(sentence));
// javascript love I
/**
 * Time Complexity O(N)
 * Space Complexity O(1)
 */



const str = "I love javascript";

  function foo(str) {
    if (str.length < 2) {
      return str;
    }

    return foo(str.slice(1)) + str[0];
  }

  const result = foo(str);
  console.log(result);
  //tpircsavaj evol I
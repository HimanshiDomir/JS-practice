/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * check if the length of both string is equal or not. if not return false
 * iterate through first string and maintain the count of each char in map
 * iterate through second string and check if map has that character. 
 * if yes then decrement the count and if count is zero remove that char from map
 * if that char is not present in map return false
 * check the sizze of map should be zero at the end than return true
 * TC: O(N) nd SC: O(N)
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const map = new Map()
  for (const c of s) {
      if (map.has(c)) map.set(c, map.get(c) + 1)
      else map.set(c, 1)
  }

  for (const c of t) {
      if (!map.has(c)) return false
      map.set(c, map.get(c) - 1)
      if (map.get(c) === 0) map.delete(c)
  }
  if (map.size > 0) return false
  return true
};

console.log(isAnagram('anagram','nagaram'));

 var isValid = function(s1,s2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
  };

console.log(isValid('anagram','nagaaram'));
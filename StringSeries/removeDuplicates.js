function removeDup(str) {
    let set = new Set();
    let ans = "";
    for(x of str){
      if(x === " ") {
        if(ans[ans.length-1] === " ") continue
        ans += " "
      }
      else if(set.has(x)) {
        continue
      }
      else {
        ans += x;
        set.add(x);
      }
    }
    return ans
  }
  console.log(removeDup('the quick brown fox jumps over the lazy dog'));
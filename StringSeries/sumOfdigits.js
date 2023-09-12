const num = 5431;

  function addition(num) {
    let sum = 0;
    while (num !== 0) {
      let rem = num % 10;
      sum += rem;
      num = parseInt(num / 10);
    }
    return sum;
  }

  const res = addition(num);

  console.log(res);



  
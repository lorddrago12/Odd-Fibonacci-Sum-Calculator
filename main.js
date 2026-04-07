function sumFibs(num) {
  let sum = 0;
  let prev = 0, curr = 1;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    [prev, curr] = [curr, prev + curr];
  }

  return sum;
}

console.log(sumFibs(1000)); // 1785

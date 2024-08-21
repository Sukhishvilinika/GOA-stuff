function sumEvenNumbers(maxvalue) {
  let sum = 0;
  for (let i = 0; i <= maxvalue; i += 2) sum += i;
  return sum;
}
console.log(sumEvenNumbers());
console.log(sumEvenNumbers(20));

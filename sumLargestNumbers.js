const sumLargestNumbers = function(data) {
  const arr = data.sort(function(a, b){return b-a});
  const size = 2;
  let sum = arr.slice(0, size);
  return (sum[0] + sum[1]);
  };

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
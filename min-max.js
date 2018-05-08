'use strict';

function min(numbers) {
  let min = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < min) {
      min = numbers[i]; 
    }
    i++;
  }
  return min;
}

function max(numbers) {
  let max = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    i++
  }
  return max;
}

const arr = [1, 25, 63, 13, 100];
console.log(min(arr));
console.log(max(arr));

let sum = 0;
arr.forEach(function(num) {
  sum += num;
});

console.log(sum / arr.length);


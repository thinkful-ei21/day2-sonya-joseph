'use strict';

function repeat(fn, n) {
  let i;
  for (i = 0; i < n; i++) {
    fn();
  }
}
function hello() {
  console.log(`Hello world`);
}

function goodbye() {
  console.log(`Goodbye world`);
}

// repeat(hello, 5);
// repeat(goodbye, 5);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   console.log('Testing', name);
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Watch for flash flooding');
const fireWarning = hazardWarningCreator('Fire!');

// rocksWarning('Loganberry Dr');
// floodWarning('your house');
// fireWarning('the roof');
// fireWarning('Main St.');

let steps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const result = steps.filter(step => !(step[0] < 0 || step[1] < 0));

let stepCount = steps.map(step => (Math.abs(step[0]) + Math.abs(step[1])));

// console.log(result);
// console.log(stepCount);
// steps.forEach(step => console.log((Math.abs(step[0]) + Math.abs(step[1]))));

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let arr = input.split(' ');
let initialValue = '';

let decode = function(accumulator, word) {
  if (word.length === 3) {
  return accumulator + ' ';
} else {
  return accumulator + word[word.length-1].toUpperCase();
}
}

let finalWord = arr.reduce(decode, initialValue);

console.log(finalWord);
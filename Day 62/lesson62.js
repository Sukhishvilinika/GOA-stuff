// 1. Sum of Even Numbers in an Array
const numbers = [];
for (let i = 0; i <= 100; i++) {
  numbers.push(i);
}

let sumOfEvens = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumOfEvens += numbers[i];
  }
}

console.log("Sum of even numbers:", sumOfEvens);

// 2. Access Element at Non-existent Index
const array = [1, 2, 3, 4, 5];
console.log(array[10]); // Undefined, since index 10 does not exist in the array

// 3. Array Methods Examples
// push
const arrPush = [1, 2, 3];
arrPush.push(4); // Adds 4 to the end of the array
console.log(arrPush); // [1, 2, 3, 4]

// pop
const arrPop = [1, 2, 3, 4];
arrPop.pop(); // Removes the last element (4)
console.log(arrPop); // [1, 2, 3]

// unshift
const arrUnshift = [2, 3, 4];
arrUnshift.unshift(1); // Adds 1 to the beginning of the array
console.log(arrUnshift); // [1, 2, 3, 4]

// shift
const arrShift = [1, 2, 3, 4];
arrShift.shift(); // Removes the first element (1)
console.log(arrShift); // [2, 3, 4]

// slice
const arrSlice = [1, 2, 3, 4, 5];
const slicedArr = arrSlice.slice(1, 4); // Extracts elements from index 1 to 3
console.log(slicedArr); // [2, 3, 4]

// splice
const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(2, 2, 'a', 'b'); // Removes 2 elements starting at index 2, then adds 'a' and 'b'
console.log(arrSplice); // [1, 2, 'a', 'b', 5]

// 4. Manual Slice Function
function manualSlice(array, startIndex, endIndex) {
  const slicedArray = [];
  for (let i = startIndex; i < endIndex; i++) {
    if (i < array.length) {
      slicedArray.push(array[i]);
    }
  }
  return slicedArray;
}

const originalArray = [1, 2, 3, 4, 5];
console.log(manualSlice(originalArray, 1, 4)); // [2, 3, 4]

// 5. Manual Reverse Function
function manualReverse(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

const arrToReverse = [1, 2, 3, 4, 5];
console.log(manualReverse(arrToReverse)); // [5, 4, 3, 2, 1]

// 6. Manual IndexOf Function
function manualIndexOf(array, pointer) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === pointer) {
      return i;
    }
  }
  return -1;
}

const list = [10, 20, 30, 40, 50];
console.log(manualIndexOf(list, 30)); // 2
console.log(manualIndexOf(list, 60)); // -1

// 7. Array Method Examples
// indexOf
const arrIndexOf = [1, 2, 3, 2, 1];
console.log(arrIndexOf.indexOf(2)); // 1 (First occurrence of 2)

// lastIndexOf
const arrLastIndexOf = [1, 2, 3, 2, 1];
console.log(arrLastIndexOf.lastIndexOf(2)); // 3 (Last occurrence of 2)

// sort
const arrSort = [4, 2, 5, 1, 3];
arrSort.sort(); // Sorts elements as strings
console.log(arrSort); // [1, 2, 3, 4, 5]

// reverse
const arrReverse = [1, 2, 3, 4, 5];
arrReverse.reverse(); // Reverses the order of elements
console.log(arrReverse); // [5, 4, 3, 2, 1]

let array = [1, 2, 3];

console.log(array.shift(), array); // 제거된 요소 반환.

array = [1, 2, 3];

console.log(array.unshift(4, 5), array); // 길이 반환.

array = [];
array.push([7]);
console.log(array);

array = [1, 2, 3, 4, 5];
console.log(...array);
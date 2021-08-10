const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const x of arr) {
  console.log(x); // 1 3 5 7 9
  if (x % 2 != 0) arr.shift();
}
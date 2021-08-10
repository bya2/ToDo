const findDivisor = integer => {
  const arr = [];

  for (let i=1; i<=integer/2; i++) {
    if(integer % i === 0) arr.push(i);
  }

  arr.push(integer);

  return arr;
}

console.log(findDivisor(8));
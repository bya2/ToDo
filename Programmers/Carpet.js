const solution = (brown, yellow) => {
  const answer = 0;

  // 가로 x 세로 = ALL
  const all = brown + yellow;

  // 약수
  const divisors = findDivisor(all),
        divisors_len = divisors.length;
  
  if (divisors_len === 1) return [divisors[0], divisors[0]];
  else if (divisors_len === 2) return [divisors[1], divisors[0]];
  else {
    // 두 변의 길이에서 각각 2씩 빼서 곱한 결과가 yellow인 길이
    const oneSide = divisors.find(e => {
      const temp = all/e;
      if ((temp - 2) * (e - 2) === yellow) return true;
      else false;
    })
    return [all/oneSide, oneSide];
  }
  
  

  return divisors;
}

// 약수 찾기(1, 2, 마지막 값이 integer의 반이면 제외)
const findDivisor = integer => {
  const arr = [];

  for (let i=3; i<=integer/2; i++) {
    if(integer % i === 0) arr.push(i);
  }

  if (integer % 2 === 0 && arr[arr.length - 1] * 2 === integer) arr.pop();

  return arr;
}

console.log(
  solution(10, 2), // [4, 3]
  solution(8, 1), // [3, 3]
  solution(24, 24) // [8, 6]
);
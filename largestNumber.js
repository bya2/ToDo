const solution = numbers => {
  const answer = numbers.map(x => x + '').sort((a, b) => (b + a) - (a + b)).join('');
  return answer[0] === '0' ? '0' : answer;
}

const solution2 = numbers => {
  const answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}

const solution3 = numbers => {
  const answer = numbers.sort((a, b) => (b + '' + a)*1 - (a + '' + b)*1).join('');
  return answer[0] === '0' ? '0' : answer;
}

// 0을 포함한 정수의 앞의 자리가 큰 순서대로 정렬해야함.
// 2자리 수와 1자리 수의 앞의 자리 수가 같을 경우, 일의 자리가 큰 쪽이 앞 순서.
// 정렬된 배열을 문자로 연결 후, 정수로 변환.

const numbersList = [[6, 10, 2], [3, 30, 34, 5, 9]];
for (const numbers of numbersList) console.log(solution2(numbers)); // "6210", "9534330"
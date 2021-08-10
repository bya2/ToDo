// Level 1

const solution = (n, lost, reserve) => {
  let answer = n - lost.length;

  let l, r, diff, i = 30;

  while (i--) {
    l = lost[0];
    r = reserve[0];
    if (!l || !r) return answer;

    diff = l - r;

    // r가 l보다 큰 데 diff가 2 이상이라면,
    if (diff > 1) reserve.shift();
    else if (diff < -1) lost.shift();
    else {
      if (diff === -1 || diff === 1) {
        reserve.shift();
        lost.shift();
        answer += 1;
      }
    }
  }
}

// lost의 요소 +-1을 reserve에서 찾는다.
// reserver의 요소 +-1울 lost에서 찾는다.

console.log(
  solution(5, [2, 4], [1, 3, 5]), // 5
  solution(5, [2, 4], [3]), // 4
  solution(3, [3], [1]) // 2
);
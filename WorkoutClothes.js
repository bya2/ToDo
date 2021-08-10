const solution = (n, lost, reserve) => {
  const realLost = lost.filter(x => !reserve.includes(x));
  const realReserve = reserve.filter(x => !lost.includes(x));

  let answer = n - lost.length;

  for (const r of realReserve) {
    const l = realLost[0];
    if (!l) break;

    if (Math.abs(r - l) === 1) {
      realLost.shift();
      answer++;
    }
  }

  return answer;
}

// lost의 요소 +-1을 reserve에서 찾는다.
// reserver의 요소 +-1울 lost에서 찾는다.

console.log(
  solution(5, [2, 4], [1, 3, 5]), // 5
  solution(5, [2, 4], [3]), // 4
  solution(3, [3], [1]) // 2
);
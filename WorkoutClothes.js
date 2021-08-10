const solution = (n, lost, reserve) => {
  // 여벌의 체육복을 가지고 있었으나 도난당한 학생을 구분
  // 체육복이 2개인 학생들
  const realReserve = reserve.filter(e => !lost.includes(e));

  // 도난당한 학생 중 여벌의 체육복을 가지고 있어서 일단 체육복을 가지고 있는 학생들을 구분
  // 체육복을 가지고 있지 않은 학생들
  const noClothes = lost.filter(e => !reserve.includes(e));

  // 전체 학생의 수에서 체육복을 가지고 있지 않은 학생들 제외
  let answer = n - noClothes.length;

  let i = n;
  while (i--) {
    const no = noClothes[0];
    const r = realReserve[0];
    if (!no || !r) break;

    // 빌려주는 학생의 체격이 1보다 작을 때
    if (no - r > 1) realReserve.shift(); 

    // 빌려주는 학생의 체격이 1보다 클 때
    if (no - r < -1) noClothes.shift();

    // 둘의 체격차가 1일 때
    if (Math.abs(no - r) === 1) {
      noClothes.shift();
      realReserve.shift();
      answer++;
    }
  }

  return answer;
}

// 여벌의 체육복을 가지고 있었으나 도난당한 학생을 구분
// 체육복을 가지고 있지 않은 학생을 구분

console.log(
  solution(5, [2, 4], [1, 3, 5]), // 5
  solution(5, [2, 4], [3]), // 4
  solution(3, [3], [1]) // 2
);
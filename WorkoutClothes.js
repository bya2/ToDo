


const solutionPrevious2 = (n, lost, reserve) => {
  // 도난당한 학생 중 여벌의 체육복을 가지고 있어서 일단 체육복을 가지고 있는 학생들을 구분
  // 여벌의 체육복을 가지고 있었으나 도난당한 학생을 구분
  const noClothes = lost.filter(e => !reserve.includes(e)); // 체육복을 가지고 있지 않은 학생들
  let isReserve = reserve.filter(e => !lost.includes(e)); // 체육복이 2개인 학생들

  const answer = n - noClothes.filter(noC => {
    const rIdx = isReserve.findIndex(e => Math.abs(e - noC) === 1);
    if (rIdx === -1) return true;
    isReserve.splice(rIdx, 1);
  }).length;

  return answer;
}


const solutionPrevious1 = (n, lost, reserve) => {
  // 여벌의 체육복을 가지고 있었으나 도난당한 학생을 구분
  // 체육복이 2개인 학생들
  let realReserve = reserve.filter(e => !lost.includes(e));

  // 도난당한 학생 중 여벌의 체육복을 가지고 있어서 일단 체육복을 가지고 있는 학생들을 구분
  // 체육복을 가지고 있지 않은 학생들
  const noClothes = lost.filter(e => !reserve.includes(e));

  for (const no of noClothes) {
    const isR = realReserve.find(r => Math.abs(no - r) === 1);
  }

  // 전체 학생의 수에서 체육복을 가지고 있지 않은 학생들 제외
  let skip = 0;

  const answer = n - noClothes.filter(no => {
    if (skip) return true;

    // 체격차가 1인 학생 한 명
    const isR = realReserve.find(r => Math.abs(no - r) === 1);
    
    // 체격차가 1이 아니라면 noClothes 배열에 남김
    if (!isR) {
      skip = 1;
      return true;
    }

    // 체격차가 1인 학생이 있을 경우 여벌의 체육복을 가진 학생 목록에서 제외
    realReserve = realReserve.filter(r => r !== isR);
  }).length; // 끝으로 체육복을 가지고 있지 않은 학생의 수

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
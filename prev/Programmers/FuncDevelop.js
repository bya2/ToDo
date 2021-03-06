const solution1 = (progresses, speeds) => {
  let num,
      temp,
      count = 1,
      result = [];

  for (let i=0; i<progresses.length; i++) {
    /**
     * 직관적으로 계산할 수 있게 변환.
     */
    num = Math.ceil((100-progresses[i]) / speeds[i]);

    /**
     * 다음 인덱스의 숫자보다 클 경우 카운트 증가, 작을 경우 배포 완료 및 카운트 초기화
     */
    if (temp) {
      if (temp >= num) count++;
      else {
        result.push(count);
        temp = num;
        count = 1;
      }
    } else {
      temp = num;
    }
  }
  result.push(count);

  return result;
}

const solution2 = (progresses, speeds) => {
  let result = [0];

  /**
   * 직관적으로 계산할 수 있게 변환.
   */
  const days = progresses.map((progress, i) => Math.ceil((100-progress) / speeds[i]));
  let temp = days[0];

  /**
   * 다음 인덱스의 숫자보다 클 경우 카운트 증가, 작을 경우 배포 완료 및 카운트 초기화
   */
  for (let i=0, j=0; i<days.length; i++) {
    if (temp >= days[i]) result[j]++;
    else {
      temp = days[i];
      result[++j] = 1;
    }
  }

  return result;
}

const solution3 = (progresses, speeds) => {
  let result = [];

  while (progresses.length > 0) {
    /**
     * 개발
     */
    for (let i in speeds) {
      if (progresses[i] < 100) progresses[i] += speeds[i];
    }

    /**
     * 개발 진행이 완료된 것 배포
     */
    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) result.push(count);
  }

  return result;
}

const solution = (progresses, speeds) => {
  /**
   * 직관적으로 계산할 수 있게 변환.
   */
  const days = progresses.map((progress, i) => Math.ceil((100-progress) / speeds[i]));

  /**
   * 다음 인덱스의 숫자보다 클 경우 카운트 증가, 작을 경우 해당 개발 배포 완료
   */
  const result = days.reduce((acc, cur, i) => {
    let temp = acc[acc.length - 1];
    if (i > 0 && cur <= temp[0]) temp.push(cur);
    else acc.push([cur]);
    return acc;
  }, []);

  /**
   * 길이를 통해 배포 갯수 확인
   */
  return result.map(x => x.length);
}

let progresses = [93, 30, 55],
    speeds = [1, 30, 5];

console.log('1. ', solution(progresses, speeds)); // Ans: [2, 1]

progresses = [95, 90, 99, 99, 80, 99];
speeds = [1, 1, 1, 1, 1, 1];

console.log('2. ', solution(progresses, speeds)); // Ans: [1, 3, 2]
const solution = (progresses, speeds) => {
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

let progresses = [93, 30, 55],
    speeds = [1, 30, 5];

console.log('1. ', solution(progresses, speeds)); // Ans: [2, 1]

progresses = [95, 90, 99, 99, 80, 99];
speeds = [1, 1, 1, 1, 1, 1];

console.log('2. ', solution(progresses, speeds)); // Ans: [1, 3, 2]
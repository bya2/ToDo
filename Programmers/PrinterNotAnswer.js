  /**
   * 자신보다 큰 정수가 몇 개인지,
   * 자신보다 큰 정수 중 가장 순서가 빠른 정수의 뒷 순서에 같은 정수가 몇 개인지,
   * 둘의 합 + 1이 location이 인쇄되는 순서.
   * 
   * --추가 고려사항--
   * 자기 자신이 가장 큰 정수인 경우,
   * 가장 큰 정수이면서, 더 순서가 빠른 정수가 있는 경우
   */
  /**
   * 해당 위치의 정수보다 큰 첫번째 정수의 위치를 찾고, 크거나 같은 크기의 정수의 개수를 구함.
   * 그러나 첫번째 큰 정수가 해당 위치보다 더 빠르고, 해당 위치 이후에 같은 크기의 정수가 있음을 고려하지 못했음.
   */

const solution0_1 = (priorities, location) => {
  const req = priorities[location];
  let bigIdx,
      count = 0,
      maxValue = Math.max(...priorities);

  /**
   * 해당 위치가 가장 큰 정수 고려.
   */
  if (req == maxValue) {
    /**
     * 가장 큰 정수가 여러 개일 경우 고려.
     */
    for (let i=0; i<=location; i++) {
      if (priorities[i] == maxValue) count++;
    }
    return count;
  }
}

// 틀림
const solution0_2 = (priorities, location) => {
  const reqDoc = priorities[location],
        maxValue = Math.max(...priorities);

  console.log(reqDoc, maxValue);

  let count = 0,
      tempLoc;

  if (reqDoc == maxValue) {
    for (let i=0; i<=location; i++) {
      if (priorities[i] == maxValue) count++;
    }
    return count++;
  }

  if (location > 0) {
    for (let i=0; i<location; i++) {
      if (reqDoc <= priorities[i]) count++;
    }
  }
  console.log('previous:', count);

  for (let i=location; i<priorities.length; i++) {
    if (reqDoc < priorities[i]) {
      tempLoc = i;
      break;
    }
  }
  console.log(tempLoc, priorities[tempLoc]);

  if (tempLoc) {
    for (let i=tempLoc; i<priorities.length; i++) {
      if (reqDoc <= priorities[i]) count++;
    }
  }
  console.log(count);
  
  return count + 1;
}

const solution0_3 = (priorities, location) => {
  let temp,
      count = 0,
      loc = 0,
      maxValue = Math.max(...priorities);

  const req = priorities[location];
  
  let i = 10;
  while (i--) {
    // 문서 J를 대기목록에서 꺼냄.
    temp = priorities.shift();

    // console.log(temp, priorities);

    /**
     * J가 중요도가 가장 높다면 인쇄, 아니면 대기목록 마지막으로 이동.
     * 인쇄: 배열의 최댓값 초기화, 인쇄 갯수 증가, 배열의 길이만큼 위치값 변경.
     * 대기목록 마지막으로 이동: 배열 뒤로 푸쉬, 로케이션 값 하락.
     */
    if (temp != maxValue) {
      priorities.push(temp);
      if (location == 0) location += priorities.length;
    }
    else {
      maxValue = Math.max(...priorities);
      console.log(priorities[location], maxValue);
      if (temp == maxValue) return ++count;
      count++;
    }
    location--;
    console.log(temp, priorities, location);
  }

  return 1;
}

const solution0_4 = (priorities, location) => {
  let J,
      count = 0,
      maxValue = Math.max(...priorities);
  console.log(location);
  while (location--) {
    // 대기목록의 문서 J 추출.
    J = priorities.shift();

    // 우선순위에 따라 인쇄 혹은 후열로 이동.
    if (J == maxValue) {
      // 인쇄
      // 인쇄된 수 증가, 최댓값 초기화.
      count++;
      maxValue = Math.max(...priorities);
    } else {
      // 후열로 이동
      // 해당 문서 후열로 이동, 특정 요소가 인쇄될 차례에 최댓값이 아니라면 후열로 이동과 동시에 인덱스 가리키기.
      priorities.push(J);
      if (location == 0) location += priorities.length;
    }

    console.log(J, priorities, 'max:', maxValue, 'loc:', location, 'cnt:', count);

    // 특정 요소가 최댓값이고, 인쇄될 차례라면 카운트 반환.
    if (J == maxValue && location == priorities.length) return count;
  }
}


const solution0_5 = (priorities, location) => {
  let J = priorities.shift(),
      count = 0,
      max = Math.max(...priorities);

  while (location--) {
    console.log(J, priorities, '[ max:', max, 'loc:', location, 'cnt:', count, ']', priorities.length);
    
    if (J == max) {
      count++;
      if (location == priorities.length) return count;
      if (!location) return ++count;
      max = Math.max(...priorities);
    } else {
      priorities.push(J);
      if (location == 0) location += priorities.length;
    }

    J = priorities.shift();
  }
}

const solution = (priorities, location) => {
  let J = priorities.shift(),
      count = 0,
      max = Math.max(...priorities),
      isJ = 0;
  
  while (1) {
    if (isJ) {
      location += priorities.length;
      isJ--;
    }

    if (J != max && location == 0) isJ++;

    location--;

    console.log(J, priorities, '[ max:', max, 'loc:', location, 'cnt:', count, ']', priorities.length);
    if (J == max) {
      count++;
      if (location == -1) return count;
      max = Math.max(...priorities);
    } else {
      priorities.push(J);
    }

    J = priorities.shift();
  }
}

let priorities = [2, 1, 3, 2],
    location = 0;

console.log('***Ans.', solution(priorities, location), '\n\n'); // Ans: 1

priorities = [1, 1, 9, 1, 1, 1];
location = 1;

console.log('***Ans.', solution(priorities, location)); // Ans: 5
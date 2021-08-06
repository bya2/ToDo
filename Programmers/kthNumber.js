const solution = (array, commands) => {
  const answer = [];

  for (const c of commands) {
    const arrSliced = array.slice(c[0]-1, c[1]);
    answer.push(arrSliced.sort()[c[2]-1 || arrSliced.length - 1])
  }

  return answer;
}


const array = [1, 5, 2, 6, 3, 7, 4],
      commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands)); // [5, 6, 3]
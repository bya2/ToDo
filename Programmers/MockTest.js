const solution = answers => {
  const result = [],
        abdicants = [[1, 2, 3, 4, 5],
                     [2, 1, 2, 3, 2, 4, 2, 5],
                     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

  const arr = [];
  for (const abdicant of abdicants) {
    arr.push(answers.filter((x, i) => x === abdicant[i % abdicant.length]).length);
  }
  const max = Math.max(...arr);

  for (let i=0; i<arr.length; i++) {
    if (arr[i] === max) result.push(i+1);
  }

  return result;
}

const solution1 = answers => {
  // 수포자들
  const abdicants = [[1, 2, 3, 4, 5],
                     [2, 1, 2, 3, 2, 4, 2, 5],
                     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

  const cycles = [],
        counts = [];

  const answers_len = answers.length;
  
  for (const abdicant of abdicants) {
    const abdicant_len = abdicant.length;

    // 답을 매기는 데 필요한 최소한의 사이클
    let cycle = abdicant_len % answers_len === 0 ? abdicant_len / answers_len : abdicant_len;
    cycles.push(cycle);

    // 배열 비교
    let start = 0,
        end = answers_len - 1,
        count = 0;

    while (cycle--) {
      if (start === abdicant_len) start = 0;
      if (end === abdicant_len) end = 0;

      let j = 0;

      for (let i=0; i<answers_len; i++) {
        if (j === abdicant_len) j = 0;
        if (answers[i] === abdicant[j]) count++;
        j++;
      }

      start++;
      end++;
    }
    
    counts.push(count);
  }

  const lcm_counts = counts.map((x, i) => x / cycles[i]);
  const max_counts = Math.max(...lcm_counts);
  const result = [];

  for (let i=0; i<lcm_counts.length; i++) {
    if (lcm_counts[i] === max_counts) result.push(i+1);
  }

  return result;
}
// 문제가 10000개이므로, 최소한의 동작을 위해서 수포자의 답지와 답안지가 서로 매치되도록 함
// 수포자의 답지와 답안지가 같은 지 배열 비교(*어려움)

const arr_list = [[1,2,3,4,5],	// [1]
                  [1,3,2,4,2]];	// [1,2,3]

for (const answers of arr_list) console.log(solution(answers));
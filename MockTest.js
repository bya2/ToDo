const solution = answers => {
  const abdicants = [[1, 2, 3, 4, 5],
                     [2, 1, 2, 3, 2, 4, 2, 5],
                     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

  const cycles = [];

  const answers_len = answers.length;
  
  for (const abdicant of abdicants) {
    const abdicant_len = abdicant.length;
    const cycle = abdicant_len % answers_len === 0 ? abdicant_len / answers_len : abdicant_len;
    cycles.push(cycle);

    let start = 0, end = answers_len - 1;

    while (cycle--) {
      if (start === answers_len) start = 0;
      if (end === answer_len) end = 0;
    }
  }
                       
}

const arr_list = [[1,2,3,4,5],	// [1]
                  [1,3,2,4,2]];	// [1,2,3]

for (const answers of arr_list) console.log(solution(answers));      

              
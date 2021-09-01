const solution = name => {
  let answer = 0;

  const len = name.length;

  const position = [];
  for (let i=0; i<len; i++) {
    if (name[i] !== 'A') position.push(i);
  }
  const temp = [...position]

  let cursor;
  if (position[0] !== 0) {
    console.log(position[0], len - position[position.length - 1])
    cursor = position[0] < len - position[position.length - 1] ? position[0] : position[position.length - 1];
    answer = position[0] < len - position[position.length - 1] ? position[0] : len - position[position.length - 1];
  } else {
    cursor = 0;
  }

  // let cursor = 0;
  // while (1) {
  //   if (name[cursor] === 'A') {

  //   }
  // }

  return { len, position, cursor, answer };

  const A = 'A'.charCodeAt(0),
        Z = 'Z'.charCodeAt(0),
        num = Z - A;

  console.log({answer});
  for (const char of name) {
    const code = char.charCodeAt(0);
    const move = code - A <= 13 ? code - A : Z - code + 1
    answer += move;
  }

  return answer;
}


const names = ["AAAAAJEROENA", "JANAAAABSAAAR"];
names.forEach(e => console.log(solution(e))); // 56, 23


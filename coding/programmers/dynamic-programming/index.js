function solution(N, number) {
  if (N < 1 || N > 9) throw Error("ERR: N");
  if (number < 1 || number > 32000) throw Error("ERR: number");

  try {
    // if (result__num > 8) return -1
    // let number_ciphers__num = number.toString().split("").length;
    // let n__N = parseInt(Array(number_ciphers__num).fill(N).join(""));
    // const multiplied_num = N * number;
    // const number_ciphers__num = number.toString().split("").length;

    return (sets__arr_fill = Array(8)
      .fill()
      .map((set, i) => new Set([parseInt(N.toString().repeat(i + 1))])));
  } catch (err) {
    console.error(err);
  }
}

const inputs__arr_elems = [
  {
    N: 5,
    number: 12,
    answer: 4,
  },
  {
    N: 2,
    number: 11,
    answer: 3,
  },
];

for (const obj_input of inputs__arr_elems) {
  const { N, number, answer } = obj_input;
  const result__num = solution(N, number);
  console.log(
    result__num,
    answer !== undefined ? result__num === answer : null
  );
}

console.log(Array.from(Array(9), () => new Set()));

// Array.from
// String.prototype.repeat
// Set.prototype.has()

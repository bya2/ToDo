const solution = numbers => {
  const result = new Set();

  // 문자열 분해
  const chars = numbers.split('');

  // 문자 조합
  const getNumber = (chars, curr) => {
    const chars_len = chars.length;
    
    if (chars_len) {
      for (let i=0; i<chars_len; i++) {
        const temp = [...chars];
        console.log(`temp: ${temp}, chars: ${chars}, ...chars: ${[...chars]}`);
        temp.splice(i, 1);
        const parseValue = parseInt(curr + chars[i]);
        if (isPrime(parseValue)) {
          result.add(parseValue);
        }

        getNumber(temp, curr + chars[i]);
      }
    }
  }

  // 소수 확인
  const isPrime = num => {
    if (num < 2 ) return false;
    if (num === 2) return true;
    for (let i=2; i<=Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  getNumber(chars, '');
  

  return result.size;
}

const arr = ['17', '011'];

for (const num of arr) {
  const answer = solution(num);
  console.log(answer);
}
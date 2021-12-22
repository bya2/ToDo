// 피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max };
      },
    };
  },
};

for (const num of fibonacci) console.log(num);
console.log([...fibonacci]);

// 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
const fibonacciFunc = (max) => {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max };
        },
      };
    },
  };
};

for (const num of fibonacciFunc(10)) console.log(num);
console.log([...fibonacciFunc(10)]);
console.log(fibonacciFunc(10));

// 이터레이터면서 이터러블
const fibonacciFunc2 = (max) => {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      console.log("ok", this);
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur, done: cur >= max };
    },
  };
};

for (const num of fibonacciFunc2(10)) console.log(num);
console.log([...fibonacciFunc2(10)]);
console.log(fibonacciFunc2(10));

/*
 * 이터러블은 지연 평가를 통해 데이터를 생성.
 * 데이터가 필요한 시점 이전까지는 미리 데이터를 생성하지 않다가 데이터가 필요한 시점이 되면 그때야 비로소 데이터를 생성하는 기법.
 *
 * 1. 불필요한 데이터를 미리 생성하지 않고,
 * 2. 필요한 데이터를 필요한 순간에 생성,
 * 3. 빠른 실행 속도를 기대 가능,
 * 4. 불필요한 메모리를 소비하지 않음,
 * 5. 이에 따라 무한도 표현 가능.
 */

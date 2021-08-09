# 코딩 테스트 연습 노트

### 0729
기능 개발(프로그래머스)
  먼저, 직관적으로 계산할 수 있도록 변환할 것.
  함수 이용: map(), shift(), reduce()
  그 외 알게된 것: .push(), .unshift(), .pop(), .shift()

  reduce()는 배열을 이용할 경우 push, pop을 잘 사용해야한다.



### 0806

> 객체의 언박싱에 대해서 알고 있었지만, 배열의 언박싱에 대해선 모르고 있었음.
```js
// Unboxing

const command = [5, 6, 3];
const [a, b, c] = command; // a=5, b=6, c=3
```

> 자바스크립트의 정렬
```js
// Sort

arr.sort(); // string
arr.sort((x, y) => x - y); // number
```

JS Array Methods  
첫 번째 인자값은 currentValue   
두 번재 인자값은 index,  
세 번째 인자값은 array

> 문자열 만드는 법
```js
// Convert string

1. arr.map(x => x + '')
2. `${a}${b}`
3. (a + '' + b)*1
```

> 문자열화한 숫자 배열 정렬 방법
```js
// ASC

arr.sort((a, b) => (a + b) - (b + a));
```
```js
// DESC

arr.sort((a, b) => (b + a) - (a + b));
```

### 0809

> 'for in' 문법에서 인덱스는 문자열.
```js
for (const i in arr) {
  ... // i: string
}
```

> 서로 길이가 다른 배열의 각 요소를 사이클로 돌면서 비교하는 방법

```js
// There are arr1 and arr2.
// Loop according to arr2.
// Use 'a%b'.

arr1.filter((x, i) => x === arr2[i % arr2.length])
arr1.filter((x, i) => x === arr2[i % arr2.length]).length
```

> 소수 확인
```js
const isPrime = num => {
  if (num < 2 ) return false;
  if (num === 2) return true;
  for (let i=2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
```
# 코딩 테스트 연습 노트

### 0729
기능 개발(프로그래머스)
  먼저, 직관적으로 계산할 수 있도록 변환할 것.
  함수 이용: map(), shift(), reduce()
  그 외 알게된 것: .push(), .unshift(), .pop(), .shift()

  reduce()는 배열을 이용할 경우 push, pop을 잘 사용해야한다.



### 0806

> 객체의 언박싱에 대해서 알고 있었지만, 배열의 언박싱에 대해선 모르고 있었음.
```
[Unboxing]

const command = [5, 6, 3];
const [a, b, c] = command; // a=5, b=6, c=3
```

> 자바스크립트의 정렬
```
[Sort]

arr.sort(); // string
arr.sort((x, y) => x - y); // number
```

JS Array Methods  
첫 번째 인자값은 currentValue   
두 번재 인자값은 index,  
세 번째 인자값은 array

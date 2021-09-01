# 코딩: 코딩 테스트 뿐만 아니라 여러가지 JS 기능들!

### 0830

**Hoisting, TDZ(Temporal Dead Zone)**
```
JS Engine은 Script를 가져오면 가장 먼저 코드에서 데이터를 위한 메모리를 설정.

변수의 경우, var은 undefined로 메모리에 저장. 
            let과 const는 초기화되지 않은 상태로 메모리에 저장.
                초기화 전, let과 const 변수를 참조할 경우 ReferenceError 발생. ('TDZ'에 있는 변수에 접근했기 때문)

함수의 경우, 전체 함수에 대한 참조와 함께 저장.

함수와 변수는 Code를 실행하기 전, Execution Context를 위해 메모리에 저장.
이것을 'Hoisting'이라 한다.

TDZ(Temporal Dead Zone)
    변수 Lifecycle의 선언 단계과 초기화 단계 사이의 변수에 접근할 수 없는 지점. (초기화되지 않은 변수가 있는 지점)
    (Variable Lifecycle: Declaration phase ~ 'Uninitialized state' ~ Initialization phase)
    
    이를 통해, 선언 전에 변수를 사용하는 것을 비허용.

```

**Closure**
```
Closure
    Lexical Environment를 기억하는 함수

Lexical Environment
    자신이 생성될 때의 환경
```


### 0829

**ES6, Arrow Function, 'Lexical this'**
```
ARROW FUNCTION은 바인딩할 객체가 선언할 때 정적으로 결정.
ARROW FUNCTION의 this는 상위 SCOPE의 this
```

**Lexical Scope OR Static Scope**
```js
FUNTION을 어디서 선언했는지에 따라서 상위 SCOPE 결정 (함수의 호출이 아니라, 함수의 선언에 따라서!)
!!(함수의 호출에 따라 상위 SCOPE가 정해지는 것을 'Dynamic Scope'라고 함.)

let number = 1;
function a() {
  let number = 10;
  b();
}
function b() {
  console.log(number);
}
a(); // 1
b(); // 1
```


**Node에서 전역 객체에서의 this**
```js
// module.exports
console.log(this === module.exports, this === exports); //true, true
```



Prototype
Prototype Chain

**스코프 체인 탐색과 성능**
```
Execution Context
    Global Execution Context
    Functional Execution Context
Scope Chain
    [[Scopes]] 속성 존재
Activation Object  
Global Object
```
```
Execution Context
    작성된 코드가 실행되는 환경
    LIFO 구조의 스택


1. Execution Context가 실행되면, 엔진이 Scope Chain을 통해 Lexical Scope를 먼저 파악
2. 이를 통해 함수가 중첩 상태일 때 하위 함수 내에서 상위 함수의 스코프와 전역 스코프까지 참조
   이것을 Scope Chain을 통해 탐색
```
```
런타임 환경에서 가장 많이 발생하는 브라우저 작업 가운데 자바스크립트의 실행 성능을 저해하는 요인: 메모리의 위치를 찾는 탐색 작업

Scope Chain:
  JS의 Function을 실행하면서 어떤 속성에 접근해야할 때, 해당 속성을 효율적으로 탐색하도록 속성을 일정한 단위로 분류하고 각 객체에 접근하기 위한 객체의 참조를 특정한 공간에 저장해 두는데, 여기서 공간이 바로 '스코프 체인'

스코프 체인의 구성 요소
    Activation Object
        this(Context Object)
        arguments
        local variable

    Global Object
        this(window, {})
        document
        window
        navigator
        global variable
        global function
        ...

Execution Context:
    함수가 동작하는 환경.
    함수가 실행될 때 생성되고 함수가 종료될 때 소멸.
    함수의 스코프 체인에 대한 참조를 가지고 있음.

함수에서 속성에 접근할 때, 그에 대한 탐색 경로는 [ Execution context > Scope chain > Activation Object > Scope chain > Global Object]



출처: https://12bme.tistory.com/134
```



**반복문에서 후위증감을 사용하지 않을 이유**
```
'전위 증감': 객체 자신을 증감시킨 뒤, 그 레퍼런스를 반환
'후위 증감': 객체를 복사하여 임시 객체를 만든 뒤, 객체를 증감시키고, 임시 객체를 반환

후위 증감이 전위 증감보다 복사하는 비용이 더 들어가므로, 사본을 필요로 하지 않는 경우 후위 증감을 사용하는 것은 낭비
루프가 수십, 수백만 단위가 된다면 문제가 될 수 있음.

// 컴파일러 최적화 이론에 대해서 공부해보기
```

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
---
```js
// There are arr1 and arr2.
// Loop according to arr2.
// Use 'a%b'.

arr1.filter((x, i) => x === arr2[i % arr2.length])
arr1.filter((x, i) => x === arr2[i % arr2.length]).length
```
---
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
---
> 자바스크립트의 값은 원시값과 참조값으로 나뉜다.  
> 원시값: Number, String, Boolean, Null, Undefined  
> 참조값: Object, Symbol  
```js
// There is arr1.
arr2 = arr1; // 원시값이 아닌 배열이므로, 변수가 배열의 주소를 가리키는 값
arr2 = [...arr1]; // 해결.
```

shift는 for문에 영향을 준다
```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const x of arr) {
  console.log(x); // 1 3 5 7 9
  if (x % 2 != 0) arr.shift();
}
```

> 배열에서 특정 요소 제거
```js
arr.splice(idx, 1);
arr.splice(idx, n);
```

> 문자열 반복
```js
'abc'.repeat(n);
```


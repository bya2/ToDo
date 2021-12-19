# Closure

## Execution Context

### var과 let의 차이
```
- var
  - 함수 레벨 스코프
  - FOR문에서 스코프를 갖지 않음
  - FOR문에서 인덱스가 전역 변수
  - FOR문에서 내부 함수의 실행 문맥이 끝나기 전에 FOR문이 끝남
```
```
- let
  - 블록 레벨 스코프
  - 즉, 해당되는 블록에서만 스코프를 가짐
  - FOR문에서는 인덱스(i)의 값마다 스코프를 생성
        Activation Object를 인덱스마다 만들어낸다?
            FOR문에서 함수를 이용한다면 상위스코프는 인덱스마다 만들어지는 활성화 객체가 된다.
            따라서 Closure는 당시 생성되었던 환경을 기억하므로 당시 스코프의 i를 가져올 것이다.
```

### 정리
```
Closure
    선언될 당시의 환경을 기억했다가 호출되었을 때 원래의 환경에 따라 수행.
    즉, 선언 시의 Lexical Scope를 closure하여 실행될 때 이용.
    즉, 블록 레벨 스코프에서는 당시 블록의 환경을 기억하여 그에 따라 수행한다.
    
```

## TEST
1. var, setTimeout
```js
for (var i=0; i<3; i+=1) {
  setTimeout(() => {
    console.log(i);
  }, i*1000);
}
```
```
3
3
3
```
  2. let: setTimeout
```js
for (let i=0; i<3; i+=1) {
  setTimeout(() => {
    console.log(i);
  }, i*1000);
}
```
```
0
1
2
```
3. var: function
```js
var arr = [];
for (var i=0; i<3; i+=1) {
  arr[i] = function () {
    console.log(i);
  }
}

for (var j=0; j<3; j+=1) {
  arr[j]();
}
```
```
3
3
3
```
4. let: function
```js
let arr = [];
for (let i=0; i<3; i+=1) {
  arr[i] = function () {
    console.log(i);
  }
}

for (let j=0; j<3; j+=1) {
  arr[j]();
}
```
```
0
1
2
```
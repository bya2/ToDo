# Lexical Scope

```
Lexical Scope
Static Scope
```

## ?
```
Function을 어디서 선언했는지에 따라서 상위 Scope가 결정.
    함수의 호출이 아닌, 함수의 선언에 따라서!
```

## 호출에 따라
```
Dynamic Scope: 함수의 호출에 따라 상위 Scope가 결정.
```

## 테스트

```js
let number = 1;
function a() {
  let number = 10;
  b();
}
function b() {
  console.log(number);
}
a();
b();
```
```
1
1
```
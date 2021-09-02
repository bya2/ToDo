# 프로토타입

```js
.prototype: 프로토타입 객체
.__proto__: 프로토타입 체인
```

## ?

바인딩에 대해서 공부하다가, new 바인딩에 대해서 알게 되었다.

```js
const a = new func();

과정
  1. func의 Context Object가 되는 새로운 {} 생성 (a와 별개)
  2. a의 prototype chain과 func의 prototype object 연결
```

## 결론
```
프로토타입의 쓰임새를 아직 못느껴봐서 new 바인딩의 중요성은 아직 모르겠다.
```
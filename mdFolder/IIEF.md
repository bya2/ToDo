# 즉시 실행 함수

```
즉시 실행 함수  
IIEF  
Immediately-invoked function expression
```

```
본래 목적은 전역 변수 선언을 방지하기 위함.
    Hoisting 문제를 해결.

코딩을 하면서 이번에 몰랐던 점은 파일을 불러올 때도 위의 현상이 적용되어 전역 변수의 충돌이 일어날 수 있음.

또한 즉시실행함수를 이용하지 않으면 불려오는 파일의 코드들이 컴파일되어 실행.

결론: 따라서 이를 적절히 이용.
```


## 테스트
### CommonJS
```js
[./IIEF/index.js]
const go = require('./go')
```
```js
[./go.js]
console.log(1);
```
```js
[./go.js]
(() => {
  console.log(1);
})
```
### ES Module
```js
[./IIEF/index.mjs]
import go from './go.mjs'
```
```js
[./go.mjs]
console.log(1);
```
```js
[./go.mjs]
(() => {
  console.log(1);
})
```

테스트 결과 commonJS 방식이나 ES 모듈 방식 모두 같다는 것을 알 수 있었음.
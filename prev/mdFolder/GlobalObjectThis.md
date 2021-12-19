# 노드에서 전역 객체 this

## ?
```js
// module.exports
console.log(this === module.exports, this === exports); //true, true
```

## 결론
```
module.exports와 exports는 전역 객체의 this와 같다.
```
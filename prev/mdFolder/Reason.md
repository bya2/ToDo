# 후위 증감을 사용하지 않는 이유

## 이유
```
'전위 증감': 객체 자신을 증감시킨 뒤, 그 레퍼런스를 반환
```
```
'후위 증감': 객체를 복사하여 임시 객체를 만든 뒤, 객체를 증감시키고, 임시 객체를 반환
```

## 결론
```
후위 증감이 전위 증감보다 복사하는 비용이 더 들어감.

사본을 필요로 하지 않는 경우 후위 증감을 사용하는 것은 낭비

루프가 수십, 수백만 단위가 된다면 문제가 될 수 있음.
```

### 해야할 일
```
컴파일러 최적화 이론에 대해서 공부해보기
```
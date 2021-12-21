# Tables

## HTML에서 <table> 사용.

```
CSS에서 table 관련 스타일 적용
```

## CSS에서 블록에 row 클래스와 함께 (Layout: Content, Main Content)

```css
.row::after {
  display: table;
  content: "";
  clear: both;
}

.column-N {
  float: left;
  width: N%;
  ...;
}
```

그 외 class 이름으로 side나 middle과 같은 네임을 주고 세컨드 클래스 네임을 사용하는 것도 방법

##

# 드롭다운의 화살표

```css
.class::after {
  content: "";

  /* 완전한 세모 */
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-top-color: #333;
  border-right-color: #333;
  border-radius: 2px;

  /* 테두리 세모 */
  border-top: 2px solid #333;
  border-right: 2px solid #333;
  border-radius: 2px;

  display: inline-block;
  position: absolute;
}
```

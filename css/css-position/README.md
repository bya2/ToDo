# Position

위치 적용에 따라 헷갈렸던 점들

---

`position: absolute;`

```
이 CSS가 적용된 요소는 상위 요소가 Relative가 적용되어 있을 경우, 이를 기준으로 위치를 배치할 수 있음.

그 외의 CSS가 적용된 요소는 모두 무시됌.

A::before, A::after 요소의 상위 요소: A
```

---

`position: relative`

```
같은 레벨에 'absolute' 요소가 있을 경우, 해당 요소가 코드 상 더 아래에 있으면, 유저에 더 가깝게 배치.

따라서 'z-index'를 남용하지 않아도 자연스럽게 배치가 가능함.
```

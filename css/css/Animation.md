# CSS Animation

요소를 어떤 스타일에서 다른 스타일로 점차적으로 변화시키는 것.

해당 요소를 점차적으로 변화시키고, 변경사항에 대해서는 `@keyframes`에서 정의.

## Rule

`@keyframes`

```css
@keyframes animation-name {
  from {
  }
  to {
  }
}

@keyframes animation-name {
  n% {
  }
  n% {
  }
  n% {
  }
  n% {
  }
  ...;
}
```

## Properties

```css
animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-timing-function
animation-fill-mode
animation
```

### `animation-delay`

`in seconds(ex. 2s)`

애니메이션 동작의 대기 시간으로 쓰이지만,  
음수 값을 통해서 어떤 동작들을 생략 가능.

### `animation-iteration-count`

`number` `infinite`

애니메이션 동작 횟수

### `animation-direction`

`normal`, `reverse`, `alternate`, `alternate-reverse`

`alternate`는 `animation-iterration-count`와 같이 쓰임.  
첫 동작에서는 정방향으로 동작하고, 다음 동작에서 역박향으로 동작.

`alternate-reverse`도 마찬가지임.

### `animation-timing-function`

`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(n,n,n,n)`, `steps`, `step-start`, `step-end`

### `animation-fill-mode`

`none` `forwards` `backwards` `both`

`forwards`: 애니메이션이 키프레임의 100%에 도달했을 때 마지막 키프레임을 유지.

`backwards`: 애니메이션의 스타일을 애니메이션이 실제로 시작되기 전에 미리 적용.(@keyframes의 from이나 top의 스타일을 적용한다는 의미)

`both`: `forwards`, `backwards`을 둘 다 적용.

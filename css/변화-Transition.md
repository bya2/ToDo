# CSS의 변화

`CSS Transition`:  
선택자에 변화가 일어날 때, CSS 프로퍼티가 특정 시간, 방식에 따라 변화

## 코드

```css
selector {
  transition: property duration(always) timing-function delay;
}
```

```js
object.style.transition = "...";
object.style.transitionProperty = "property1, property2, ...";
object.style.transitionDuration = "1s";
object.style.transitionTimingFunction = "keyword | cubic-function";
object.style.transitionDelay = "1s";
```

## 값 요소

```
css property:    transition-property
duration:        transition-duration
timing-function: transition-timing-function
delay:           transition-delay
```

## 구분

`,(쉼표)`

```
-webkit-transition: css property duration, css property duration, ...
```

## 속도 커브 키워드 및 함수

`transition-timing-function`:  
변화 효과에 대한 속도의 커브를 지정  
[**`어떤 블로그`**](https://kutar37.tistory.com/entry/CSS-cubic-bezier%EB%9E%80)

```
ease:                   느리게, 빠르게, 느리게    cubic-bezier()
linear                  같은 속도 유지
ease-in                 느리게 시작
ease-out                느리게 끝
ease-in-out             느리게 시작, 느리게 끝(ease보다 완만함)
cubic-bezier(n,n,n,n)   베지어 곡선 지정
step-start              steps(1, start)
step-end                steps(1, end)
steps(n, start|end)     n단계로 나누어 변화
initial
inherit
```

## +Tranform

`transform`을 `transition-property`a로 지정.

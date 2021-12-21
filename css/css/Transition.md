# Transition

**`transition`**  
이 셀렉터에 변화가 일어난다면 이 CSS 프로퍼티가 어느 정도의 시간을 거쳐 변화함.

```
css property:  transition-property
duration:      transition-duration
```

,(쉼표)를 통해서 값을 추가 가능.

```
-webkit-transition: css property duration, css property duration, ...
```

<hr>

**`transition-timing-function`**  
변화 효과에 대한 속도의 커브를 지정.  
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

<hr>

**`transition-delay`**
변화 효과에 대한 지연 시간을 지정.
`in seconds(ex. 2s)`

<hr>

`transition` + `transform`

`transform`을 `transition-property`로 지정.

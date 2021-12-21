# Tooltip

## Rule

포인터를 위에 올려둘 블록

```
요소의 위치 지정 및 배치
Position, Display

아웃라인
테두리
Outline, Border

배경
Background

콘텐츠
Padding, Align, Block, Text-align, Text

이벤트
Hover (2블록에 적용)
```

포인터를 위에 올려두면 나타날 블록

```
요소의 위치 지정 및 배치
Position

요소의 스택 순서(사용자 시점 순서)
Z-Index

가시성 여부
Visibility

블록의 크기
Width, Height

아웃라인
테두리
Outline, Border


```

포인터를 위에 올려두면 나타날 블록에서 화살표

```
화살표 만들기
::after

content: "";
border-width: Npx;
border-bottom-color: black; (top, right, bottom, left)

화살표 위치 지정
bottom: 100%
left: 50%
```

::after
별개의 블록이나 인라인이라고 보는 게 맞을 것 같음.
하지만, 블록으로 취급되지 않으므로 인라인이라 보는게 맞는 거 같음.

```

```

<hr>

Opacity

```
포인터를 올려두면 나타나는 블록:
visibility: hidden;
opacity: 0;
transition: opacity 1s;

Hover 이벤트:
visibility: visible;
opacity: 1
```

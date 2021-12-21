# 2D

`transform`

```
translate(wl, hl)

rotate(Xdeg)

scale(w, h)
scaleX(w)
scaleY(h)

skew(Xdeg, Ydeg)
skewX(Xdeg)
skewY(Xdeg)

matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)
```

# 3D

`transform`

블록만 돌아가는 느낌이 들고, 안의 컨텐츠는 비율에 맞춰지는 것 같음.  
원근감은 전혀 없음.

```
rotateX(Ndeg): x축을 기준
rotateY(Ndeg): y축을 기준
rotateZ(Ndeg): z축을 기준
```

#

`transform-origin`

`transform`과 함께 사용되는 속성.  
회전 중심을 지정함.

속성 값은 백분율(%), 키워드

```
0%  : left   (x)
0%  : top    (y)
50% : center
100%: right  (x)
100%: bottom (y)
```

<hr>

`transform-style`

`transform`과 함께 사용되는 속성.
중첩된 요소들이 어떻게 3D 공간 속에서 화면 상에 표시될 것인지 지정.

# CSS

## Priority

```
A. 사용자 스타일 시트
B. !important
C. 브라우저 스타일 시트
    <style>
D. 명시도(한정성)
    1. Inline
    2. id
    3. class
    4. tag
E. 소스 코드 순서
    (나중에 지정한 스타일 우선 적용)
```

## Browser Prefix

```
-webkit- : 사파리, 크롬, 엣지
-moz-    : 모질라, 파이어폭스
-o-      : 오페라
-ms-     : IE
```

`초기 모던 브라우저를 위해 붙이는 것임`
`최신 모던 브라우저는 붙이지 않음`

```
번거로움 -> JS
<script src="prefixfree.min.js"/>
```

## Text

### 단위

```
font-size: em (사용하는 글꼴의 대문자 M을 기준)
```

### 글자 스타일(italic, oblique의 차이)

```
italic: 처음부터 기울어진 글꼴 디자인
oblique: 원래 글꼴을 기울임
```

`*에 어울리는 글꼴 스타일`

```
caption
icon
menu
message-box: 대화 상자
small-caption
status-bar: 상태 표시줄
```

### 공백 처리, 텍스트 간격, 줄 간격

`white-space` (`공백 처리`)

```
normal  : 여러 개의 공백을 하나로 표시(d)
nowrap  : 여러 개의 공백을 하나로 표시, 영역 너비를 넘어가는 내용 줄바꿈 x
pre-line: 여러 개의 공백을 하나로 표시, 영역 너비를 넘어가는 내용 줄바꿈 o
pre     : 여러 개의 공백을 그대로 표시, 영역 너비를 넘어가는 내용 줄바꿈 x
pre-wrap: 여러 개의 공백을 그대로 표시, 영억 너비를 넘어가는 내용 줄바꿈 o
```

`letter-spacing`, `word-spacing` (`텍스트 간격`)

```
normal : d
size   : em, rem
```

`line-height` (`줄 간격`)

```
normal
number
size
percentage
inherit
```

### 들여쓰기

`text-indent`

```
크기,
백분율
```

### 넘치는 텍스트 표시

`text-overflow`

```
clip     : 자르기
ellipsis : 말 줄임표(...)로 표시
```

`이 속성은 해당 요소에서 overflow 속성 값이 hidden, scroll, auto이면서 white-space: nowrap 속성을 함께 사용했을 경우에만 적용.`

## Background

### 배경 적용 범위 (`background-clip`)

```
border-box  : ~테두리 영역
padding-box : ~패딩 영역
content-box : ~내용 영역
```

### 배경 이미지 위치 배치 기준

```
border-box  : 테두리 기준
padding-box : 패딩 기준
content-box : 내용 기준
```

### 배경 이미지 위치 고정 여부

```
fixed  : 고정 상태
scroll : 함께 스크롤
```

### 그라데이션

`그라데이션을 지원하지 않는 브라우저`를 위해 `그냥 색상 값`을 붙이는 경우가 있음.

```
background-image: linear-gradient([pos|deg|dir,] s-color[, color-stop], e-color)
```

`가장 자리`

```
ex) radial-gradient(circle closest-side at n% n%)

closest-side
closest-corner
farthest-side
farthest-corner
```

## Block

### hidden

```
display: none (공간 차지x)
visibility: hidden (공간 차지)
```

### `z-index`

```
맨 먼저 삽입하는 요소가 z-index: 1
```

## 선택자

```
~="": 여러 값 중 특정 값이 포함된 속성  (구분: ' ')
|="": 특정 값(문자)가 포함된 속성       (구분: ' ', '-')
^="": 특정 값(문자)로 시작하는 속성
$="": 특정 값(문자)로 끝나는 속성
*="": 값이 일부가 일치하는 속성         (구분: '')
```

```
input
    :enabled
    :disabled
    :checked (라디오 박스나 체크 박스에서 해당 항목 선택했을 때)
```

```
:root                    : html tag
:nth-child(n|an+b)       : 앞에서부터 n번째의 자식 요소
:nth-last-child(n|an+b)  : 끝에서부터 n번째의 자식 요소
:nth-of-type(n|an+b)     : 앞에서부터 n번째의 요소
:nth-last-of-type(n|an+b): 끝에서부터 n번째의 요소
:first-child             : 첫번째 자식 요소
:last-child              : 마지막 자식 요소
:first-of-type           : 첫번째 요소
:last-of-type            : 마지막 요소
:only-child              : 자식 요소가 유일하게 하나이면 자식 요소
:only-of-type            : 해당 요소가 유일하면 해당 요소

:target    : anchor(#target)인 요소(즉, 목적지에 해당하는 요소) (link에서 사용)
:not(요소) : 괄호 안의 요소를 제외한 요소

::first-line  : 첫번째 줄
::fitst-letter: 첫번째 글자

::before : 내용 앞
::after  : 내용 뒤
```

## Transform

```
요소 이동
요소 확대/축소
요소 회전
요소 축(x,y,z)을 기준으로 회전
요소 변형 기준점
요소 원근감 표현
3D 변형 적용
요소 뒷면 표시 여부
```

## Transition

`요소의 배경 색 변화, 도형의 테두리 모양 변경`

```
트랜지션 적용할 속성 지정
트랜지션 속도 곡선 지정
지연 시간 설정
```

## Animation

```
키 프레임 작성
애니메이션 이름 지정
애니메이션 실행 시간 설정
애니메이션 방향 지정
애니메이션 반복 횟수 지정
애니메이션 속도 곡선 지정
```

## Grid Layout

`고정 그리드`, `가변 그리드`

```
가변 글꼴: em, rem
```

## Mediaqueri

사이트에 접속하는 장치에 따라 특정한 CSS 스타일을 적용하도록 하는 것.

```
@media [only|not] mediatype [and (condition)] [and (condition)] ...
    and : 조건 추가
    only: 미디어쿼리를 지원하는 웹 브라우저에서만 조건을 인식하도록 함 (미디어쿼리를 지원하지 않는 웹 브라우저에서는 실행x)
    not : 다음에 지정하는 mediatype을 제외

mediatype:
    all      : 모든 미디어 유형
    print    : 인쇄 장치
    screen   : 컴퓨터 스크린, 스마트폰 스크린
    tv       : 음성과 영상이 동시 출력되는 TV
    aural    : 음성 합성 장치
    braille  : 점자 표시 장치
    handheld : 패드 등 손에 들고 다니는 장치
    projection: 프로젝터

condition:
  화면 크기:
    width
    height
    min-width
    max-width
    min-height
    max-height

  단말기 크기:
    device-width
    device-height
    min-device-width
    max-device-width
    min-device-height
    max-device-height

  화면 방향 체크:
    orientation: portrait  (단말기가 세로 방향)
    orientation: landscape (단말기가 가로 방향)

  화면 비율:
    aspect-ratio: width/height
    min-aspect-ratio: width/height
    max-aspect-ratio: width/height

  단말기의 화면 비율:
    device-aspect-ratio: w/h
    min-device-aspect-ratio: w/h
    max-device-aspect-ratio: w/h

  색상 당 비트 수:
    color: n (비트 수)
    min-color: n (최소 비트 수)
    max-color: n (최대 비트 수)
```

`미디어쿼리 중단점`

```
스마트폰 세로
@media only screen and (min-width: 320px) {}

스마트폰 가로
@media only screen and (min-width: 480px) {}

태블릿 세로
@media only screen and (min-width: 768px) {}

태블릿 가로/데스크톱
@media only screen and (min-width: 1024px) {}
```

`Link 태그 사용`

```
<link rel="stylesheet" media="mediatype" href="path/to/path">
or
@import (외부 CSS 파일 연결): <style> 태그에서만 사용함.
```

## 반응형 웹 제작 시 고려할 모바일 해상도

```
인터넷에 "모바일 기기 해상도" 검색
```

## Flex

```
1. 브라우저마다 플렉스 박스를 지원하는 방법이 다르므로 브라우저 접두사 붙여야함
2. 플렉스 방향 지정
3. 플렉스 항목 한줄 혹은 여러줄 지정 (여러 줄일 경우 위 or 아래 지정)
4. 플렉스 항목의 배치 순서 변경 여부
5. 플렉스 항목 크기 조절 (몇 배수로 늘이거나 줄일지, 기본 크기 지정)
6. 플렉스 항목 배치 (주축 기준, 교차축 기준 - 블록 내 모든 항목 기준, 특정 항목 기준)
```

# Media Rule

미디어라는 규칙에서 표현식의 결과에 따라 스타일을 적용하는 것입니다.
어떤 장치에서 표현식의 결과에 따라 스타일이 적용되는 것입니다.

신이종: 브라우저를 늘리고 줄일때마다 그거에 맞는 디스플레이를 주는것.

```
@media not|only mediatype and (expression) {
  CSS Code
}
```

## 접근성 고려, 사용자 경험 향상

```
글씨 크기를 조정한 사용자: length -> em
```

`prefers-reduced-motion` (CSS Media type)

```
사용자가 시스템에 애니메이션을 최소로 줄여달라고 요청했는지 알 수 있음.

no-preference: 사용자가 시스템에 관련된 설정을 하지 않았다는 것을 의미.
reduce: 사용자가 시스템에 애니메이션 동작을 최소화하도록 설정하였다는 것을 의미. 가급적이면 필수적이지 않은 동작들을 모두 제거됌.
```

`-ms-high-contrast` (CSS Media type)

```
고대비 모드(High Contrast Mode)
```

```
애플리케이션이 고대비 모드인지, 어떤 색상으로 강조되어 있는지를 정의.
시력이 않좋은 사용자나 대비감도에 문제가 있는 사람 뿐만 아니라, 직사광선 아래에서 컴퓨터나 휴대폰을 사용하는 사람에게 도움.

active
black-on-white
white-on-black
```

## 화면의 방향 관리

```
장치가 방향을 감지하지 못하더라도, 화면은 언제나 방향을 가지고 있음.
그리고, 만약 장치가 방향을 알 수 있더라도, 웹 애플리케이션의 인터페이스를 유지하거나 적응하기 위해 화면의 방향을 조정하는 능력을 갖는게 좋음.
```

화면의 방향을 다루기 위한 방법: CSS, JS

CSS: orientation media query: 브라우저 창의 너비가 높이보다 크거나, 작거나에 따라 가로모드와 세로모드를 구분.
JS: javascript screen orientation API: 화면의 현재 방향을 구하고 잠그는데 사용.

```
portrait: 높이가 너비보다 큼.
landscape: 너비가 높이보다 큼.
```

## CSS3 Media Types

```
all: 모든 Media 타입 장치에서 사용됌.
print: 프린터에서 사용됌.
screen: 컴퓨터, 태블릿, 스마트폰 등에서 사용됌.
speech: 스크린리더 등에서 사용됌.
```

```
min-device-width: length
```

# HTML

## Viewport

### `반응형 웹`

```
1. 모든 스마트 기기에서 접속 가능
2. 기로 모드에 맞추어 레이아웃 변경 가능
3. 사이트 유지, 관리 용이
```

### `뷰포트 지정`

뷰포트: 스마트폰 화면에서 실제 내용이 표시되는 영역

```
<meta name="viewport" content="속성=값, 속성=값 ...">
    width         : 뷰포트 너비
    height        : 뷰포트 높이
    user-scalable : 확대/축소 가능 여부 (yes|no)
    initial-scale : 초기 확대/축소 값 (1~10, 1)
    mimimum-scale : 최소 확대/축소 값 (0~10, 0.25)
    maximum-scale : 최대 확대/축소 값 (0~10, 1.6)
```

### 크롬 `디바이스 모드`

```
개발자 도구 - 디바이스 모드 아이콘
```

## Definition, Block

```
<hn>
<p>
<span>
<blockquote>
<pre>
```

## Line

```
<hr>
<br>
```

## TEXT

```
<strong>
<b>

<em>
<i>

<s>: 취소선
<u>: 밑줄

<small>: 작은 텍스트 (부가 정보)

<sup>: 위 첨자
<sub>: 아래 첨자

<q>: "...": 인용 내용 표시

<mark>

<ruby>: <ruby> 내용 <rt> 주석 </rt> </ruby>: 동아시아 국가들의 글자에 사용

<abbr title="...">: 약자 표시

<cite>: 웹 문서나 참고 내용

<code>: <pre><code></code></pre>: 코드 내용

<kdb>: 사용자 컴퓨터에 입력하는 내용(키보드 입력이나 음성 명령)
```

## List

```
<ul>
<ol [type="" [start="" reversed]]>
  <li>

<dl>: 설명 목록
  <dt>: 제목
  <dd>: 설명
```

## Table

```
<figure>
  <figcaption>: 표 주제1
    <block: ex) strong, p>
    ...
  <table [border="n" aria-describedby="tag-id"]>: (aria-describedby: 테이블에 대한 설명 <p id="tag-id">...</p>)
    <caption>: 표 주제2: figcaption이 있으면 생략
      <block: ex) strong, p>
      ...
    <colgroup>: 여러 열 묶기 (스타일 지정용)
      <col [span="n"]>: n개의 열
      ...
    <thead>: 표 제목: 시각 장애인 배려(낭독기)
      <tr>
        <th [colspan="n" rowspan="n"]>
        <td [colspan="n" rowspan="n"]>
        ...
    <tbody>: 표 본문
      <tr>
        <th [colspan="n" rowspan="n"]>
        <td [colspan="n" rowspan="n"]>
        ...
    <tfoot>: 표 요약(예: 합계)
      <tr>
        <th [colspan="n" rowspan="n"]>
        <td [colspan="n" rowspan="n"]>
        ...
```

## Image

### Image format

```
GIF     : 파일 크기가 작기 때문에 아이콘이나 불릿 등 작은 이미지 (투명한 배경, 움직이는 이미지)
JPG/JPEG: 다양한 색상과 명암 (사진, 고화질 이미지)
PNG     : 네트워크용 (투명 배경)
WEBP    : ?
SVG     : 아이콘, 로고 이미지, 데이터 시각화의 차트, 다이어그램, 지도 (vector image) (ie8이하, android2.3이하 비지원)

jpg/jpeg, png을 확대해서 나타내면 테두리 부분이 울퉁불퉁 - bitmap image
vector image(이미지를 아무리 확대하거나 축소해도 원래 상태 유지)
```

`SVG는 자바스크립트를 이용해 웹 브라우저에서 SVG 기능을 지원하는지 여부에 따라 다르게 표시 가능`

```js
if (!Modernizr.svg) {
  // 지원하지 않을 경우
}
```

### Image Tag

```
<img src="path/to/path" [alt="description(시각 장애인)" width="" height=""]>
```

```
<figure>
  <figcaption>
  <img src="path/to/path" [alt="description(시각 장애인)" width="" height=""]>
```

`이미지 맵: 하나의 이미지에 여러 개의 링크: 한 이미지상에서 클릭 위치에 따라 서로 다른 링크가 열리는 형태`

```
// #Link 참고
<map name="map-name">
  <area
    href="..."
    shape="default | rect | circle | poly": 링크로 사용할 영역 형태
    coords="n(l),n(t),n(r),n(b)": 링크로 사용할 영역 좌표(그림판에서 확인가능)
    alt
    target
    rel
    download
    type
    media
  >
<img src="path/to/path" usemap="#map-name" [alt="description(시각 장애인)" width="" height=""]>
```

## Link

```
<a href="#anchor(tag-id) | address"
  [
    target="_blank(새탭) | _self(현재탭) | _paraent(부모프레임) | _top(루트프레임)"
    rel="keyword": 현재 문서와 링크 문서 간 관계
    hreflang="...": 링크 문서의 언어
    download: 링크 내용으로 이동이 아닌 다운로드
    type="...": 링크 문서의 파일 유형
  ]>
```

`rel`

```
internate
bookmark
help
license
next
nofollow
noreferer
prefetch
prev
search
tag
```

## Form

```
<form [name="" method="" action="" target="k" autocomplete="on|off"]>
  <label>
    <input type="...">
```

```
<form [name="" method="" action="" target="k" autocomplete="on|off"]>
  <ul>
    <li>
      <label for="input-id">
      <input type="..." id="input-id">
    ...
```

```
<form [name="" method="" action="" target="k" autocomplete="on|off"]>
  <fieldset>: 요소들을 하나로 묶는 외곽선
    <legend>: fieldset 이름
```

```
<input type="..." [
  autofocus
  required
  placeholder
  readonly
  list
  multiple
]>
```

`input type`  
[브라우저 별 지원 상황](http://caniuse.com) - Index of features

```
hidden    : 사용자에게 보이지 않지만, 서버로 넘겨지는 값 (name, value)

search    : 검색 상자

text      : 텍스트    입력 필드 (name, value, minlength, maxlength, size) (maxlength: 최대문자개수, size: 보이는문자개수)
password  : 패스워드  입력 필드 (value 값이 없다?)
tel       : 전화 번호 입력 필드
url       : URL 주소  입력 필드
email     : 이메일    입력 필드

checkbox  : 2개 이상 선택 가능 체크 박스 (name(c구분:다르게), value, checked)
radio     : 1개 선택 가능 라디오 버튼 (name(r구분:같게), value, checked)

file      : 파일 첨부 버튼
submit    : 서버 전송 버튼 (value, formaction, formenctype, formmethod, formnovalidate, formtarget) (button 태그를 대신)
image     : submit 버튼 대신 사용할 이미지 (src, alt)
reset     : 초기화 버튼    (value)
button    : 버튼           (value)

datetime      : UTC (국제 표준시) (연,월,일,시,분,초,분할초) (min, max, step, value) (크롬:20+ 파이어폭스::57+)
datetime-local: Local 시간
time          : Local 시간        (시,분,초,분할초)
date          : Local 날짜        (연,월,일)
month         : Local 날짜        (연,월)
week          : Local 날짜        (연,주)

number  : 숫자 조절 화살표        (min, max, step, value) (value: 초기값) (파이어폭스:29+)
range   : 숫자 조절 슬라이드 막대 (min, max, step, value)

color   : 색상 표 (value) (크롬:20+ 파이어폭스:29+, 오페라: 17+, IOS사파리 지원x)
```

## Select, Datalist (데이터 나열)

```
<select size="" [multiple]>
  <option value="" [selected]>
```

```
<select size="" [multiple]>
  <optgroup label="그룹제목">
    <option value="" [selected]>
  ...
```

```
<input type="text" list="datalist-name">
<datalist id="datalist-name">
  <option value="서버로넘길값" label="보여질값">
```

## Textarea

```
<textarea name="..." cols="n" rows="n">
```

## Button

```
<button type="submit">: input submit 대신 사용 (화면 낭독기에서 이 부분에 버튼이 있다는 것을 정확히 전달 가능)
<button type="reset"> : input reset  대신 사용
<button type="button">: 주소 입력에 사용
```

## Output (계산 결과, 일반 테긋트가 아닌 계산의 결과 값이라는 것을 웹 브라우저가 정확히 인식)

```
<output>
```

```
<form oninput="result.value=parseInt(num1.value)+parseInt(num2.value)">
  <input type="number" name="num1" value="초기값">+
  <input type="number" name="num1" value="초기값">=
  <output name="result" for="num"></output>
</form>
```

## Progress (진행 상태 표시)

```
<label>
<progress value="f(초기값)" max="f(d:1)">
```

## Meter (값이 차지하는 크기: 점유율, 사용량, 트래픽 등) (IE x)

```
<label>
<meter value="f(초기값)" [min="f(d:0)" max="f(d:1)" low="f(낮음)" optimum="f(적당)" high="f(높음)"]>
```

## Semantic

```
header
nav
section
  article
aside
footer: 제작 정보, 저작권 정보
  address: 사이트 제작자 정보, 연락저 정보
iframe (src, width, height, name, seamless(테두리없애기))
```

```
IE8- 버전에서는 시맨틱 태그를 비롯해 HTML5에서 새로 추가도니 태그들을 브라우저에서 인식하지 못하는 경우 가 있으므로, 자바스크립트를 이용해 태그를 만들어주는 경우가 있음.
```

## 폴리필

## 플러그인 사용

`다른 점은 embed는 닫는 태그가 없고, object를 지원하지 않는 이전 브라우저에서 사용`

```
<object>: 외부 파일 삽입 (자바 애플릿, PDF, 플래시 무비, 또 다른 HTML 문서)
  data  : 외부 파일 경로
  type  : 내용 유형
  name  : 태그 구분 이름
  width
  height
<embed> : 외부 파일 삽입 (웹 브라우저에서 재생할 수 없는 컨텐츠)
  src   : 외부 파일 경로
  type  : 내용 유형
  name
  width
  height
```

## 비디오/오디오

### 파일 종류, 코덱, 인코딩, 디코딩

```
비디오
    mp4 : 고화질, 라이선스로 인해 유료
    webm: 화질 우수, 무료
    ogv :
오디오
    mp3 : 라이선스로 인해 유료
    ogg : 무료(게임 등에 사용)
```

```
비디오 코덱이 하는 일:
    인코딩: 촬영한 비디오 파일을 최대한 압축해서 컴퓨터에서 사용할 수 있는 비디오 파일로 변환
    디코딩: 비디오 파일에 저장되어 있는 비디오 정보를 가져와 비디오 플레이어에 보여주는 과정

HTML5에서는 플러그인 프로그램 없이 "브라우저에서 직접 재생할 수 있는" 비디오 코덱만 허용
비디오 코덱:
    H.264/AVC  : mp4 파일에서 사용, 고화질, 온라인 상 무료, 하드웨어 가속 가능
    v8, v9     : webm 파일에서 사용, 구글 오픈 소스 코덱, 하드웨어 지원 부족
    오그 테오라: ogv 파일에서 사용, 모바일 브라우저 불가능

오디오 코덱:
    MPEG-1 AUDIO Layer3(MP3 코덱): mp3 파일에서 사용
    Ogg Vorbis                   : 확장자 .ogg, .oga를 사용, 오픈 소스
```

### Tag

`Audio`

```
<audio src="..."
  [
    autoplay : 자동 재생
    loop     : 반복 재생
    controls : 웹 화면에 컨트롤 막대 표시(재생,멈춤,진행바,볼륨)
    muted    : 소리 끄기
    preload="none|metadata|auto": 재생 전 오디오 파일 다운로드하여 준비
        none    : 재생 버튼 눌러야 다운로드
        metadata: 미디어 파일을 즉시 사용하지 않을 경우, 미디어 파일 전체를 다운로드하지 않고 메타 정보만 다운로드
        auto    : 즉시 이용을 고려해, 웹 문서를 로드할 때 미디어 파일도 모두 다운로드 (preload라고만 하면 auto)
  ]>
```

`Video`

```
<video src="..." controls
  [
    autoplay : 자동 재생
    loop
    muted    : 화면만 재생
    preload
    width
    height
    poster="image-file": 문제 상황 표시(비디오를 재생할 수 없을 경우)
  ]
>
```

```
브라우저에 따라 지원하는 코덱이 다르기 때문에 한 가지 파일만 사용했을 경우, 일부 브라우저에서는 지원하지 않을 수 있음.
많은 사용자들의 브라우저 환경을 모두 고려: ogv, webm 파일도 함께 지정

<video controls>
  <source src="..." type="video/mp4">
  <source src="..." type="video/webm">
  <source src="..." type="video/ogg">
</video>

이전 브라우저를 고려해 여러 형식의 파일을 올렸는데도 사용자의 로컬 컴퓨터에서 문제없이 재생되던 파일이 웹 서버에서 업로드한 후 재생되지 않는 경우가 있음.
ogv 파일이나 webm 파일 등은 이전에 없던 비디오 파일 형식이어서 웹 서버에서 확장자를 인식하지 못했기 때문임.
따라서, 파일을 인식할 수 있도록 MIME 유형을 추가해야함.
즉, 웹 사이트 파일이 올라가 잇는 웹 서버 관리자에게 MIME 유형을 설정해 달라고 다음과 같이 요청해야함.

video/ogg .ogv
video/mp4 .mp4
video/webm .webm
```

`비디오 화면에 자막 추가`

```
<track kind="subtitles|captions|descriptions|chapters|metadata" src="..." srclang="언어" label="제목" [default]>
    subtitles   : 자막
    captions    : 캡션: 청각장애인용 자막 혹은 소리를 켤 수 없는 경우
    descriptions: 비디오 콘텐츠에 대한 설명(비디오 화면에 표시되지는 않음)
    chapters    : 비디오 탐색을 위한 장 제목
    metadata    : 비디오 콘텐츠 정보

- kind   : 자막의 종류
- src    : 자막 텍스트 파일의 경로 지정
- srclang: 사용한 언어(약자 ex:en ko)
- label  : 자막이 여러 개일 경우, 자막을 식별할 수 있도록 제목 지정 (ex: 한국어, English)
- default: 자막 파일이 여러 개일 경우, 기본으로 사용할 자막 지정
```

`MIME type`

```
.vtt  text/vtt
```

`비디오 파일에 자막 파일 연결`

```
<video autoplay>
  <source ...>
  <source ...>
  ...
  <track ...>
  ...
</video>
```

`가변 비디오`

```
CSS - max-width
```

## Picture

화면 해상도 뿐만 아니라, 화면 너비에 따라 다른 이미지 파일을 표시

```
<picture>
  <source srcset="path/to/path" [media="expression(condition)" type="파일 유형" sizes="파일 크기"]>
  <source srcset="path/to/path" [media="expression(condition)" type="파일 유형" sizes="파일 크기"]>
  ...
  <img src="path/to/path" alt="..." ...>
</picture>
```

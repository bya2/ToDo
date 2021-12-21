# CSS3

## Inline-block

### Compared to `display: inline;`,

the major difference is that `display: inline-block` allows to set a width and height on the elements.

also, with `display: inline-block`, the top and bottom margins/paddings are respected.

### Compared to `display: block`,

the major difference is that `display: inline-block` does not add a line-break after the elements.

<hr>

## Align

### Block

To horizontally center a `block element`: Use `margin: auto`.

### Text

To just center the `text inside an element`: Use `text-align: center`.

### Image

**`Center`**
One. Set `left and right margin` to `auto`. (`magin-left: auto; margin-right: auto;`)
Two. Make `Image` into a `block` element. (`display: block;`)

### etc... (Right)

`position: absolute; right: 0`
`float: right;`

## Vertically Align

`padding`  
`line-height`
`postion & transform`  
`flexbox`

<hr>

## Combinators

Something that explains the relationship between the selectors.

- descendant selector: `space`
- child selector: `>`
- adjacent sibling: `+` (an element)
- general sibling selector: `~` (all elements)

<hr>

## Pseudo-classes

`:link`
`:visited`
`:hover`
`:active`
`:first-child`: 모든 요소의 첫번째 child 요소.  
`:lang`: 특별한 규칙 지정.

`:focus`
`:`

A pseudo-classes is used to define a special state of an element.

Pseudo: 관련이 있는, 유사한,

### Tooltip(:hover)

`display: none;` => `display: block;`

```css
p {
  display: none;
  background-color: yellow;
  padding: 20px;
}

div:hover p {
  display: block;
}
```

<hr>

## Pseudo-element

`::after`  
`::before`  
`::first-letter`  
`::first-line`  
`::selection`

<hr>

## Opacity

Using for `<img>`

Using

## Image Gallery

div > (a > img) ^ div

## Image Sprites

? 설명을 봐도 잘 모르겠음.

## Attribute Selectors

`[attr="value"]`: 지정된 속성과 값으로 요소를 선택하는 데 사용되는 셀렉터

`[attr~="value"]`: 특정 단어가 포함된 속성 값으로 요소를 선택하는 데 사용되는 셀렉터(이어지는 것이 아닌, 띄워쓰기해서 분리된 값만 허용)

`[attr|="value"]`: 특정 값으로 시작하는 지정된 속성으로 요소를 선택하는 데 사용되는 셀렉터(연결어는 -) (top-ok (ok) topok (no))

`[attr^="value"]`: `|=`와 비슷하지만, 연결어 없이 특정 값으로 시작하는 지정된 요소에 모두 사용되는 셀렉터 (top-ok (ok) topok (ok))

`[attr$="value"]`: 연결어 없이 특정 값으로 끝나는 지정된 요소에 모두 사용되는 셀렉터

`*=`: 특정 값 포함.

## Forms

폼의 Input의 Border는 none으로 설정해도 Input을 Focus하면 Border가 생김.

`:focus`

서서히 변화: `transition: 0.5s`

## Box-Sizing

https://www.codingfactory.net/10630
`box-sizing`
content-box, border-box, intial, inherit

콘텐츠 기준,
테두리 기준

## Transition

CSS 변화 시간

## Counters

CSS의 변수와 같음.  
CSS 규칙에 의해서 값이 증가될 수 있음.

`counter-reset`
`counter-increment` `content` `counter()` `counters()`

CNT 생성  
증가시킬 CNT / 출력할 콘텐츠(문자열을 ""로 묶고, 띄어쓰기를 기준으로 숫자나 함수 구분) / 카운트할 값을 인자로 하는 함수

마치 '논문이나 보고서'처럼 HTML의 챕터를 구성할 수 있음. (나무위키)

<h1> 등의 `h` 태그와 같이 쓰이는 것이 좋음.
<ol> <li> 등과도 같이 쓰임.

##

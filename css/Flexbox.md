# Flexbox



컨테이너가 항목들을 감싸는 형태.
컨테이너에 속성을 지정.
플렉스 요소들은 플렉스 컨테이너 안에서 플렉스 라인이라는 가상의 선을 따라 위치.
기본적으로 하나의 플렉스 컨테이너는 하나의 플렉스 라인을 가지고 있음.

중심 축과 교차 축에 대해서 파악을 하고 접근해야함.

```css
 {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
}
```

## flex-direction (Select Axis)

```
Flex 항목을 쌓을 방향을 정의
column, column-reverse, row, row-reverse
```

## flex-wrap

```
필요한 경우, 항목을 줄 바꿈
nowrap(d), wrap, wrap-reverse(윗 방향)
```

## flex-flow

Shorthand.

```
flex-direction flex-wrap
```

## justify-content (main-axis)

```
Flex 항목의 수평 정렬 상태 정의
flex-start(d), center, flex-end, space-around, space-evenly, space-between

space-around: 각 항목 전, 후에 공백
space-evenly: 양 옆과 각 항목 사이에 공백
space-between: 각 항목 사이에 공백
```

## align-items

```
Flex 항목의 수직 정렬 상태 정의
flex-start, center, flex-end

Flex 항목의 수직 정렬과의 매치 상태 정의
stretch(d), baseline

baseline: [질문](https://www.w3schools.com/css/css3_flexbox_container.asp)
엘리 코딩: 텍스트가 모두 균등하게 맞춰질 수 있도록 균등하게 아이템들을 배치.
```

## align-content (cross-axis)

```
Flex line을 정렬하기 위해 사용.
stretch(d), flex-start, center, flex-end, space-around, space-between

```

# Flex Items

## order

Flex 아이템 간의 순서  
`float`

## flex-grow

Flex 박스 내에서 Flex 아이템 간의 비율  
0일 경우 콘텐츠의 크기만큼 차지  
내가 보기에, 콘텐츠 크기를 제외하고 Flex 항목 내 여백이 flex-grow의 영향을 받는 것으로 보임.
0은 여백 없음, 1은 1만큼의 여백 2는 2만큼의 여백.
<0이면 비율 없음임.>
`float` `default:0`

## flex-shrink

Flex 박스 내에서 어떤 항목이 나머지 Flex 항목들에 비해 얼마나 축소될 것인지.
다시 말하자면, 해당 아이템이 줄어들 때 어떻게 줄어들지
0이면 축소 없음.
`float` `default:1` `min:0`

## flex-basis

Flex 항목의 초기 길이  
`length`

## flex

`flex-grow flex-shrink flex-basis`  
`비율 축소 초기길이`

```
값이 하나일 경우,

number: flex-grow
length or percentage: flex-basis

값이 두 개 일 경우,
number length or percentage: flex-grow flex-basis
number number: flex-grow flex-shrink
```

## align-self

Flex 컨테이너 안쪽에서, 선택된 Flex 항목에 대한 정렬을 지정  
컨테이너의 `align-items`의 재정의(Override). (수직 정렬 상태)

```
Flex 항목의 수직 정렬 상태 정의
flex-start, center, flex-end

Flex 항목의 수직 정렬과의 매치 상태 정의
stretch(d), baseline
```

<hr>

# Flex Responsive

# Grid

## Container Level

```
display: grid | inline-grid;

: Grid 컨테이너를 블록 레벨로 생성하느냐, 인라인 레벨로 생성하느냐의 차이
```

```
grid-row-gap: length;
grid-column-gap: length;
grid-gap: grid-row-gap grid-column-gap;

: Row 간의 거리와 Col 간의 거리
: ***CSS3부터 앞에 grid를 붙이지 않음.
```

### Grid Line

: Grid 컨테이너 안에서 특정 Grid 아이템의 위치를 특정할 때 슬라이싱(1부터 시작)

```
grid-row-start: number;
grid-row-end: number;

grid-column-start: number;
grid-column-end: number;

: 시작 슬라이스~끝 슬라이스: 아이템 개수=(끝슬라이스-시작슬라이스)
: 1부터 시작함(중요)
```

### Grid Template (아이템의 개수 정의)

: Grid 레이아웃에서 행이나 열의 개수를 정의.
: 그리고 각 행이나 열의 높이나 너비 정의.

```
grid-template-rows: height height height ...;
grid-template-columns: width width width ...;
```

### Status of Grid Axis (해당 축에 대한 간격 상태 정의)

```
Main Axis
  justify-content: keyword; (space-around, space-evenly, space-between, center, start, end)

Cross Axis
  align-content: keyword;
```

## Item Level

### `grid-column` (해당 아이템이 차지하는 컬럼의 수 정의)

```
grid-column: line number / line number;
or
grid-column: line number / span item number;
```

grid-column-start와 grid-column-end의 축약.

### `grid-row` (해당 아이템이 차지하는 로우의 수 정의)

### `grid-area` (해당 아이템이 차지하는 행과 열의 수 정의)

```
grid-column: grid-row-start / grid-column-start / grid-row-end / grid-column-end;
```

### Naming Grid item (`grid-area`로 해당 아이템에 그리드 이름을 붙여서 컨테이너에서 제어)

: CSS 코드가 아이템이 컨테이너보다 위로 올라가므로, `grid-area`의 슬라이스 방식을 사용하는 것이 올바르다고 봄.

```
container {
  grid-template-areas: myArea, ...
}
```

### Order of Grid Item (`grid-area`로 해당 아이템의 순서나 위치를 정의)

참고로 각 행다마다 정의를 해줘야하고, 특정 위치를 슬라이스를 통해 정의 ('/'로 분리함)

```
grid-area: 1 / 3 / 2 / 4;
```

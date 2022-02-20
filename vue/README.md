# Vue.js

## 디렉티브, 뷰 인스턴스

```js
new Vue({
  el: "selector",
  data: {
    message: "...",
  },
  computed: {
    ...(종속성이 없으면 업데이트 되지 않음) (즉, 종속 대상에 따라 캐싱됌) (Date.now()는 아무것도 의존x)

    fullName: {
      get: function () {},
      set: function () {}
      // vm.fullName = "John Doe" 등으로 사용 가능
    }
  }
  watch: {
    ...(데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 가장 유용)
  }
  methods: {
    ...(computed와 비교되는 점: 렌더링을 할 때마다 항상 함수를 실행)
  },
});
```

`data`: data에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 반응형. (새 속성을 추가하면 변경해도 화면 갱신x)

`Object.freeze()`를 사용하면 기존 속성이 변경되는 것을 막음

인스턴스 속성 `instance.$attr`
데이터 속성 `instance.attr`

### 선언적 렌더링: `v-bind:attr=""`

반응적으로 HTML 속성을 갱신하는데 사용 (ex: `<a v-bind:href="url"...></a>`)

### 조건문: `v-if`

### 반복문: `v-for`

### 사용자 입력 핸들링(이벤트 제어) (단방향): `v-on:event`

`this`: 뷰 인스턴스

### 사용자 입력 핸들링(이벤트 제어) (양방향): `v-model`

### 일회성 보간: `v-once`

데이터 변경 시 업데이트 되지 않는 일회성 보간을 수행할 수 있지만, 같은 노드의 바인딩에도 영향을 미친다는 점을 유의.

## 컴포넌트

`Vue.component("name", { props: array<string>, template: string })`

## 디렉티브

디렉티브의 속성
디렉티브의 속성 값: "표현식" (`v-for` 예외)

`v-bind:attr`

```

```

### 전달 인자

### 동적 전달 인자

표현식을 대괄호로 묶어 디렉티브의 속성으로 사용

```
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>
```

주의!: 동적 전달인자는 null을 제외하고는 string으로 변환될 것으로 예상을 함. 스페이스나 따음표를 포함하지 않는 형식을 사용하거나 계산된 속성으로 대체하는 것이 옳음.

알림!: null은 명시적으로 바인딩을 제거하는데 사용

### 수식어

`.prevent`는 `event.preventDefault()`를 호출하도록 `v-on` 디렉티브에게 알림.

### 약어

`v-bind:attr` - `:attr`, `v-bind:[attr]` - `:[attr]`
`v-on:event` - `@event`

### 리스트 렌더링

1. 인덱스로 배열에 있는 항목을 직접 설정: `vm.$set(vm.items, indexOfItem, newValue)`
2. 배열 길이를 수정: `vm.items.splice(newLength)`

### 객체 변경

1. 객체에 새로운 속성 추가: `vm.$set(vm.obj_attr, keyOfItem, valueOfKey)`

### v-for가 v-if보다 우선권을 가짐. 이에 따라 v-if는 루프가 반복될 때마다 실행됌. 따라서 동시에 사용 추천x

v-for는 :key가 필수적


.exact는 "시스템 수식어"가 정확해야함.
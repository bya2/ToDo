# HOOK

최초에 DOM이 렌더링 된 후에, 변화되는 상태에 따라서 DOM의 어떤 요소를 다시 렌더링하는 것.  
즉, 브라우저 화면의 어떤 요소를 변화시키는 것.

**`React v16.8.0+`**

```
API:
props, state, context, refs, lifecycle
```

### 동기

```
"render props, 고차 컴포넌트"와 같은 패턴은 "컴포넌트 재구성 강요, 코드의 추적 난이도 상향"

HOOK을 사용하여, "컴포넌트로부터 상태 관련 로직을 추상화 가능"
이를 통해, "독립적인 테스트, 재사용"을 가능
"계층의 변화 없이 상태 관련 로직을 재사용할 수 있도록 함"
```

### 상태(State Hook: useState)

### 효과(Effect Hook: useEffect)

`componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 등을 하나의 API로 통합

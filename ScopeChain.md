# 스코프 체인에서의 탐색과 성능

## 용어
```
Scope chain

Execution Context
    Global Execution Context
    Functional Execution Context

Activation Object  
Global Object
```
```
Execution Context
    - 작성된 코드가 실행되는 환경
    - LIFO 구조의 스택
```
## ?
```
메모리 위치를 찾는 탐색 작업
    - 런타임 환경에서 가장 많이 발생하는 브라우저 작업 가운데 자바스크립트의 실행 성능을 저해하는 요인.
```


```
1. Execution Context 실행, 
    JS 엔진이 Scope Chain을 통해 Lexical Scope를 먼저 파악

2. 이를 통해 함수가 중첩 상태일 때 하위 함수에서 상위 함수, 전역 스코프까지 참조
   이를, Scope Chain을 통해 탐색
```

```
Scope Chain:
  JS의 Function을 실행하면서 어떤 속성에 접근해야할 때, 해당 속성을 효율적으로 탐색하도록 속성을 일정한 단위로 분류하고 각 객체에 접근하기 위한 객체의 참조를 특정한 공간에 저장해 두는데, 여기서 공간이 바로 '스코프 체인'

스코프 체인의 구성 요소
    Activation Object
        this(Context Object)
        arguments
        local variable

    Global Object
        this(window, {})
        document
        window
        navigator
        global variable
        global function
        ...

Execution Context:
    함수가 동작하는 환경.
    함수가 실행될 때 생성되고 함수가 종료될 때 소멸.
    함수의 스코프 체인에 대한 참조를 가지고 있음.

함수에서 속성에 접근할 때, 그에 대한 탐색 경로는 [ Execution context > Scope chain > Activation Object > Scope chain > Global Object]



출처: https://12bme.tistory.com/134
```
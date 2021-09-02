# Hoisting

```
JS Engine은 Script를 가져오면 가장 먼저 코드에서 데이터를 위한 메모리를 설정.
```
```
변수의 경우, var은 undefined로 메모리에 저장. 
            let과 const는 초기화되지 않은 상태로 메모리에 저장.
                초기화 전, let과 const 변수를 참조할 경우 ReferenceError 발생. ('TDZ'에 있는 변수에 접근했기 때문)

함수의 경우, 전체 함수에 대한 참조와 함께 저장.
```
```
함수와 변수는 Code를 실행하기 전, Execution Context를 위해 메모리에 저장.
이것을 'Hoisting'이라 한다.
```
```
TDZ(Temporal Dead Zone)
    변수 Lifecycle의 선언 단계과 초기화 단계 사이의 변수에 접근할 수 없는 지점. (초기화되지 않은 변수가 있는 지점)
    (Variable Lifecycle: Declaration phase ~ 'Uninitialized state' ~ Initialization phase)
    
    이를 통해, 선언 전에 변수를 사용하는 것을 비허용.
```


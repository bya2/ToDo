# Javascript

`다시 찾아볼 내용 정리`

CBD(컴포넌트 기반 개발) 방법론을 이용한 SPA(단일 페이지 애플리케이션)

SPA 개발 프레임워크: 리액트, 앵귤러, 뷰, 스벨트 등

CPU - 연산  
메모리 - 기억  
메모리는 메모리 셀(1바이트)의 집합체  
각 셀은 메모리 주소(메모리 공간의 위치)를 가짐

자바스크립트는 메모리 주소를 통해 값에 직접 접근 불가 - 비허용
어차피 메모리 주소는 코드가 실행될 때 메모리의 상황에 따라 임의로 결정되므로 직접 접근하기 어려움

변수: 값을 저장하기 위해 확보한 메모리 공간의 위치에 상징적인 이름을 붙인 것

변수에 값 저장(Write): 할당, 대입, 저장
변수의 값 읽기(Read) : 참조

선언하지 않은 식별자에 접근 -> ReferenceError(참조 에러)

호이스팅: 자바스크립트 엔진은 소스코드를 평가 과정과 실행 과정으로 나눌 수 있는데, 식별자의 선언이 소스코드의 평가 과정에 이루어져서 'undefined'로 초기화되어 변수 선언이 코드의 선두로 끌어올려진 것처럼 동작하는 것

값의 재할당: 새로운 메모리 공간을 확보하고 할당 값을 저장 (사실상 변수에 처음으로 값을 할당하는 것도 재할당임)

자바스크립트는 매니지드 언어이므로 어떤 식별자와도 연결되어 있지 않은 값이 있으면, 가비지 콜렉터에 의해 메모리에서 자동 해제

네이밍 컨벤션

값: 표현식이 평가되어 생성된 결과

리터럴: 사람이 이해할 수 있는 문자, 기호를 사용해 값을 생성하는 표기법

표현식: 값으로 평가될 수 있는 문 (표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조)

토큰: 문법적인 의미를 가지고 있고, 문법적으로 더 나눌 수 없는 코드의 기본 요소
문: 프로그램을 구성하는 기본 단위이자 최소 실행 단위 (여러 토큰으로 구성) (명령문으로도 불리고, 컴퓨터에 내리는 명령임)
프로그램: 문의 집합  
프로그래밍: 문을 작성하고 순서에 맞게 나열

데이터 타입 (7개=원시타입6+객체 타입)

```
원시 타입: number, string, boolean, undefined, null, symbol
객체 타입: Object, Array, Function
```

동적 타이핑(Dynamic typing): 변수 타입이 선언이 아닌 할당에 의해 결정(타입 추론), 재할당에 의해 타입은 언제든지 변경 가능

\*트레이드 오프(trade-off): 두 개의 정책이나 목표 중 하나를 달성하려고 하면 다른 목표의 달성이 늦어지거나 희생되는 모순적 관계

NaN: 산술 연산이 불가능함. (Number.isNaN(x))

## 연산자

==: 값만 같음
===: 값과 타입이 같음

==연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적으로 타입 변환을 통해 타입을 일치시키고 같은 값인지 비교
따라서 ===를 쓰는 것이 안전하고, 더 빠름

논리 연산자는 드 모르간 법칙을 사용하는 것이 남.

지수 연산자: Math.pow(x, y) -> x\*\*y (ES7)

옵셔널 체이닝 연산자(?.)
null 병합 연산자(??)
프로퍼티 삭제(delete)
인스턴스 생성(new)
연결된 인스턴스인지 판별(instanceof)
프로퍼티 존재 확인(in)

## 문

레이블 문: 식별자가 붙은 문

## 타입 변환

명시적 타입 변환 or 타입 캐스팅: 개발자가 의도적으로 타입을 변환

암묵적 타입 변한 or 타입 강제 변환: 표현식을 평가하는 도중 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환

암묵적 타입 변환은 기존의 피연산자 값을 버리고 새로운 타입의 값을 만듬

```
문자열로(암묵적):
1. 심벌 타입을 제외한 모든 타입 + ""; (주체: 전자)
2. 템플릿 리터럴(``)

문자열로(명시적):
1. String(x)
2. Object.prototype.toString
3. 심벌 타입을 제외한 모든 타입 + ""; (주체: 후자)
```

```
숫자로(암묵적):
1. -연산자
2. *연산자
3. /연산자
4. +모든 타입 (심벌 타입제외)

숫자로(명시적):
1. Number(x)
2. parseInt(x), parseFloat(x)
3. +, *
```

```
불린으로(암묵적):
1. 불린 연산자
2. if문이나 제어문(for), 삼항 조건 연산자의 조건식에 표현식

불린으로(명시적):
1. Boolean(x)
2. !!x
```

## 단축 평가

논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는 것.

목적: if문 대체

```
&& -> 두번째 피연산자까지 평가해보아야 표현식을 평가 가능하므로, false와 두번째 피연산자 반환

|| -> 하나만 true로 평가되어도 true를 반환하므로, 먼저 true인 피연산자 반환, 없으면 false

?. -> 좌항이 null이나 undefined => undefined, 아니면 우항 참조 (&&대신 - 0이나 ''는 falsy값으로 동작할 수 있으므로)

?? -> 좌항이 null이나 undefined => 우항 참조, 아니면 좌항 (||대신 - 0이나 ''는 falsy값으로 동작할 수 있으므로)
```

```
ES5-:
var value = elem && elem.value;

ES11:
const value = elem?.value;
```

## 객체

프로퍼티 삭제: `delete obj.prop`

```
객체 프로퍼티 덮어쓰기:
const obj = {
  prop: 1,
  ["prop"]: 2,
}
console.log(obj.a); // 2
```

```
객체 내 메서드 축약 표현(ES6):
const obj = {
  sayHi() {
    ...
  }
}
```

## 참조: 복사

얕은 복사: 동일한 것을 참조

```
const person = {};
const copy = person;
```

깊은 복사: 값을 복사

```
const person = {};
const copy = {...person}
```

## ES6

`객체 내 메서드 축약`

```
const obj = {
  sayHi() {
    ...
  }
}
```

## ES11(ECMAScript2020)

`옵셔널 체이닝 연산자`  
?. -> 좌항이 null이나 undefined => undefined, 아니면 우항 참조 (&&대신 - 0이나 ''는 falsy값으로 동작할 수 있으므로)

`null 병합 연산자`  
?? -> 좌항이 null이나 undefined => 우항 참조, 아니면 좌항 (||대신 - 0이나 ''는 falsy값으로 동작할 수 있으므로)

## URI, URL, URN

`URI`: Scheme(Protocol), Host, Port, Path(Endpoint), Query, Fragment

`URL`: Scheme(Protocol), Host, Port, Path(Endpoint)

`URN`: Host, Port, Path(Endpoint), Query, Fragment

---

## 브라우저 렌더링 과정

`Node.js`: 구글의 v8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경

`파싱`:

```
1. 텍스트 문서(프로그래밍 언어 문법에 맞게 작성)을 읽고 실행하기 위해서 텍스트 문서의 문자열을 토큰으로 분해(어휘를 분석)
2. 토큰의 문법적 의미와 구조를 반영하여 트리 구조의 자료구조인 파스 트리를 생성
```

`파싱`을 완료 후:

```
1. 파스 트리를 기반으로 중간 언어인 바이트코드를 생성하고 실행
```

`렌더링`:

```
HTML, CSS, JS로 작성된 문서를 파싱해서 브라우저에 시각적으로 출력

1. 렌더링에 필요한 리소스를 서버에 요청하고 응답으로 받음.
2. 브라우저의 렌더링 엔진은 리소스를 파싱하여 DOM, CSSOM 등의 파스 트리를 생성하고 이를 결합하여 렌더 트리 생성
3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST를 생성하고 바이트코드로 변환하여 실행.

이 때 자바스크립트는 DOM API를 통해서 DOM이나 CSSOM을 변경할 수 있음. 변경된 DOM, CSSOM은 다시 렌더 트리로 결합됌.

4. 렌더 트리를 기반으로 HTML요소의 레이아웃을 계산하고 브라우저 화면에 HTML요소를 페인팅
```

`DOM`: HTML을 파싱한 결과물, DOM API를 제공
`CSSOM`: CSS를 파싱한 결과물
`AST`: JS를 파싱한 결과물 - DOM API를 통해서 파스 트리 조작 가능

`HTML 파싱 과정`:

```
1. 서버로부터 HTML 문서를 바이트로 받음
2. 바이트를 인코딩해서 문자열로 만들고 토큰으로 분해함
3. 토큰들을 객체로 변환해서 노드 객체를 생성함
4. 노드라는 기본 요소들은 중첩 관계를 가지고, 중첩 관계에 의해 부자 관계가 형성되어 트리 자료구조로 구성됨

link 태그나 script 태그를 만나면 DOM 생성을 일시 중지하고 CSS 파싱 과정이나 JS 파싱 과정을 거친 후, 중단 지점부터 다시 파싱함.
```

`CSS 파싱 과정`: HTML 파싱 과정과 동일(바이트->문자->토큰->노드->CSSOM)

`렌더 트리`는 DOM과 CSSOM이 결합된 트리. 브라우저 화면에 렌더링되지 않는 노드와 CSS에 의해 비표시되는 노드들은 포함되지 않음. (즉, `display:none`, AST는 별개)

`리렌더링` 발생 경우:

```
- JS에 의한 노드 추가 삭제
- 브라우저 창의 리사이징에 의한 뷰포트 크기 변경
- 스타일 변경
```

`JS 파싱 과정`:

```
일단, 자바스크립트 파싱 과정은 브라우저의 렌더링 엔진이 아닌, 자바스크립트 엔진이 처리

1. 문자열을 토큰으로 분해
2. 토큰의 자바스크립트 문법적의 의미와 구조를 반영한 트리 자료구조 생성 (AST)
3. AST를 바이트코드로 변환 후 인터프리터로 실행
```

## 리플로우, 리페인트

`리플로우`:

- 리렌더링 과정에서 렌더 트리를 통해 레이아웃 계산을 다시 하는 것
- 레이아웃에 영향을 주는 변경이 발생한 경우에만 실행

```
노드 추가/삭제
요소 크기/위치 변경
윈도우 리사이징
```

`리페인트`:

- 리렌더링 후 재결합된 렌더 트리를 기반으로 다시 페인트하는 것
- 레이아웃에 변경이 없으면 리페인트만 실행

## HTML 파싱 중단: `<script>`태그의 위치

- DOM은 DOM API를 제공함.
- DOM API를 통해 DOM을 조작하려면 HTML이 파싱되어 생성된 요소가 있어야함.
- [1] `<script>`태그가 코드 상 요소보다 위에 있다면 에러가 발생할 수 있음.
- [2] JS 로딩/파싱/실행으로 인해 HTML 요소들의 렌더링에 지장받는 일이 발생하지 않으므로 페이지 로딩 시간이 단축될 수 있음.
- 따라서 `<body>`태그 가장 아래에 위치시키는 것이 좋음.

## HTML 파싱 중단: `<script>`태그의 비동기 속성

- `async`와 `defer` 어트리뷰트를 사용하면 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행

`async`:

```
1. HTML 파싱과 외부 JS 파일의 로드가 동시 진행
2. JS의 파싱과 실행은 JS 파일의 로드가 완료된 직후에 진행되므로, 이 때 HTML 파싱이 중단됨
```

`defer`:

```
1. HTML 파싱과 외부 JS 파일의 로드가 동시 진행
2. JS 파싱과 실행은 HTML 파싱이 완료된 직후에 진행 (DOM 생성이 완료된 직후: 이 때 DOMContentLoaded 이벤트 발생) - IE10 이상에서 지원

로드 자체가 HTML 파싱과 동시에 진행된다는 것에 의의가 있음
```

---

## DOM 구조

`문서 노드`:

- 참조: window.document
- 브라우저 환경의 모든 JS 코드는 script 태그에 의해 분리되어 있어도 하나의 전역 객체(window)를 공유

`요소 노드`

`속성 노드`

- 부모 노드와 연결되어 있지 않고, `요소 노드`에만 연결된 상태
- `속성 노드`를 참조하려면 `요소 노드`에 먼저 접근 필요

`텍스트 노드`

`노드 객체의 상속 구조`:

- 인터페이스 구조

```
Object (객체)
  EventTarget (이벤트를 발생시키는 객체)
    Node (트리 자료구조의 노드 객체) - 트리 탐색 기능, 노드 정보 제공 기능
      Document
        HTMLDocument
      Element (브라우저가 렌더링할 수 있는 '웹 문서의 요소'를 표현하는 객체)
        HTMLElement (웹 문서 요소 중에서 'HTML 요소'를 표현하는 객체) - HTML 요소가 갖는 공통적인 기능 제공 (style 프로퍼티 등)
          HTMLHtmlElement
          HTMLHeadElement
          HTMLMetaElement
          MTML...
          HTMLInputElement (HTML 요소 중에서 'input 요소'를 표현하는 객체)
      Attr
      CharacterData
        Text
        Comment
```

- 프로토타입 체인 관점에서 살펴봐야함:

```
Object.prototype
  EventTarget.prototype
    Node.prototype
      Element.prototype
        HTMLElment.prototype
          HTMLInputElement.prototype
            input 객체
```

`요소 노드 취득`:

- 아이디: `Document.prototype.getElementById` (return: 1개 or null) (HTML 요소에 id 속성을 부여하면 id값과 동일한 이름의 전역 변수 암묵적으로 선언되고 해당 노드 객체가 할당됨, id값과 동일한 이름의 전역 변수가 이미 선언되어 있으면 재할당되지는 않음. 그래서 1개만 반환됨)
- 태그 : `Document.prototype.getElementsByTagName`, `Element.prototype.getElementsByTagName` (return: HTMLCollection 객체)
- 클래스: `Document.prototype.getElementsByClassName`, `Element.prototype.getElementsByClassName` (return: HTMLCollection 객체)
- 선택자: `Document.prototype.querySelector`, `Element.prototype.querySelector` (return 1개 or null)
- 선택자: `Document.prototype.querySelectorAll`, `Element.prototype.querySelectorAll` (return: NodeList 객체)

- Document.prototype에 정의된 메서드: DOM 전체에서 요소 노드를 탐색하여 반환 (문서 노드 객체를 통해 호출)
- Element.prototype에 정의된 메서드: 특정 요소 노드의 자손 노드 중에서 탐색하여 반환 (요소 노드 객체를 통해 호출)

- querySelector... 메서드는 getElementsBy... 메서드보다 다소 느리나, 구체적인 조건과 일관된 방식으로 요소 노드 취득이 가능
- 아이디나 선택자를 이용해서 요소 노드를 취득하는 것이 권장됨.

`DOM 컬렉션 객체`:

- Live 객체: 노드 객체의 상태 변화를 실시간으로 반영하는 객체
- HTMLCollection 객체: 유사 배열 객체이자 이터러블, 항상 Live 객체 (순회할 때 주의해야함)
- NodeList 객체: 유사 배열 객체이자 이터러블, non-live 객체 (경우에 따라 다름, 노드를 탐색할 때 쓰이는 childNodes 프로퍼티가 반환하는 NodeList 객체)
- 둘 다 예상과 다르게 동작할 때가 있으므로 노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection 객체와 NodeList 객체를 배열로 변환하여 사용하는 것을 권장 (스프레드 문법 or Array.from 메서드)

`노드 탐색`:

```
Node.prototype.parentNode
Node.prototype.previousSibling
Node.prototype.nextSibling
Node.prototpye.firstChild
Node.prototpye.lastChild
Node.prototpye.childNodes

Element.prototpy.previousElementSibling
Element.prototpy.nextElementSibling
Element.prototpy.firstElementChild
Element.prototpy.lastElementChild
Element.prototpy.children
```

`취득 여부, 존재 확인`:

- 특정 요소 취득 가능 여부 메서드: `Element.prototype.matches`
- 자식 노드 존재 확인: `Node.prototype.hasChildNodes` (텍스트 노드 포함 검색) (return: true|false)
- 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지 확인: `children.length`, `Element.prototpye.childElementCount`

`노드 정보`:

- 노드 객체 종류: `Node.prototype.nodeType`
- 노드 이름 문자열: `Node.prototype.nodeName`

`텍스트 노드 접근, 텍스트 조작`:

- 접근: `Node.prototype.firstChild`
- `Node.prototype.nodeValue`: 해당 노드의 텍스트 취득. firstChild 필요
- `Node.prototype.textContent`: HTML 마크업을 무시하고 모든 자손 노드의 텍스트를 취득하고 변경
- `Node.prototype.innerText`: CSS를 고려하기 때문에 예상치 못한 동작이 있을 수 있음 (textContent 프로퍼티와 유사)

---

## HTTP 1.1, HTTP 2.0

`HTTP 1.1`:

```

- 커넥션당 하나의 요청과 응답만 처리
- HTML 문서 내에 포함된 여러 개의 리소스 요청(CSS 파일을 로드하는 link 태그, 이미지 파일을 로드하는 img 태그, JS를 로드하는 script 태그 등에 의한)이 개별적으로 전송되고, 응답 또한 개별적으로 전송
- 리소스 동시 전송이 불가능해서 요청할 리소스의 개수에 비례해서 응답 시간도 증가

```

`HTTP 2.0`:

```

- 커넥션당 여러 개의 요청과 응답 처리
- 리소스 동시 전송 가능 (1.1보다 페이지 로드 속도가 1.5배 정도 빠름)

```

```

```

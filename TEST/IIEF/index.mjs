// 중첩 객체에서 컨텍스트 객체 적용
// 객체 내에서 선언 후 자동 실행 여부

import go from './go.mjs';

const obj = {
  go: go,
}

obj.go();
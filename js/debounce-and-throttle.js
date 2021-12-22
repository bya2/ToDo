// 디바운스:
// 짧은 시간 간격으로 이벤트가 연속해서 발생하면 이벤트 핸들러를 호출하지 않다가 일정 시간이 경과한 이후에 이벤트 핸들러가 한 번만 호출되도록 하는 기법.

const debounce = (callback, delay) => {
  let timer_id;
  // timer_id를 기억하는 클로저 반환
  return (e) => {
    // delay가 경과하기 이전에 이벤트가 발생하면 이전 타이머를 취소하고 새로운 타이머를 재설정
    // delay보다 짧은 간격으로 이벤트가 발생하면 callback은 호출되지 않음
    if (timer_id) clearTimeout(timer_id);
    timer_id = setTimeout(callback, delay, e);
  };
};

/**
 * $input.oninput = debounce(e => {
 *  $msg.textContent = e.target.value;
 * }, 300)
 */

// 만약 input의 이벤트 핸들러에서 사용자가 입력 필드에 입력한 값으로 Ajax 요청과 같은 무거운 처리를 수행한다면 사용자가 아직 입력을 완료하지 않았어도 Ajax 요청이 전송될 것임.
// 이는 서버에 부담을 주는 불필요한 처리이므로,
// 사용자가 입력을 완료했을 때 한 번만 Ajax 요청을 전송하는 것이 바람직함.

// 용도:
// resize 이벤트 처리,
// input 요소에 입력된 값으로 ajax 요청하는 입력 필드 자동완성 UI 구현,
// 버튼 중복 클릭 방지 처리,

// 실무 사용:
// Underscore의 debounce 함수,
// Lodash의 debounce 함수,

////////////////////////////////////////

// 스로틀:
// 짧은 시간 간격으로 이벤트가 연속해서 발생하더라도 일정 시간 간격으로 이벤트 핸들러가 최대 한 번만 호출되록하는 기법.

const throttle = (callback, delay) => {
  let timer_id;
  return (e) => {
    if (timer_id) return;
    timer_id = setTimeout(
      () => {
        callback(e);
        timer_id = null;
      },
      delay,
      e
    );
  };
};

// 용도:
// scroll 이벤트 처리,
// 무한 스크롤 UI 구현,

// 실무 사용:
// Underscore의 throttle,
// Lodash의 throttle,

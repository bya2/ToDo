// clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.

// 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.

// 같은 이름을 가진 의상은 존재하지 않습니다.

// clothes의 모든 원소는 문자열로 이루어져 있습니다.

// 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.

// 스파이는 하루에 최소 한 개의 의상은 입습니다.

const solution = clothes => {
  return Object.values(clothes.reduce((obj, t) => (obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1, obj), {})).reduce((a, b) => a*(b+1), 1) - 1;
}

const args = [
  [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]],
  [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]
]

args.forEach(el => console.log(solution(el)));
// 5
// 3
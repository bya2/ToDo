// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.

// completion의 길이는 participant의 길이보다 1 작습니다.

// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.

// 참가자 중에는 동명이인이 있을 수 있습니다.

const solution = (participant, completion) => {
  const dic = completion.reduce((obj, t) => (obj[t] = obj[t] ? obj[t] + 1 : 1, obj), {});
  return participant.find(el => {
    if (dic[el]) dic[el] -= 1;
    else return true;
  })
}


const args = [
  {
    participant: ["leo", "kiki", "eden"],
    completion: ["eden", "kiki"],
  }, 
  {
    participant: ["marina", "josipa", "nikola", "vinko", "filipa"],
    completion: ["josipa", "filipa", "marina", "nikola"],
  },
  {
    participant: ["mislav", "stanko", "mislav", "ana"],
    completion: ["stanko", "ana", "mislav"],
  },
];

args.forEach(el => console.log(solution(el.participant, el.completion)));
// "leo"
// "vinko"
// "mislav"
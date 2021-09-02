const solution = (genres, plays) => {
  const dic = genres.reduce((obj, t, i) => {
    if (obj[t]) {
      obj[t][0].push([plays[i], i]);
      obj[t][1] += plays[i];
    }
    else obj[t] = [[[plays[i], i]], plays[i]];
    return obj;
  }, {})

  const list = Object.values(dic);
  list.sort((a, b) => b[1] - a[1]).forEach(el => el[0].sort((a, b) => a[1] - b[1]).sort((a, b) => b[0] - a[0]));

  const answer = [];
  for (let i=0; i<list.length; i+=1) {
    for (let j=0; j<list[i][0].length; j+=1) {
      answer.push(list[i][0][j][1]);
      if (j==1) break;
    }
  }
  return answer;
}


const args = [
  {
    genres: ["classic", "pop", "classic", "classic", "pop"],
    plays: [500, 600, 150, 800, 2500],
  },
]

args.forEach(el => console.log(solution(el.genres, el.plays)));
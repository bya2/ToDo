const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `10 10 3
13 2 5 11 7 8 2 4 9 10
1
2
3
8
9
10
11
16
17
49
`
).split('\n');

console.log(stdin);


const p11720 = function (n, num) {

}

const p11654 = function(_char) {
  if (typeof _char !== 'string') _char+=""
  return _char.charCodeAt(0);
};

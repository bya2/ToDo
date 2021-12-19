for (var i=0; i<3; i+=1) {
  setTimeout(() => {
    console.log(i);
  }, i*1000);
}

console.log('------------------------');

for (let i=0; i<3; i+=1) {
  setTimeout(() => {
    console.log(i);
  }, i*1000);
}

console.log('------------------------');

var arr = [];
for (var i=0; i<3; i+=1) {
  arr[i] = function () {
    console.log(i);
  }
}

for (var j=0; j<3; j+=1) {
  arr[j]();
}

console.log('------------------------');

let arr2 = [];
for (let i=0; i<3; i+=1) {
  arr2[i] = function () {
    console.log(i);
  }
}

for (let j=0; j<3; j+=1) {
  arr2[j]();
}

console.log('------------------------');
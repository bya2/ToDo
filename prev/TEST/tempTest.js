const obj = {
  a: 1,
  b: 2,
  c: 3
}

console.log(obj.constructor.values(obj));

function _fn_ok(obj) {
  obj.d = 8;
  // return obj;
}

// console.log(obj);
console.log(_fn_ok(obj));
console.log(obj);


console.log({}.__proto__);
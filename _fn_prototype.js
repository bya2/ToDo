// const _fn_ok = (name) => {
//   this.name = name;
//   console.log(1);
//   return this;
// }

function _fn_ok(name) {
  this.name = name;
  return this;
}

console.log(_fn_ok('lee'));

console.log(_fn_ok.prototype);
console.log(_fn_ok.__proto__);

const obj = {
  age: 20,
  ok: 11,
}

const log = _fn_ok.call(obj, 'kim');

console.log(log);

const obj2 = {
  okok: 1,
  _fn_ok2: function (name) {
    this.name = name;
    return this;
  }
}

const ins = new obj2._fn_ok2('kim');

console.log(ins.__proto__);
console.log(ins.prototype);

console.log(ins);

console.log(obj2._fn_ok2.__proto__);
console.log(obj2._fn_ok2.prototype);


console.log(obj2._fn_ok2('kim'))

ins.a = 'kkk';
console.log(obj2._fn_ok2('kim'))
console.log(ins.constructor('okok'));
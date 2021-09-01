function _fn_ok(a) {
  this.a = a;
}

const ok = new _fn_ok(1);

console.log(ok.__proto__);
console.log(Object.prototype);
console.log(ok.a);

const ok1 = new Object();

console.log(ok1.__proto__);
console.log(ok1.prototype);


console.log('dk', Object.getPrototypeOf(ok1));
console.log('dk', Object.getPrototypeOf(ok));

const _obj_jh = {
  a: 1,
  b: function () {
    return this.c;
  },
  c: 2,
}

console.log('//////////////////');

function _fn_jh(o) {
  const s = 1;
  this.s = o;
  return this.a;
}

const call_jh = _fn_jh.call(_obj_jh, 3);

console.log(call_jh);

_fn_jh.prototype.kim = 'dkfjkd';
_fn_jh.prototype.lee = '1202';

const jh = new _fn_jh(13);

console.log(_fn_jh.prototype);
console.log(jh.prototype);
console.log(jh.__proto__);

console.log(jh);


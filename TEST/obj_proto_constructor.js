function _fn_ok(name) {
  this.name = name;
  console.log('this:', this.name);
  console.log('this:', this.age);
  return 'ok';
}

const obj1 = {
  age: 20,
};

const _fn_ok2 = _fn_ok.bind(obj1);

console.log(_fn_ok2('lee'));
console.log(_fn_ok2.constructor);

console.log('1/////')

const ok2 = new _fn_ok2('kim');

console.log(ok2);
console.log(ok2.constructor)
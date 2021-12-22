// 교집합
Set.prototype.intersection = function (_set) {
  return new Set([...this].filter((v) => _set.has(v)));
};

// 합집합
Set.prototype.union = function (_set) {
  return new Set([...this, ..._set]);
};

// 차집합
Set.prototype.difference = function (_set) {
  return new Set([...this].filter((v) => !_set.has(v)));
};

// 부분 집합인지 확인
Set.prototype.isSuperset = function (_subset) {
  const supersetArr = [...this];
  return [..._subset].every((v) => supersetArr.includes(v));
};

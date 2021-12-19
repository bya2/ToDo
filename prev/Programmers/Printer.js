const solution = (priorities, location) => {
  let J = priorities.shift(),
      count = 0;

  if (priorities == false) return 1;

  let max = Math.max(...priorities);

  if (J == max && location == 0) return ++count;

  while (1) {
    location--;
    if (J == max) {
      count++;
      if (location == -1) return count;
      max = Math.max(...priorities);
    } else {
      priorities.push(J);
      if (location == -1) location = priorities.length - 1;
    }
    J = priorities.shift();
  }
}

let priorities = [0],
    location = 0;

console.log('***Ans.', solution(priorities, location), '\n\n'); // Ans: 1

priorities = [9, 9, 9, 9, 9, 1];
location = 5;

console.log('***Ans.', solution(priorities, location)); // Ans: 5
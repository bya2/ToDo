const solution = (bridge_length, weight, truck_weights) => {
  let sec = 0;

  let truck;

  let numOnBridge = 0,
      sumOnBridge = 0,
      all_num = truck_weights.length,
      progress = 0;

  const onBridge = [],
        secStarts = [];

  while (progress < all_num) {
    sec++;

    // 트럭이 다리를 건넜을 시간이 됬는지
    if (sec == secStarts[0] + bridge_length) {
      numOnBridge--;
      sumOnBridge -= onBridge.shift();
      secStarts.shift();
      progress++;

      if (progress == all_num) {
        return sec
      }
    }

    // 다리에 대기하고 있는 트럭이 있는지
    if (!truck) {
      truck = truck_weights.shift(); // 대기 트럭이 다리로 이동
    }

    // 다리로 이동할 대기 트럭이 있다면
    if (truck) {
      // 다리에 트럭이 들어갈 수 있는지, 트럭의 무게가 다리에 들어가기에 적절한지
      if (numOnBridge + 1 <= bridge_length && sumOnBridge + truck <= weight) {
        numOnBridge++;
        sumOnBridge += truck;
        onBridge.push(truck);
        truck = 0; // 더이상 다리에 대기하고 있는 트럭이 없음.
        secStarts.push(sec);
      } 
    }
  }
}

console.log(
  solution(2, 10, [7, 4, 5, 6]) + 's\n',// 8s
  solution(100, 100, [10]) + 's\n',// 101s
  solution(100, 100, [10,10,10,10,10,10,10,10,10,10]) + 's'// 110s
)
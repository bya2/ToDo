const solution = (bridge_length, weight, truck_weights) => {
  let sec = 0, // 시간
      qu = [[0, 0]], // 다리를 지나는 트럭(트럭 무게, 도착 시간)
      weightOnBridge = 0; // 다리 위의 무게

  // 다리를 지나가고 있는 트럭과 대기하고 있는 트럭이 모두 0일 때까지 루프
  while (qu.length > 0 || truck_weights.length > 0) {
    // 해당 트럭의 도착 시간과 현재 시간이 같다면 큐에서 내보낸다.
    // 다리 위 트럭 무게의 합에서 해당 트럭의 무게를 뺀다.
    if (qu[0][1] === sec) {
      weightOnBridge -= qu.shift()[0];
    }

    // 트럭의 무게가 다리에 들어가기에 적합하다면,
    // 다리 위 트럭 무게의 합에 더하고,
    // 큐의 끝에 트럭을 추가한다.
    if (weightOnBridge + truck_weights[0] <= weight) {
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), sec + bridge_length]);
    } else {
      // 트럭이 다리에 못올라간다면,
      // 첫번째 트럭이 빠지도록 그 시간의 1초 전으로 점프한다.(큐에서 내보내는 시간과 맞추기 위해서)
      if (qu[0]) sec = qu[0][1] - 1;
    }
    
    // 시간 업데이트
    sec++;
  }
  
  return sec;
}




const solution2 = (bridge_length, weight, truck_weights) => {
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
    if (sec === secStarts[0] + bridge_length) {
      numOnBridge--;
      sumOnBridge -= onBridge.shift();
      secStarts.shift();
      progress++;

      if (progress === all_num) {
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
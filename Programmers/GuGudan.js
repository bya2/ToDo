(() => {
  for (let i=1; i<10; i+=1) {
    for (let j=1; j<6; j+=1) {
      process.stdout.write(`${j}x${i}=${i*j > 9 ? i*j : '0'+i*j}\t`)
    }
    console.log();
  }
  for (let i=6; i<10; i+=1) {
    for (let j=1; j<10; j+=1) {
      process.stdout.write(`${i}x${j}=${i*j > 9 ? i*j : '0'+i*j}\t`)
    }
    console.log();
  }
})();
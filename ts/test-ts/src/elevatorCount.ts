const elevatorCount = (values: number[]) => {
  let results = [];
  results.push(Math.abs(1 - values[0]));
  for (let i = 0; i < values.length; i++) {
    if (isNaN(values[i + 1])) break;
    results.push(Math.abs(values[i] - values[i + 1]));
  }
  console.log(
    results.reduce((a, b) => {
      return a + b;
    }, 0)
  );
};

console.log(elevatorCount([3, 1, 4]));

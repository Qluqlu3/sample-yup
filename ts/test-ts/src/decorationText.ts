const decorationText = (value: string) => {
  let sign = '+';
  for (let i = 0; i < value.length + 1; i++) {
    sign += '+';
  }
  console.log(sign);
  sign = '+';
  console.log(sign + value + sign);
  for (let i = 0; i < value.length + 1; i++) {
    sign += '+';
  }
  console.log(sign);
};

console.log(decorationText('TEXT'));

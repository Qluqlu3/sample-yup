const rotateNumber = (value: string): number => {
  let result = value;
  let list: string | string[] = [];
  do {
    list = result.toString().split('');
    result = String(Number(list.join('')) + Number(list.reverse().join('')));
    list = result.toString();
  } while (Number(result) !== Number(result.toString().split('').reverse().join('')));
  return Number(result);
};

console.log(rotateNumber('261'));

const rotateNumber = (value) => {
  let result = value;
  let list = '';
  do {
    list = result.toString().split('');
    result = String(Number(list.join('')) + Number(list.reverse().join('')));
    list = result.toString();
  } while (Number(result) !== Number(result.toString().split('').reverse().join('')));
};

console.log(rotateNumber(261));

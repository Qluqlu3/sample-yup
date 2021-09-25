const searchDislikeNumber = (value: number, target: string) => {
  if (/[value]/.test(target)) {
    console.log('なし');
  } else {
    console.log('あり');
  }
};

console.log(searchDislikeNumber(4, '12345'));

console.log(searchDislikeNumber(4, '93210'));

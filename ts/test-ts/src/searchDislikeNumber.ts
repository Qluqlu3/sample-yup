const searchDislikeNumber = (value: string, target: string) => {
  const reg = new RegExp(value);
  if (reg.test(target)) {
    console.log('あり');
  } else {
    console.log('なし');
  }
};

console.log(searchDislikeNumber('4', '45759'));

console.log(searchDislikeNumber('4', '93210'));

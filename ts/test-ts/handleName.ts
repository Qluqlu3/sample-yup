const deleteVowels = (value: string): string => {
  let result = '';
  let target = value.split('');
  for (let i = 0; i < value.length; i++) {
    result += target[i].replace(/[aiueoAIUEO]/, '');
  }
  return result;
};

console.log(deleteVowels('experience'));

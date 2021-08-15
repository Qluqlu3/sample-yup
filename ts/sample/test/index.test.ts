import { Sample } from '../src/index';

describe('sendMessage', () => {
  test('sendMessage', () => {
    expect(new Sample('name').sendMessage()).toBe('name');
  });
});

describe('FizzBuzz', () => {
  test('FizzBuzz', () => {
    const sample = new Sample('name');
    expect(sample.checkFizzBuzz(3)).toBe('Fizz');
    expect(sample.checkFizzBuzz(5)).toBe('Buzz');
    expect(sample.checkFizzBuzz(15)).toBe('FizzBuzz');
    expect(sample.checkFizzBuzz(17)).toBe('');
  });
});

describe('split', () => {
  test('split', () => {
    const sample = new Sample('name');
    expect(sample.splitComma('a,b,c,ddddd,ffffff,zzzzzz,x')).toEqual(['a', 'b', 'c', 'ddddd', 'ffffff', 'zzzzzz', 'x']);
  });
});

import { Sample } from '../src/index';

describe('greet', () => {
  test('should say hello to Tom.', () => {
    expect(new Sample('name').sendMessage()).toBe('name');
  });
});

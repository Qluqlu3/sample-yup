export class Sample {
  private _name: string;
  // public price: number;

  constructor(name: string) {
    this._name = name;
    // this.price = price;
  }

  sendMessage() {
    return this._name;
  }

  checkFizzBuzz(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return '';
  }

  splitComma(list: string): string[] {
    return list.split(',');
  }
}

export const calcNum = (num1: number, num2: number): number => {
  return num1 + num2;
};

export const romanize = (num: number): string => {
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = '';
  let i = 0;
  while (num > 0) {
    while (num >= decimal[i]) {
      result += roman[i];
      num -= decimal[i];
    }
    i++;
  }
  return result;
};

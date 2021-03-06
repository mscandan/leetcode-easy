export const addBinary = (a: string, b: string): string => {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0;
  let res = '';
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += Number(a.charAt(i));
    if (j >= 0) sum += Number(b.charAt(j));
    res += sum % 2;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }

  if (carry) res += carry.toString();
  return res.split('').reverse().join('');
};

const testCases = [
  {
    a: '11',
    b: '1',
    expected: '100',
  },
  {
    a: '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    b: '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011',
    expected: '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000',
  },
];

testCases.forEach(testCase => {
  const res = addBinary(testCase.a, testCase.b);
  if (res !== testCase.expected) {
    console.log('failed\nexp: ', testCase.expected, '\ngot: ', addBinary(testCase.a, testCase.b));
  }
});

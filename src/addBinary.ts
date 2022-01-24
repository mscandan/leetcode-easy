export const addBinary = (a: string, b: string): string => {
  const numA = parseInt(a, 2);
  const numB = parseInt(b, 2);
  return (numA + numB).toString(2);
};

const testCases = [
  {
    a: '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    b: '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011',
    expected: '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000',
  },
];

testCases.forEach(testCase => {
  console.log('result: ', addBinary(testCase.a, testCase.b) === testCase.expected);
  console.log('exp: ', testCase.expected, '\ngot: ', addBinary(testCase.a, testCase.b));
});

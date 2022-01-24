// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

export const validParentheses = (str: string): boolean => {
  if (str.length === 1 || !str) return false;
  const stack: Array<string> = [];
  const closings = [')', '}', ']'];
  const map = new Map<string, string>([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  for (let i = 0; i < str.length; i++) {
    if (!closings.includes(str.charAt(i))) stack.push(str.charAt(i));
    else {
      const lastOpening = stack.pop();
      if (lastOpening !== map.get(str.charAt(i))) return false;
    }
  }
  return stack.length === 0;
};

const testCases = ['()', '()[]{}', '(]', '', '('];
testCases.forEach(testCase => console.log(validParentheses(testCase)));

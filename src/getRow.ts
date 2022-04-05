export const getRow = (rowIndex: number): number[] => {
  const row: number[] = Array(rowIndex + 1).fill(1);

  for (let i = 2; i < rowIndex + 1; i++) {
    for (let j = 1; j < i; j++) {
      row[i - j] += row[i - j - 1];
    }
  }

  return row;
};

console.log(getRow(3));

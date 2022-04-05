export const generate = (numRows: number): number[][] => {
  if (numRows === 0) return [];

  const pascalsTriangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
      if (i === j || j === 0) row.push(1);
      else row.push(pascalsTriangle[i - 1][j] + pascalsTriangle[i - 1][j - 1]);
    }
    pascalsTriangle.push(row);
  }

  return pascalsTriangle;
};

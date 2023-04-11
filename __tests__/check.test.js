import Sudoku from './../src/check.js';

describe('Sudoku', () => {

  test('should create a row with a length of 9', () => {
    const row1 = [1,2,3,4,5,6,7,8,9];
    const rows = [];
    rows.push(row1);
    const sudoku = new Sudoku(rows);
    expect(sudoku.rows[0].length).toEqual(9);
  });

  test('should create nine rows', () => {
    const row1 = [1,2,3,4,5,6,7,8,9];
    const row2 = [1,2,3,4,5,6,7,8,9];
    const row3 = [1,2,3,4,5,6,7,8,9];
    const row4 = [1,2,3,4,5,6,7,8,9];
    const row5 = [1,2,3,4,5,6,7,8,9];
    const row6 = [1,2,3,4,5,6,7,8,9];
    const row7 = [1,2,3,4,5,6,7,8,9];
    const row8 = [1,2,3,4,5,6,7,8,9];
    const row9 = [1,2,3,4,5,6,7,8,9];
    const rows = [];
    rows.push(row1, row2, row3, row4, row5, row6, row7, row8, row9)
    const sudoku = new Sudoku(rows);
    expect(sudoku.rows.length).toEqual(9);
  });
});
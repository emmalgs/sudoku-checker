import Sudoku from './../src/check.js';

describe('Sudoku', () => {

  test('should create a row with a length of 9', () => {
    const row1 = [1,2,3,4,5,6,7,8,9];
    const sudoku = new Sudoku(row1);
    expect(sudoku.row1.length).toEqual(9);
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
    const sudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);
    expect(Object.keys(sudoku).length).toEqual(9);
  });
});
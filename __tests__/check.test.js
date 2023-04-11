import Sudoku from './../src/check.js';

describe('Sudoku', () => {

  test('should create a row with a length of 9', () => {
    const row1 = [1,2,3,4,5,6,7,8,9]
    const sudoku = new Sudoku(row1);
    expect(sudoku.row1.length).toEqual(9);
  })
})
import Sudoku from './../src/js/sudoku.js';
import Row from '../src/js/row.js';
import Column from '../src/js/columns.js';

describe('Sudoku', () => {
  let row;
  let newRow
  let sudoku;

  beforeEach(() => {
    row = [1,2,3,4,5,6,7,8,9];
    newRow = new Row(row);
    sudoku = new Sudoku();
    sudoku.addRow(newRow);
  })

  test('should add row to instance of sudoku that is an object that includes an array of length 9', () => {
    expect(sudoku.rows).toEqual({1: {row: [1,2,3,4,5,6,7,8,9]}});
  });

  test('should have property of id', () => {
    expect(sudoku.id).toEqual(1);
  });

  test('should assign a row id to all 9 rows', () => {
    for (let i = 0; i < 8; i++) {
      sudoku.addRow(newRow);
    }
    expect(Object.keys(sudoku.rows)).toEqual(["1","2","3","4","5","6","7","8","9"]);
  });

  test('should make 9 columns with ids of 1-9 based on rows', () => {
    for (let i = 0; i < 8; i++) {
      sudoku.addRow(newRow);
    }
    sudoku.makeColumns();
    console.log(sudoku.columns)
    expect(Object.keys(sudoku.columns)).toEqual(["1","2","3","4","5","6","7","8","9"]);
  });


  test('should check if columns are correct and assign property of correct to false', () => {
    sudoku.makeColumns();
    expect(sudoku.columns[1].correct).toEqual(false);
  });
});
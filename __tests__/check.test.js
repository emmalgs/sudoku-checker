import Sudoku from './../src/check.js';
import { Row } from './../src/check.js';


describe('Row', () => {
  let row;
  let newRow;

  beforeEach(() => {
    row = [1,2,3,4,5,6,7,8,9]
    newRow = new Row(row)
  })

  test('should create an instance of row object with an array of length 9 as the value for row', () => {
    expect(newRow).toEqual({ row: [1,2,3,4,5,6,7,8,9] })
  });

  test('should return true when .checkRows() is called on instance of row', () => {
    newRow.checkRows()
    expect(newRow.correct).toEqual(true);
  });

  test('should return false if a row has a repeat number', () => {
    newRow.row = [1,2,3,3,4,5,6,7,8]
    newRow.checkRows()
    expect(newRow.correct).toEqual(false);
  });
})

describe('Sudoku', () => {
  let row1;
  let row2;
  let row3;
  let row4;
  let row5;
  let row6;
  let row7;
  let row8;
  let row9;
  let rows;
  let sudoku;

  beforeEach(() => {
    row1 = [1,2,3,4,5,6,7,8,9];
    row2 = [1,2,3,4,5,6,7,8,9];
    row3 = [1,2,3,4,5,6,7,8,9];
    row4 = [1,2,3,4,5,6,7,8,9];
    row5 = [1,2,3,4,5,6,7,8,9];
    row6 = [1,2,3,4,5,6,7,8,9];
    row7 = [1,2,3,4,5,6,7,8,9];
    row8 = [1,2,3,4,5,6,7,8,9];
    row9 = [1,2,3,4,5,6,7,8,9];
    rows = [];
    rows.push(row1, row2, row3, row4, row5, row6, row7, row8, row9);
    sudoku = new Sudoku(rows)
  })

  test('should create a row with a length of 9', () => {
    expect(sudoku.rows[0].length).toEqual(9);
  });

  test('should create nine rows', () => {
    expect(sudoku.rows.length).toEqual(9);
  });

  test('should return an array when columns are called', () => {
    expect(Array.isArray(sudoku.columns)).toEqual(true);
  });

  test('should create columns array when method .makeColumns() is called on instance of sudoku object', () => {
    sudoku.makeColumns();
    expect(Array.isArray(sudoku.columns)).toEqual(true);
  });

  test('should create 9 arrays inside column array when .makeColumns() is called on instance of sudoku object', () => {
    sudoku.makeColumns();
    expect(sudoku.columns.length).toEqual(9);
  });

  test('should create 9 arrays inside column array, with each array 9 in length when .makeColumns() is called on instance of sudoku object', () => {
    sudoku.makeColumns();
    expect(sudoku.columns[0].length).toEqual(9);
  });


});
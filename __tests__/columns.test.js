import Column from "../src/js/columns.js";

describe('Column', () => {
  let column;
  let newColumn;

  beforeEach(() => {
    column = [1,2,3,4,5,6,7,8,9];
    newColumn = new Column(column);
  });

  test('should create an instance of column object with an array of length 9 as the value for column', () => {
    expect(newColumn).toEqual({ column: [1,2,3,4,5,6,7,8,9] })
  });

  test('should return true when .checkColumns() is called on instance of column', () => {
    newColumn.checkColumns()
    expect(newColumn.correct).toEqual(true);
  });

  test('should return false if a column has a repeat number', () => {
    newColumn.column = [1,2,3,3,4,5,6,7,8]
    newColumn.checkColumns()
    expect(newColumn.correct).toEqual(false);
  });
})
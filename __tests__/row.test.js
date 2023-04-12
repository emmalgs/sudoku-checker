import Row from "../src/js/row.js";

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
    expect(newRow.correct).toEqual('Correct');
  });

  test('should return false if a row has a repeat number', () => {
    newRow.row = [1,2,3,3,4,5,6,7,8]
    newRow.checkRows()
    expect(newRow.correct).toEqual('Wrong!');
  });
})
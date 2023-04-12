export default class Sudoku {
  constructor() {
    this.rows = {};
    this.columns = {};
  }

  addRow(row) {
    let id = 1;
    this.rows[id] = row;
  }
  
  makeColumns() {

  }
}
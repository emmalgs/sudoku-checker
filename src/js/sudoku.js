export default class Sudoku {
  constructor() {
    this.rows = {};
    this.columns = {};
    this.id = 0
  }

  addRow(row) {
    this.rows[this.assignId()] = row;
  }

  assignId() {
    if (this.id <= 9) {
      this.id++;
    } else { this.id = 0 }
    return this.id
  }
  
  makeColumns() {

  }
}
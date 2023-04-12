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
    let ids = Object.keys(this.rows)
    for (let i = 0; i < 9; i++) {
      this.columns[i + 1] = ids.map((id) =>
        this.rows[id].row[i]);
    }
  }
}
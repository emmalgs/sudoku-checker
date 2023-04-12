import Column from "./columns.js";

export default class Sudoku {
  constructor() {
    this.rows = {};
    this.columns = {};
    this.id = 0;
  }

  addRow(row) {
    this.rows[this.assignId()] = row;
  }

  assignId() {
    this.id++;
    return this.id;
  }
  
  makeColumns() {
    let ids = Object.keys(this.rows);
    for (let i = 0; i < 9; i++) {
      this.columns[i + 1] = new Column(ids.map((id) =>
        this.rows[id].row[i]));
    }
  }
}
export default class Row {
  constructor(row) {
    this.row = row;
  }

  checkRows() {
    let checkArray = [1,2,3,4,5,6,7,8,9];
    let sortedRow = this.row.slice().sort();
    if (checkArray.toString() === sortedRow.toString()) {
      this.correct = 'Correct';
    } else {
      this.correct = 'Wrong!';
    }
  }
}
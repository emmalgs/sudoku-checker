export default class Column {
  constructor(column) {
    this.column = column;
  }

  checkColumns() {
    let checkArray = [1,2,3,4,5,6,7,8,9];
    let sortedColumn = this.column.slice().sort();
    if (checkArray.toString() === sortedColumn.toString()) {
      this.correct = 'Correct';
    } else {
      this.correct = 'Wrong!';
    }
  }
}
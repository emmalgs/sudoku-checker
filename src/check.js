export default function Sudoku(rows) {
  this.rows = rows
  this.columns = [];
}

Sudoku.prototype.makeColumns = function() {
  const column1 = this.rows.map((row) => row[0]);
  const column2 = this.rows.map((row) => row[1]);
  const column3 = this.rows.map((row) => row[2]);
  const column4 = this.rows.map((row) => row[3]);
  const column5 = this.rows.map((row) => row[4]);
  const column6 = this.rows.map((row) => row[5]);
  const column7 = this.rows.map((row) => row[6]);
  const column8 = this.rows.map((row) => row[7]);
  const column9 = this.rows.map((row) => row[8]);
  this.columns.push(column1, column2, column3, column4, column5, column6, column7, column8, column9);
};

Sudoku.prototype.checkRows = function() {
  let checkArray = [1,2,3,4,5,6,7,8,9];
  let sortedRow = this.rows[0].sort();
  if (checkArray.toString() === sortedRow.toString()) {
    return true;
  } else {
    return false;
  }
};
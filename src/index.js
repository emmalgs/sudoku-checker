import './css/styles.css';
import Sudoku from './js/sudoku';
import Row from './js/row';


function handleSubmit(event) {
  const sudoku = new Sudoku();
  event.preventDefault();
  const r1 = document.querySelectorAll('input[name="row1"]');
  const r2 = document.querySelectorAll('input[name="row2"]');
  const r3 = document.querySelectorAll('input[name="row3"]');
  const r4 = document.querySelectorAll('input[name="row4"]');
  const r5 = document.querySelectorAll('input[name="row5"]');
  const r6 = document.querySelectorAll('input[name="row6"]');
  const r7 = document.querySelectorAll('input[name="row7"]');
  const r8 = document.querySelectorAll('input[name="row8"]');
  const r9 = document.querySelectorAll('input[name="row9"]');

  let row1 = Array.from(r1).map((element) => element.value);
  let newRow = new Row(row1);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row2 = Array.from(r2).map((element) => element.value);
  newRow = new Row(row2);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row3 = Array.from(r3).map((element) => element.value);
  newRow = new Row(row3);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row4 = Array.from(r4).map((element) => element.value);
  newRow = new Row(row4);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row5 = Array.from(r5).map((element) => element.value);
  newRow = new Row(row5);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row6 = Array.from(r6).map((element) => element.value);
  newRow = new Row(row6);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row7 = Array.from(r7).map((element) => element.value);
  newRow = new Row(row7);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row8 = Array.from(r8).map((element) => element.value);
  newRow = new Row(row8);
  newRow.checkRows();
  sudoku.addRow(newRow);
  let row9 = Array.from(r9).map((element) => element.value);
  newRow = new Row(row9);
  newRow.checkRows();
  sudoku.addRow(newRow);

  sudoku.makeColumns();
  console.log(sudoku);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleSubmit);
});

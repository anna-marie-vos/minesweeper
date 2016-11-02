document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {};
// Attempt 1
 board.cells = [
   {row:0, col:0, isMine:false, isMarked:false, hidden:true},
   {row:0, col:1, isMine:false, isMarked:false, hidden:true},
   {row:0, col:2, isMine:true, isMarked:false, hidden:true},
   {row:1, col:0, isMine:false, isMarked:false, hidden:true},
   {row:1, col:1, isMine:false, isMarked:false, hidden:true},
   {row:1, col:2, isMine:true, isMarked:false, hidden:true},
   {row:2, col:0, isMine:false, isMarked:false, hidden:true},
   {row:2, col:1, isMine:false, isMarked:false, hidden:true},
   {row:2, col:2, isMine:false, isMarked:false, hidden:true}];

function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var x =0; x<board.cells.length; x++){
    var countOutput = countSurroundingMines(board.cells[x]);
    board.cells[x].surroundingMines =countOutput;
  }
  lib.initBoard()

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  //find all the cells connected to the current cell
  //if the current row is at 0 and the current col is at 0
    // for every cell from current cellrow+1 and for current cellCol+1
     // check if it's isMine property is true
  //read them into an array
  //count the length of the array
  //assign that to a value
  //return the value
}

// for(var prop in board.cells){
//   if(board.cells[prop].isMine ===true){
//
//   }
// }

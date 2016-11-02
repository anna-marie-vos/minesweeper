document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {};
var boardSize = 2;
// Attempt 1
 board.cells = [defaultCell(5)];
  //  {row:0, col:0, isMine:false, isMarked:false, hidden:true},
  //  {row:0, col:1, isMine:false, isMarked:false, hidden:true},
  //  {row:0, col:2, isMine:true, isMarked:false, hidden:true},
  //  {row:0, col:3, isMine:true, isMarked:false, hidden:true},
  //  {row:1, col:0, isMine:false, isMarked:false, hidden:true},
  //  {row:1, col:1, isMine:false, isMarked:false, hidden:true},
  //  {row:1, col:2, isMine:true, isMarked:false, hidden:true},
  //  {row:1, col:3, isMine:false, isMarked:false, hidden:true},
  //  {row:2, col:0, isMine:true, isMarked:false, hidden:true},
  //  {row:2, col:1, isMine:false, isMarked:false, hidden:true},
  //  {row:2, col:2, isMine:false, isMarked:false, hidden:true},
  //  {row:2, col:3, isMine:false, isMarked:false, hidden:true},
  //  {row:3, col:0, isMine:false, isMarked:false, hidden:true},
  //  {row:3, col:1, isMine:false, isMarked:false, hidden:true},
  //  {row:3, col:2, isMine:false, isMarked:false, hidden:true},
  //  {row:3, col:3, isMine:false, isMarked:false, hidden:true}];

  //autocreates the board
  function defaultCell(num){
    for(var x =0; x<num; x++){
      for(var n = 0; n<num; n++){
        this.row = x;
        this.col = n;
        this.isMine = true;
        this.isMarked = false;
        this.hidden = true;
      }
    }
  }

function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var x =0; x<board.cells.length; x++){
    var countOutput = countSurroundingMines(board.cells[x]);
    board.cells[x].surroundingMines =countOutput;
  }
  lib.initBoard()
  //checks if the player wins.
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var totalCount = 0;
  var markedCount = 0;
  for(var x =0 ; x < board.cells.length; x++){
    if (board.cells[x].isMine === true){
      totalCount +=1;
    } else {totalCount +=0;}
    if(board.cells[x].isMine ===false && board.cells[x].isMarked === true){
      return;
    } else if(board.cells[x].isMine === true && board.cells[x].isMarked === true){
      markedCount +=1;
    } else {markedCount +=0;}
  }
if(totalCount === markedCount){
  return lib.displayMessage('You win!');
} else {
  return ;
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
    //var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
   for (var x=0; x< surrounding.length ; x++){
     if(surrounding[x].isMine === true){
       count +=1;
     }else{
       count += 0;
     }
   }
   return count;

  //return the length of the array
}

document.addEventListener('DOMContentLoaded', startGame);

// Define your `board` object here!
var board = {};
board.cells = createBoard(4);

//create a function that creates a number of object for the amount specified
function createBoard(size){
  var cells = new Array(); //make new array
    for(var x =0; x<size; x++){ //count the rows
      for(var n =0; n<size; n++){ //count the columns in the rows
        cells.push(new newCell(x,n)); //add the newCell object to the array
        }
    } return cells;
  }
  //create a new cell with a specific row number and column number
  function newCell(rowNum, colNum){
        this.row = rowNum;
        this.col = colNum;
        this.isMine = mineGenerator();
        this.isMarked = false;
        this.hidden = true;
  }
  //generates random true or false.
  function mineGenerator(){
    var mineGen = Math.random()+0.3;
    if (mineGen < 0.5){
      return true;
    }else {
      return false;
    }
  }

//create a function to reset the board
  function resetBoard(){
    location.reload();
    //this removes every div Item that is named 'board'.
    // var x = document.getElementsByClassName('board');
    // for(var a=0; a< x.length; a++){
    //   x[a].parentNode.removeChild(x[0]);
    // }
    //create a new board div
    // document.body.innerHTML += '<div class="board"></div>';
    // startGame();
  }


function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var x =0; x<board.cells.length; x++){
    var countOutput = countSurroundingMines(board.cells[x]);
    board.cells[x].surroundingMines =countOutput;
  }
  lib.initBoard();
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
    } else if(board.cells[x].hidden ===true){
      return;
    }
  }
if(totalCount === markedCount){
  var sound = document.getElementById('winner');
  return lib.displayMessage('You win!') + sound.play;
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

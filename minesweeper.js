document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {};
var size = 4;

 board.cells = createBoard();

  //autocreates the board
  //create a new cell with a specific row number and column number
  function newCell(rowNum, colNum){
        this.row = rowNum;
        this.col = colNum;
        this.isMine = true;
        this.isMarked = false;
        this.hidden = true;
  }
  //create a function that creates a number of object for the amount specified
  function createBoard(){
    var a = 0;
    var cells = new Array();
      for(var x =0; x<size; x++){
        for(var n =0; n<size; n++){
          cells[a] = new newCell(x,n);
          a +=1;
        }
      }return cells;
    }
//create a function to reset the board
  function resetBoard(){
    location.reload();
    //var allDivs = document.getElementsByTagName('div');
    // for(var x = 0; x < allDivs.length; x++){
    //   if (allDivs[x].classList !=="board"){
    //     allDivs[x].parentNode.removeChild(allDivs[x]);
    //   }
    // } createBoard();
    // var allDivs = document.getElementsByTagName('board');
    // for(var x = 0; x < allDivs.length; x++){
    //   allDivs[x].parentNode.removeChild(allDivs[0]);
    // }
    // var newDiv = document.createElement('div');
    // newDiv.className = "board";
    // //neDiv.
    // return document.body.appendChild(newDiv);
    board.cells = createBoard();
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

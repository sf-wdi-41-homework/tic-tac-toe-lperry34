// wait for the DOM to finish loading
$(document).ready(function() {

var box = $(".box");
box.text("");

var win = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [6, 4, 2]  
];

var x = "X";
var o = "O";
var player1 = true;
var player2 = false;
var player1Array = [];
var player2Array = [];
box.on("click", function() {
  var move = box.index(this);
  
  console.log(move);


  if ($(this).text() == "") {
    if (player1) {
      $(box[move]).text(x);
     
      player1Array.push(move);
      
      player1 = false;
      player2 = true;
    } 
    else if (player2) {
      $(box[move]).text(o);
      player2Array.push(move);
      player1 = true;
      player2 = false;
    }
  } 
  else {
    return;
  }
 for (var i = 0; i < win.length; i++){

  if ($(player1Array).not(win[i]).length === 0 && $(win[i]).not(player1Array).length === 0) {
     alert("Player X Wins")
   }


  else if ($(player2Array).not(win[i]).length === 0 && $(win[i]).not(player2Array).length === 0) {
     alert("Player O wins")
   }


}

});
  });
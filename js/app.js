$(document).ready(function() {

var box = $(".box");
box.text("");

// TODO: Nice win table!
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

  // TODO: Use strict equality
  if ($(this).text() == "") {

    if (player1) {
      // TODO: The entire contents of this if statement can be extracted to a function that you call for both X and O
      $(box[move]).text(x);

      player1Array.push(move);

      // TODO: try this instead inside a function you call for both player turns
      // player1 =!player1
      // player2 =!player2
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
    // TODO: let them know the square is taken.
    return;
  }
 for (var i = 0; i < win.length; i++){

  // TODO: extract these two statements into a function that receives the playerXarray as an argument.
  if ($(player1Array).not(win[i]).length === 0 && $(win[i]).not(player1Array).length === 0) {
     alert("Player X Wins")
   }


  else if ($(player2Array).not(win[i]).length === 0 && $(win[i]).not(player2Array).length === 0) {
     alert("Player O wins")
   }

}

});
  });

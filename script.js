
		var clicks = 0


		function getRandomInt(min, max) {
	  	return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function rollForPlayer(num) {
			num = 6;
			$(".die1").html(getRandomInt(1, num));
		}

		function rollDie(num) {
		  num = 6;

		  if(document.getElementById("checkbox1").checked === false) {
		  	$(".die1").html(getRandomInt(1, num));
		  } else {
		  	$(".die1").html();
		  }
		  
		  if(document.getElementById("checkbox2").checked === false) {
		  	$(".die2").html(getRandomInt(1, num));
		  } else {
		  	$(".die2").html();
		  }

		  if(document.getElementById("checkbox3").checked === false) {
		  	$(".die3").html(getRandomInt(1, num));
		  } else {
		  	$(".die3").html();
		  }

		  if(document.getElementById("checkbox4").checked === false) {
		  	$(".die4").html(getRandomInt(1, num));
		  } else {
		  	$(".die4").html();
		  }

		  if(document.getElementById("checkbox5").checked === false) {
		  	$(".die5").html(getRandomInt(1, num));
		  } else {
		  	$(".die5").html();
		  }
		}

		function displaySingleDice() {
			die1Value = parseInt($(".die1").html());


			//dice 1 

			if (die1Value === 1) {
				$(".dice1Img1").addClass("visible");
			} else {
				$(".dice1Img1").removeClass("visible");
			};

			if (die1Value === 2) {
				$(".dice1Img2").addClass("visible");
			} else {
				$(".dice1Img2").removeClass("visible");
			};

			if (die1Value === 3) {
				$(".dice1Img3").addClass("visible");
			} else {
				$(".dice1Img3").removeClass("visible");
			};

			if (die1Value === 4) {
				$(".dice1Img4").addClass("visible");
			} else {
				$(".dice1Img4").removeClass("visible");
			};

			if (die1Value === 5) {
				$(".dice1Img5").addClass("visible");
			} else {
				$(".dice1Img5").removeClass("visible");
			};

			if (die1Value === 6) {
				$(".dice1Img6").addClass("visible");
			} else {
				$(".dice1Img6").removeClass("visible");
			};

			// remove all other dice

			$(".dice2Img").removeClass("visible");
			$(".dice3Img").removeClass("visible");
			$(".dice4Img").removeClass("visible");
			$(".dice5Img").removeClass("visible");


		};


		function displayDice() {
			die1Value = parseInt($(".die1").html());
			die2Value = parseInt($(".die2").html());
			die3Value = parseInt($(".die3").html());
			die4Value = parseInt($(".die4").html());
			die5Value = parseInt($(".die5").html());


			//dice 1 

			if (die1Value === 1) {
				$(".dice1Img1").addClass("visible");
			} else {
				$(".dice1Img1").removeClass("visible");
			};

			if (die1Value === 2) {
				$(".dice1Img2").addClass("visible");
			} else {
				$(".dice1Img2").removeClass("visible");
			};

			if (die1Value === 3) {
				$(".dice1Img3").addClass("visible");
			} else {
				$(".dice1Img3").removeClass("visible");
			};

			if (die1Value === 4) {
				$(".dice1Img4").addClass("visible");
			} else {
				$(".dice1Img4").removeClass("visible");
			};

			if (die1Value === 5) {
				$(".dice1Img5").addClass("visible");
			} else {
				$(".dice1Img5").removeClass("visible");
			};

			if (die1Value === 6) {
				$(".dice1Img6").addClass("visible");
			} else {
				$(".dice1Img6").removeClass("visible");
			};


			//dice 2
			if (die2Value === 1) {
				$(".dice2Img1").addClass("visible");
			} else {
				$(".dice2Img1").removeClass("visible");
			};

			if (die2Value === 2) {
				$(".dice2Img2").addClass("visible");
			} else {
				$(".dice2Img2").removeClass("visible");
			};

			if (die2Value === 3) {
				$(".dice2Img3").addClass("visible");
			} else {
				$(".dice2Img3").removeClass("visible");
			};

			if (die2Value === 4) {
				$(".dice2Img4").addClass("visible");
			} else {
				$(".dice2Img4").removeClass("visible");
			};

			if (die2Value === 5) {
				$(".dice2Img5").addClass("visible");
			} else {
				$(".dice2Img5").removeClass("visible");
			};

			if (die2Value === 6) {
				$(".dice2Img6").addClass("visible");
			} else {
				$(".dice2Img6").removeClass("visible");
			};

			//Dice 3

			if (die3Value === 1) {
				$(".dice3Img1").addClass("visible");
			} else {
				$(".dice3Img1").removeClass("visible");
			};

			if (die3Value === 2) {
				$(".dice3Img2").addClass("visible");
			} else {
				$(".dice3Img2").removeClass("visible");
			};

			if (die3Value === 3) {
				$(".dice3Img3").addClass("visible");
			} else {
				$(".dice3Img3").removeClass("visible");
			};

			if (die3Value === 4) {
				$(".dice3Img4").addClass("visible");
			} else {
				$(".dice3Img4").removeClass("visible");
			};

			if (die3Value === 5) {
				$(".dice3Img5").addClass("visible");
			} else {
				$(".dice3Img5").removeClass("visible");
			};

			if (die3Value === 6) {
				$(".dice3Img6").addClass("visible");
			} else {
				$(".dice3Img6").removeClass("visible");
			};

			//dice 4

			if (die4Value === 1) {
				$(".dice4Img1").addClass("visible");
			} else {
				$(".dice4Img1").removeClass("visible");
			};

			if (die4Value === 2) {
				$(".dice4Img2").addClass("visible");
			} else {
				$(".dice4Img2").removeClass("visible");
			};

			if (die4Value === 3) {
				$(".dice4Img3").addClass("visible");
			} else {
				$(".dice4Img3").removeClass("visible");
			};

			if (die4Value === 4) {
				$(".dice4Img4").addClass("visible");
			} else {
				$(".dice4Img4").removeClass("visible");
			};

			if (die4Value === 5) {
				$(".dice4Img5").addClass("visible");
			} else {
				$(".dice4Img5").removeClass("visible");
			};

			if (die4Value === 6) {
				$(".dice4Img6").addClass("visible");
			} else {
				$(".dice4Img6").removeClass("visible");
			};

			// dice 5

			if (die5Value === 1) {
				$(".dice5Img1").addClass("visible");
			} else {
				$(".dice5Img1").removeClass("visible");
			};

			if (die5Value === 2) {
				$(".dice5Img2").addClass("visible");
			} else {
				$(".dice5Img2").removeClass("visible");
			};

			if (die5Value === 3) {
				$(".dice5Img3").addClass("visible");
			} else {
				$(".dice5Img3").removeClass("visible");
			};

			if (die5Value === 4) {
				$(".dice5Img4").addClass("visible");
			} else {
				$(".dice5Img4").removeClass("visible");
			};

			if (die5Value === 5) {
				$(".dice5Img5").addClass("visible");
			} else {
				$(".dice5Img5").removeClass("visible");
			};

			if (die5Value === 6) {
				$(".dice5Img6").addClass("visible");
			} else {
				$(".dice5Img6").removeClass("visible");
			};


		}

		function getScore() {
			die1Value = parseInt($(".die1").html());
			die2Value = parseInt($(".die2").html());
			die3Value = parseInt($(".die3").html());
			die4Value = parseInt($(".die4").html());
			die5Value = parseInt($(".die5").html());

			if (die1Value === 3) {
				die1Value = 0;
			}

			if (die2Value === 3) {
				die2Value = 0;
			}

			if (die3Value === 3) {
				die3Value = 0;
			}

			if (die4Value === 3) {
				die4Value = 0;
			}

			if (die5Value === 3) {
				die5Value = 0;
			}



			score = die1Value + die2Value + die3Value + die4Value + die5Value;
			// console.log(score)
			
		}


		$(".roll").on("click", function() {
		  clicks += 1;
		  console.log(clicks);
		  dieNum = $(this).html();
		  rollDie(dieNum);
		  displayDice();
		  getScore();
			

		  if (clicks === 3) {
		  	document.getElementById("checkbox1").checked = true;
		  	document.getElementById("checkbox2").checked = true;
		  	document.getElementById("checkbox3").checked = true;
		  	document.getElementById("checkbox4").checked = true;
		  	document.getElementById("checkbox5").checked = true;
		  	$(".diceImg").addClass("diceSelected");
		  };

		  if (clicks >= 3) {
		  	$(".newTurn").addClass("newTurnIndicator");
		  }

		  if (clicks === 1) {
		  	$(".instructions").html("<p class='instructions'>First roll. Select at least one dice. two rolls left</p>")
		  } else if (clicks === 2) {
		  	$(".instructions").html("<p class='instructions'>Second roll. Select at least two dice. one roll left</p>")
		  } else if (clicks >= 3) {
		  	$(".instructions").html("<p class='instructionsWithScore'>End of your turn. your score is: " + "<span class='score'>" + score + "</span></p>");
		  };


		});

		$(".diceImg").on("click", function(){
			
				$(this).toggleClass("diceSelected");
			
		});

		$(".newTurn").on("click", function(){
			$(".diceImg").removeClass("diceSelected");
			$(".newTurn").removeClass("newTurnIndicator");
			document.getElementById("checkbox1").checked = false;
		  	document.getElementById("checkbox2").checked = false;
		  	document.getElementById("checkbox3").checked = false;
		  	document.getElementById("checkbox4").checked = false;
		  	document.getElementById("checkbox5").checked = false;

			clicks = 0;

			console.log("clicks = " + clicks);

			if (clicks === 0) {
				$(".diceImg").removeClass("visible")
				$(".diceImg").removeClass("diceSelected")
			}
			$(".instructions").html("<p class='instructions'>Roll the Dice!</p>")
		});

		$(".rollForPlayer").on("click", function(){
			rollForPlayer();
			displaySingleDice();
		});




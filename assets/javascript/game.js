
    // An array of the alphabet in lowercase
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var win = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessedSoFar = 0;
    var usrChoice = " ";
    var compChoice = " ";
    
    



    document.onkeyup = function(event) {
    	//Gets key pressed by user

    	usrChoice = event.key;
    	console.log ("User Chose: " + usrChoice);

    	// Computer choses a random letter from the array
    	compChoice = letters[Math.floor(Math.random() * letters.length)];
    	console.log('The computer\'s guess: ' + compChoice);

    	if (usrChoice === compChoice) {
    	    console.log("correct");
    	    win++;
    	    alert("You won")
    	    guessesLeft--;
    	    guessedSoFar++;
    	  } else {
    	    console.log("Wrong");
    	    losses++;
    	    guessesLeft--;
    	    guessedSoFar++;
          }

          console.log("wins: " + win);
          console.log("losses: " + losses);
          console.log("guesses left: " + guessesLeft);
          console.log("guesses so far: " + guessedSoFar);
        // if (true) {}
    }

	
    
  

    // for (i=0; i<guessesLeft; i++) {
    // 	if (usrChoice == compChoice) {
    // 		console.log("U guessed it");
    // 	} else if (usrChoice != compChoice){
    // 		console.log("try again");
    // 		guessesLeft = guessesLeft - 1;
    // 		console.log(guessesLeft + " Guesses left")
    // 	}

    // 	}
    

    
   
// for (i=0; i<numOfGuesses; i++){
//     document.onkeyup = function(event){
//     	var usrChoice = event.key;
//         console.log('The user\'s choice: ' + usrChoice);
    
//         if (compChoice == usrChoice){
//     		document.write("U Guessed it");
//     		numOfGuesses = 10;
//     	}	else{
//     		document.write("Try again");
//     	}

    
    
//     }

  
    


// function guessing(){
// 	document.onkeyup = function(event) {

//       // Determines which key was pressed.
//       var userGuess = event.key;
//     console.log(usrChoice);
// 	}



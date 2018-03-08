document.addEventListener("DOMContentLoaded", function(event) {

            
        /** Variables **/
        //first step: array of word options
        //these are global variables!!!
        let wordList = ['ghost', 'skeleton', 'pumpkin', 'bat', 'witch'];
        let chosenWord = '';
        let dashWord = [];
        let userWins = 0;
        let numberGuess = 10;
        let wrongGuess = false;

        /** functions **/
        function createDashWord(word) {
            let tmpDashWord = [];
             //create the dashword array
            for (var i = 0; i < word.length; i++) {
                tmpDashWord.push("_");
            }
            return tmpDashWord;

        }

        function startGame() {
            let chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
            dashWord = createDashWord(chosenWord);
              //display dashWord
           $('#dashDiv').text(dashWord.join(' '));
           $('#winSpan').text(userWins);
        }
        
        //init event
        startGame();

        /** events */

        //page load
        //keypress/keyup
       
        document.onkeyup = function(event) {
            let letterGuessed = event.key.toLocaleLowerCase();
          

            //create if letter is in word
            for (var i = 0; i < chosenWord.length; i++) {
                if (letterGuessed === chosenWord[i]) {
                    dashWord[i] = letterGuessed;
                } else {
                    wrongGuess = true;
                }
               }

               if (wrongGuess === true) {
                   numberGuess--;
               }

            // if dash word - chosen word you win
            if (dashWord.join('') === chosenWord) {
                userWins++;
                //start new game here
                startGame();
            }

            //display dashWord
           $('#dashDiv').text(dashWord.join(' '));
           $('#winSpan').text(numberGuess);
        }

});
let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for(let i = 1; i < 10; i++) {
        let newBtn = document.createElement('button');
        newBtn.innerText = '[]';
        document.getElementById('c' + i).appendChild(newBtn);
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   if(nextPlayer == 'X') {
       nextPlayer = 'O';
       event.target.innerText = 'X';
   }

   else if(nextPlayer == 'O') {
       nextPlayer = 'X'
       event.target.innerText = 'O'
   }

   // Changing what the label at the top says
   document.getElementById('next-lbl').innerText = nextPlayer;

   // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
   event.target.disabled = true

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    // Will check to see if a single button is not disabled
    for(let i = 0; i < 9; i++) {
        if(btns[i].disabled != true) {
            return false;
        }
    }

    // If all buttons are disabled return true
    return true
}

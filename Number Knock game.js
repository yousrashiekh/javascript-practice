let computernum = 5;
let guess;

while (computernum!==guess) {
    guess = Number(prompt("enter a guess"));

    if(guess < computernum){
        console.log("invalid guess,is too low, try again");
    }
    else if(guess > computernum){
        console.log("invalid guess, its too high, try again");
    }
    else{
        console.log("congratulations! you guessed the number");
    }
}
    
let playagain = 'yes';

while (playagain === 'yes') {

    alert("you wake up in a dark forest")
    let userchoice = prompt("Do you go left or right?")


    if (userchoice === "left") {
        alert("you walk into a sawmp...........")

        userchoice = prompt("you see something shiny inthe mud .Do you pick it up ? (yes or no)")
        if (userchoice === "yes") {
            alert("it`s  a magic stone! You are teleporate to safety.You win!")
        }
        else {
            alert("you sink slowly into the mud . Game over!")
        }
    }
    if (userchoice === `right`) {
        alert("you find a cave............")

        userchoice = prompt("Do you enter the cave ? (yes or no)")
        if (userchoice === "yes") {
            alert("A dragon wakes up and chases you away.You barely escape!")
        }
        else {
            alert("you set up camp outside the cave .A peaceful night under the stars . You win!")
        }
    }
    userchoice = prompt("Do you want to play again ? (yes or no)")
    if (userchoice === "no") {
        playagain = "no";
        alert("Game over! Thanks for playing.")
    }
}


let str = "yusra  shiekh"
for (let ch of str) {
    console.log(ch);
}



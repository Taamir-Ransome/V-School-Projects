const readline = require("readline-sync");

const begin = readline.question("Would you like to play a Game?, Yes[y] No[n]", {limit: ["y", "n"]});
if (begin === "y"){
    console.log("You are now in the Escape Room")
}
else if (begin === "n"){
    console.log("Good Bye")
        process.exit()
}

playerAlive = true;
keyFound = false;
console.log("There is a door in this room and a hole in the wall.")
while(playerAlive === true & keyFound === false){
    // while the game is still active AND the user has not yet found the key {
const choice = readline.question("What would you like to do?. [1]Put hand in the hole [2]Find the key or [3]Open the door", {limit: ["1", "2", "3"]})
    if (choice === "1"){
        playerAlive === false & keyFound === false
        console.log("You put your hand in a bad spot and died!")
        process.exit()
    }
    else if (choice === "2"){
        playerAlive === true & keyFound === true
        console.log("You found a key")
                const choice2 = readline.question("Would you like to open the door? Yes[y] No[n]", {limit: ["y", "n"]})
                    if (choice2 === "y"){
                        console.log("You Have Escaped")
                        process.exit()
                    }
                    else if (choice2 === "n"){
                        console.log("Wrong Choice")
                        choice2
                    }
            }
    else if (choice === "3"){
        playerAlive === true & keyFound === false
        console.log("The door is locked")
    }

}

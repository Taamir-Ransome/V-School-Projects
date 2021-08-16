const readline = require('readline-sync')//initiate readline in the game
let isAlive = true //boolean to keep game going, used to check player DOA status
let hasWon = false //boolean for win/ loss
let hasEscaped = false //boolean for fights and enemy stuff

console.log('Welcome To the Thunder Dome \n')//game opener

const name = readline.question('What is your name? \n')//first question to store players name

//class and constructor to store player starting attributes
class Hero{
    constructor(name, hp, ap){
        this.name = name
        this.hp = hp
        this.ap = ap
        this.inventory = ['potion']
    }
}

//player variable
const superMan = new Hero(name, 100, 100)
console.log(superMan)

//class and constructor for enemies
class Enemy {
    constructor(name, hp, ap){
        this.name = name
        this.hp = hp
        this.ap = ap
    }
}

//enemies
const darkSeid = new Enemy("Darkseid", 150, 150)
const bizzarro = new Enemy("Bizzarro", 150, 100)
const lexLuther = new Enemy("Lex Luther", 150, 200)

const enemies = [darkSeid, bizzarro, lexLuther]


//Game loop
while(isAlive && !hasWon){ //condition to check if player is alive and has NOT won
    hasEscaped = false
    const action = readline.keyIn('Would you like to [w] Walk, [p] Print Inventory, or [q] Quit? \n', {limit: 'wpq'})

    if(action === 'w'){
        walk()
    }else if (action === 'p'){
        printInventory()
    }else if(action === 'q'){
        isAlive = false
        console.log('Game Over Man')
    }
}

//walk function. Uses math and random to pick a number between 0 & 3. 
function walk(){
    const randomWalk = Math.floor(Math.random()*4)
    if(randomWalk === 0){
        enemyAppears()
    }else{
        console.log('You are just taking a stroll through the Thunder Dome \n')
    }
}

//prints the inventory of the hero
function printInventory(){
    console.log(`You have  ${superMan.inventory}`)
}

//function when enemy appears. uses random and math to randomly choose from enemy array ln 38
function enemyAppears(){
    let randomEnemy = Math.floor(Math.random()*enemies.length)
    const newEnemy = enemies[randomEnemy]
    console.log(`Leeroy JAAAANKINS! Here is ${newEnemy.name}`)
    const action = readline.keyIn('Would you care to engage in Mortal Combat [f]? Live to fight another day [r]? Quit because of some lame excuse [q]? \n', {limit:'frq'})
    if(action === 'f'){
        fight(newEnemy)
    }else if(action === 'r'){
        run(newEnemy)
    }else if(action === 'q'){
        isAlive = false;
        console.log('You are a quitter')
    }
}

//function when you chose to fight the enemy
function fight(enemy){
    while(superMan.hp > 0 && enemy.hp > 0 && !hasEscaped){
        let action = readline.keyIn('Do you want to Cobra Kai this turd [f]? or Get out of dodge[r]? or Use an item [i] \n', {limit: 'fri'})
        if(action === 'f'){
            heroAttack(enemy)
            enemyAttack(enemy)
        }else if(action === 'r'){
            run(enemy)
        }else if(action === 'i'){
            useItem()
        }
    }
    if(superMan.hp > 0){
        console.log(`Kick ass ${superMan.name}, you Cobra Kai'd ${enemy.name}, Strike Hard, Strike Fast, No Mercy! \n`)
        enemies.splice(enemies.indexOf(enemy), 1)
        if(enemies.length === 0){
            console.log('That was BA, you slaughtered them all \n')
            hasWon = true;
        }
    }else{
        console.log(`${enemy.name} opened up a whole barrel of whoop ass on you! \n`)
        isAlive = false;
    }
}

//function for when the hero attacks
function heroAttack(enemy){
    let random = Math.floor(Math.random()*superMan.ap)+25
    enemy.hp -= random
    console.log(`You just round housed ${enemy.name}, ${enemy.name} now has an HP of ${enemy.hp} \n`)
}

//function when enemy attacks
function enemyAttack(enemy){
    let random = Math.floor(Math.random()*enemy.ap)
    superMan.hp -= random
    console.log(`Dang son ${enemy.name} hit you with that smoke, your health is now ${superMan.hp} \n`)
}

//function when you choose to run before or during a fight
function run(enemy){
    let random = Math.floor(Math.random()*4)
    if(random === 0){
        console.log('You ran super fast \n')
        hasEscaped = true
    }else {
        console.log('Sorry bro you gotta throw them hands \n')
        fight(enemy)
    }
}

function useItem(){
    let inventory = readline.keyIn(`Would you like to use [p] ${superMan.inventory}`, {limit: 'p'})
    if(inventory === 'p'){
        superMan.hp += 100
        console.log(`Your HP is now ${superMan.hp}`)
    }else{
        superMan.hp = superMan.hp
    }
}



let sum = 0
let cards = []
let message = ""
let isAlive = false
let haveBackjack = false
let sumEl= document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let playerEl= document.getElementById("player-el")

let player = {
    name : "Sam",
    chips : 100
}
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive=true
    haveBackjack=false
    renderGame()
}

function getRandomCard() {
    
    let randomCard = Math.floor(Math.random()*13)+1

    if(randomCard == 1) return 11
    else if(randomCard > 10) return 10
    return randomCard
}

function renderGame() {
    
    cardEl.textContent = "Cards:"
    for(let i=0; i<cards.length; i++) {
        cardEl.textContent += "  " + cards[i]
    }
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have won!"
        haveBackjack = true
        player.chips += 30
        playerEl.textContent = player.name + ": $" + player.chips

    } else {
        message = "Sorry you have lost the game!"
        isAlive = false
        player.chips -= 10
        playerEl.textContent = player.name + ": $" + player.chips

    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum 
}

function newCard() {
    // console.log("Drawing a new card!")
    if(isAlive == true && haveBackjack == false){
        let card= getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

var cards = []
var hasBlackjack = false
var isAlive = false
var sum = 0
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.querySelector(".cards-el")
var playerEl = document.querySelector("#player-el")

var player= {
    name: "Bhumit",
    chips: 150
}

playerEl.textContent = player.name +": $" + player.chips

console.log(sum)

function getRandomCard(){
    randomCard = Math.floor(Math.random()*13) + 1
    if(randomCard===1){
        return 11
    }
    else if (randomCard>10){
    return 10
    }
    else {
        return randomCard
    }
}

function startGame(){
    isAlive = true
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards :"
    for(var i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+ " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <=20) {
    message="Do you want to draw a new card?"
    }
    else if(sum === 21){
        hasBlackjack = true
        message="Wohoo! You\'ve got Blackjack!"
    }
    else {
        isAlive = false
        message="You're out of the game"
    }

    messageEl.textContent=message

}

function newCard() {
    if(hasBlackjack === false && isAlive === true){
        var card = getRandomCard()
        sum +=card
        cards.push(card)
        renderGame()
}
}

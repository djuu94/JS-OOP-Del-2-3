import Dealer from "./dealer.js"
import Player from "./player.js"
import { Deck } from "./deck.js"
import { Validering } from "./validering.js";


let kortlek = new Deck();

console.log("-- Del 1 --")
console.log("Hela kortleken oblandad")
console.log(JSON.parse(JSON.stringify(kortlek.cards)))

kortlek.shuffleCards()
console.log("Hela kortleken blandad")
console.log(JSON.parse(JSON.stringify(kortlek.cards)));


console.log("-- Del 2 --");
let playerOne = new Player("Slim");
let playerTwo = new Player("Luke");

console.log("Spelarna utan kort");
console.log(JSON.parse(JSON.stringify(playerOne)))
console.log(JSON.parse(JSON.stringify(playerTwo)))

playerOne.getCards(5);
playerTwo.getCards(5);

console.log("Kortleken med 42 kort kvar");
console.log(JSON.parse(JSON.stringify(kortlek)));
console.log("Spelarna med kort");
console.log(JSON.parse(JSON.stringify(playerOne)))
console.log(JSON.parse(JSON.stringify(playerTwo)))


console.log("Spelarnas korts totala värde")
playerOne.cardValue();
playerTwo.cardValue();

console.log(JSON.parse(JSON.stringify(playerOne.countCardValue)));
console.log(JSON.parse(JSON.stringify(playerTwo.countCardValue)));

console.log("-- Del 3 --")

playerOne.throwCard(0)      // Del 3 -- Spelarna kastar 2 kort som väljs ut med index --  
playerOne.throwCard(2)

playerTwo.throwCard(1)
playerTwo.throwCard(3)

playerOne.getCards(2)   //  Spelarna tar 2 nya kort från kortleken 
playerTwo.getCards(2)
console.log("Kortlek nu med 38 kort");
console.log(kortlek) // Kortlek nu med 38 kort
console.log(JSON.parse(JSON.stringify(playerOne))) //  Spelarna med 2 nya kort var
console.log(JSON.parse(JSON.stringify(playerTwo)))

playerOne.cardValue(); // Method för att uppdatera cardvalue
playerTwo.cardValue();
console.log(JSON.parse(JSON.stringify(playerOne.countCardValue)));
console.log(JSON.parse(JSON.stringify(playerTwo.countCardValue)));

console.log("-- Del 4 --")

playerOne.throwAllCards();  //Spelarna lägger alla sina kort i kasthögen 
playerTwo.throwAllCards();
kortlek.getAllCardsBack();   //Kortleken flyttar alla kort från kasthögen till kortleken
kortlek.shuffleCards(); // Kortleken blandas

console.log(JSON.parse(JSON.stringify(kortlek.cards)));

console.log("-- Del 5 --");


let theDealer = new Dealer()
theDealer.shuffle();    // Kort blandas
theDealer.giveCards(playerOne) //Kort ges
theDealer.giveCards(playerTwo)
console.log(JSON.parse(JSON.stringify(playerOne.cards)))
console.log(JSON.parse(JSON.stringify(playerTwo.cards)))

console.log(JSON.parse(JSON.stringify(theDealer.dealersDeck)))
theDealer.getCardsFromPlayers(playerOne)
theDealer.getCardsFromPlayers(playerTwo)
theDealer.shuffle()
console.log(JSON.parse(JSON.stringify(theDealer.dealersDeck)))
console.log("-- Del 6 --")

theDealer.giveCards(playerOne);     
theDealer.giveCards(playerTwo);
playerOne.cardValue(); // Method för att uppdatera cardvalue -- 
playerTwo.cardValue();
console.log(JSON.parse(JSON.stringify(playerOne.countCardValue)))
console.log(JSON.parse(JSON.stringify(playerTwo.countCardValue)))



let addPlayersToValidation = new Validering(playerOne,playerTwo);
let winner = Validering.logResults(addPlayersToValidation);

console.log(winner)
console.log("-- Del 7 --")

class Game{
    constructor(){
        this.players = [];
        this.addPlayers;
        this.dealer = new Dealer();
        this.gameValidation = new Validering()
        this.startGame();
        this.rounds = 0;
        this.keepPlaying = true;
    }
    
    addPlayers(playerNum){
        for(let i = 1; i < playerNum + 1; i++){
            let names = window.prompt(`Enter the name of player ${i}`)
            this.players.push(new Player(names))
        }
    }
    startGame(players){
        this.addPlayers(players)
        while(this.keepPlaying){
            this.keepPlaying += 1;
            console.log(`Round ${this.keepPlaying}`)
            this.dealer.shuffle()
            for(let i = 0; i < this.players.length; i++){
                this.dealer.giveCards(this.players[i])
                this.players[i].cardValue();
            }
            for(let i=0;i< this.players.length; i++){
                console.log(JSON.stringify(`${this.players[i].name} has the following cards`))
                console.log(JSON.stringify(this.players[i].cards))
                console.log("------------");
                this.players[i].exchangeCards();
                this.players[i].exchangeCards();
                this.dealer.giveTwoCards(i)
                this.players[i].cardValue()
                console.log(`${this.players[i].name}'s new cards are`);
                console.log("---------")
                console.log(JSON.stringify(this.players[i].cards))
                console.log("----------")
                if(this.players[-1] == this.players[i]){
                    this.keepPlaying = false;
                }
               
        }
        let addPlayersToValidation = new Validering(this.players);
        try{
            let winner = Validering.logResults(addPlayersToValidation)
            console.log("-------")
            console.log(winner)
            this.dealer
            let playAgain = prompt("Write 'ok' if you want to play another round, and 'no' if you are done playing")
            if(playAgain == "ok"){
                this.keepPlaying = true;
            }
            else if(playAgain == "no"){
                this.keepPlaying = false;
            }
            
            this.players.forEach((player)=>
                player.returnAllCards()

            )}
        catch{}  
        }
    }
};
let theGame = new Game();
theGame.startGame(2) // Antal användare skrivs in som argument

export { theGame , kortlek }
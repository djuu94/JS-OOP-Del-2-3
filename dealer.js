import { theGame } from "./code.js"
import { Deck } from "./deck.js"

export default class Dealer{
    constructor(){
        this.dealersDeck = new Deck();
        this.shuffle;
        this.giveCards;
        this.getCardsFromPlayers;
        this.giveTwoCards;
        this.swappedOutCards = [];
    }
    shuffle(){ 
        this.dealersDeck.cards.sort(() => Math.random() - 0.5);              //Blanda kortlek
    };
    giveCards(player){
        player.cards.push(...this.dealersDeck.cards.splice(0,5))
    }
    getCardsFromPlayers(player){
        this.dealersDeck.cards.push(...player.cards.splice(0.5))
    }
    giveTwoCards(i){
        let howManyCards = prompt(`How many new cards does ${theGame.players[i].name} need`)
        theGame.players[i].cards.push(...this.dealersDeck.cards.splice(0,Number(howManyCards)))
    }
}

import {kortlek} from "./code.js"
import { theGame } from "./code.js";
export default class Player{
    constructor(name){
        this.name = name;
        this.cards = [];
        this.countCardValue;
        this.getCards;
        this.cardValue();
        this.throwCard;
        this.throwAllCards;
        this.exchangeCards;
        this.returnAllCards;
    }
    getCards(cardAmount){
        let cardsFromDeck = kortlek.cards.splice(0,cardAmount);     // Spelaren får kort, inte random utvalda eftersom kortleken redan är blandad. 
        this.cards.push(...cardsFromDeck)
    }
    cardValue(){
        if(this.cards){
            this.countCardValue = this.cards.reduce((a,b) => a + b.value, 0);   // Kortens sammanlagda värde räknas fram     
    }
    }
    throwCard(indexNumber){
        let index = this.cards.splice(indexNumber,1)
        kortlek.swappedOutCards.push(...index);
    }
    throwAllCards(){
        this.cards.forEach((card)=>{
            kortlek.swappedOutCards.push(card)
        });
        this.cards = [];
    }
    exchangeCards(){
        let getIndex = prompt(JSON.stringify(`What card index do ${this.name} want to exchange?`));
        let index = this.cards.splice(Number(getIndex),1)
        theGame.dealer.dealersDeck.cards.push(...index)
    }
    returnAllCards(){
        theGame.dealer.dealersDeck.cards.push(this.cards.splice(0,5))
    }

}
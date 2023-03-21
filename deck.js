import { Card } from "./card.js"
class Deck {
    constructor() {
    this.cards = [];
    this.swappedOutCards = [];
    this.createDeck();
    this.shuffleCards;
    this.getAllCardsBack;
    };
    createDeck(){
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        const names = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King","Ace"];
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < names.length; j++) {
                this.cards.push(new Card(suits[i], names[j], values[j]));
            }
        }
    };
    shuffleCards(){ 
        this.cards.sort(() => Math.random() - 0.5);              //Blanda kortlek
    };
    getAllCardsBack(){                                          //Alla kort i kasthögen tillbaka till kortleken.
        this.swappedOutCards.forEach((card)=>{
            this.cards.push(card)
        })
       this.swappedOutCards = [];
    }
}
export { Deck };
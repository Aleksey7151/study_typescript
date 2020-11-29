interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spreads", "gold", "silver", "diamond"],
    cards: Array(52),
    createCardPicker: function(this: Deck){
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            // here THIS will be pointing to Deck class
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let selectedCard = cardPicker();

console.log("card: " + selectedCard.card + " of " + selectedCard.suit);
console.log("Hello");

// THIS in callbacks
// 1. First, the library author needs to annotate the callback type with this:
class UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void {
        console.log('click handler added!');
    }
}

// 2. Annotate your calling code with this:
class Handler {
    info: string;

    // can not use THIS inside method
    onClickBad(this: void, e: Event) {
        //this.info = e.toString();
        console.log("Bad handler called")
    }

    // can use THIS inside an arrow function.
    // Here THIS will always have proper value.
    onClickGood = (e: Event) => {
        this.info = e.toString();
    }
}

let h = new Handler();
let ui = new UIElement();

ui.addClickListener(h.onClickBad);
ui.addClickListener(h.onClickGood);

/*
This works because arrow functions use the outer this,
so you can always pass them to something that expects this: void.
The downside is that one arrow function is created per object of type Handler.
Methods, on the other hand, are only created once and attached to Handler’s prototype.
They are shared between all objects of type Handler.
*/

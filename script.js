const FRONT = "card_front";
const BACK = "card_back";

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',
];

let cards = null;
startGame();

function startGame(){
    cards = createCardsFromTeachs(techs);
    shuffleCards(cards);
    console.log(cards);
}

function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
    }
}

function createCardsFromTeachs(techs){
    let cards = [];
    for(let tech of techs){
        cards.push(createPairFromTech(tech));
    }

    return cards.flatMap(pair => pair);
}

function createPairFromTech(tech){
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }
]
}

function createIdWithTech(tech){
    return tech + parseInt(Math.random() * 1000);
}
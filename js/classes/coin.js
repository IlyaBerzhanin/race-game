import GameItem from './game-item.js';

export default class Coin extends GameItem {
    constructor(options) {
        super(options);
        this.heightInSquares = 3
        this.type = 'coin'
        this.movingStep = 2

        this.map = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],           
        ]
      
    }

    dissapear(fieldHeight) {     
        this.itemParts.forEach(part => {
            part.y -= (fieldHeight + (this.heightInSquares * this.heightInSquares))          
        })
    }
}
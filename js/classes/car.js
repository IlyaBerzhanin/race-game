

import GameItem from './game-item.js';

export default class Car extends GameItem {
    constructor(options) {
        super(options);
        this.x = options.x
        this.y = options.y
        this.widthInSquares = 3
        this.heightInSquares = 4
        this.movingStep = 2
        this.type = 'car'

        this.wasFirstRun = false
        this.newBaseX = ''

        this.numberOfRuns = 0

        this.map = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
            [1, 0, 1]
        ]     
    }   

    
}


import Car from './car.js';

export default class Player extends Car {
    constructor(options) {
        super(options);
        this.left = 37
        this.right = 39
        this.run = false
        this.scores = 0

        this.level = document.createElement('p')
        this.scores = document.createElement('p')

        this.type = 'player'
        
    }

    createStatusInfo(parentElement, gameLevel) {
        let statusBlock = document.createElement('div')              
        this.scores.innerText = `scores: ${this.scores}`       
        this.level.innerText = `level: ${gameLevel}`
        statusBlock.append(this.scores, this.level)
        parentElement.append(statusBlock)
    }

    updateStatus(gameLevel, gameScores) {
        this.level.innerText = `level: ${gameLevel}`
        this.scores.innerText = `scores: ${gameScores}`
    }

    choseRandomBase(fieldHeight, arrayOfBases) {
      
        this.newBaseX = arrayOfBases[Math.floor(Math.random() * arrayOfBases.length)]
        let delta = this.newBaseX - this.itemParts[0].x
        this.itemParts.forEach(part => {
            part.y += (fieldHeight - this.heightInSquares) 
            part.x += delta
        })
    }

    setKeys(key, fieldWidth) {
    
      
        switch(key) {
            case this.left:
               if(this.itemParts[0].x > (this.widthInSquares)) {
                this.itemParts.forEach(part => {
                    part.x -= this.widthInSquares
                })   
               }
              
                break;
            
            case this.right: 
           if(this.itemParts[0].x < fieldWidth - (this.widthInSquares)) {
            this.itemParts.forEach(part => {
                part.x += this.widthInSquares
            })      
            }      
       
            break;
        }

       
    }
}
export default class GameItem{
    constructor(options) {
        this.length = options.length
        this.type = options.type
        this.itemParts = []
        this.movingStep = 1
        this.run = false
        this.direction = 'down'
        this.heightInSquares = options.heightInSquares
        this.map = options.map
    }

    buildItem() {
      for(let i = 0; i < this.map.length; i++) {
          for(let k = 0; k < this.map[i].length; k++) {
              if(this.map[i][k] === 1) {
                  let part = {
                      x: k,
                      y: i,
                  }
                  this.itemParts.push(part)
              }
          }
      }        
  }    

    move(fieldHeight) {
      for(let i = 0; i < this.itemParts.length; i++) {
        switch (this.direction) {
          case "left":
            this.itemParts[i].x -= this.movingStep;
            break;
          case "right":
            this.itemParts[i].x += this.movingStep;
            break;
          case "up":
            this.itemParts[i].y -= this.movingStep;
            break;
          case "down":
            this.itemParts[i].y += this.movingStep;
            break;
        }
        if(this.itemParts[i].y > fieldHeight && this.type === 'fence') {
          this.itemParts[i].y = 0
        }        
      }
    }

    reborn(fieldHeight, arrayOfAllBotsAndCoins, arrayOfBases) {
      let basesToFilter = [...arrayOfBases]
    

      if(this.itemParts[0].y > fieldHeight) {
          this.wasFirstRun = true
          this.numberOfRuns++
          this.newBaseX = basesToFilter[Math.floor(Math.random() * basesToFilter.length)]
          this.itemParts.forEach(part => {
              part.y -= (fieldHeight +  (this.heightInSquares * this.heightInSquares))
          })    
      }

      else if(this.itemParts[0].y < -this.heightInSquares && this.wasFirstRun === true) {

          for(let i = 0; i < arrayOfAllBotsAndCoins.length; i++) {
              if((this !== arrayOfAllBotsAndCoins[i]) && 
                  (this.itemParts[0].x === arrayOfAllBotsAndCoins[i].itemParts[0].x) &&             
                  (Math.abs(this.itemParts[0].y - arrayOfAllBotsAndCoins[i].itemParts[0].y) <= (this.heightInSquares + 1))) {               

                      basesToFilter.splice(basesToFilter.indexOf(arrayOfAllBotsAndCoins[i].newBaseX), 1)       
                      let newBase = basesToFilter[Math.floor(Math.random() * basesToFilter.length)]
                      this.newBaseX = newBase                                      
              }                
          }
       
          let delta = this.newBaseX - this.itemParts[0].x
          this.itemParts.forEach(part => {
              part.x += delta
          })
          
      }
     
  }
}
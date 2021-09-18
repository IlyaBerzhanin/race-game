export default class Game {
  constructor(options) {
    this.numberOfFences = 2;
    this.numberOfBots = 3;
    this.BORDERS = [];
    this.BOTS = [];
    this.PLAYERS = [];
    this.COINS = [];
    this.BOTS_AND_COINS = []

    this.TIME_INTERVAL = 500;
    this.intervalStep = 30

    this.botBases = [];
    this.botWidthInSquares = 3;
    this.botHeightInSquares = 4;

    this.gameBoard = document.querySelector(".points");

    this.level = 0;
    this.scores = 0
    this.scoresStep = 20
    this.isReadyToChangeLevel = false;

    this.numberOfFirstBotRuns = 2


    this.IS_GAME_OVER = false
  }

  changeLevel() {
    if (this.BOTS[0].numberOfRuns === this.numberOfFirstBotRuns) {
      this.isReadyToChangeLevel = true;
    }

    if (this.isReadyToChangeLevel === true) {
      this.BOTS.forEach((bot) => {
        bot.numberOfRuns = 0;
      });
      this.level += 1;
      this.TIME_INTERVAL -= this.intervalStep;
      this.isReadyToChangeLevel = false;
    }
  }

  setBases(min, max) {
    for (let i = min; i < max; i++) {
      i += 2;

      if (i < max) {
        this.botBases.push(i);
      }
    }
  }

  checkTheTouchBetweenItems(callback) {
      let player = this.PLAYERS[0]
 
    this.BOTS_AND_COINS.forEach(obj => {
        for(let i = 0; i < obj.itemParts.length; i++) {
            for(let k = 0; k < player.itemParts.length; k++) {           
                
               if(obj.itemParts[i].x === player.itemParts[k].x && obj.itemParts[i].y === player.itemParts[k].y) {
        
                   if(obj.type === 'coin') {
                    this.scores += this.scoresStep    
                    callback()           
                   }
                   else if(obj.type === 'car') {
                    this.IS_GAME_OVER = true
                   }
               }
            }
        }
    })
  }
}

import Helpers from "./helpers.js";
const HELPERS = new Helpers();
import Game from "./classes/game.js";
import Fence from "./classes/fence.js";
import Car from "./classes/car.js";
import Player from "./classes/player.js";
import Coin from "./classes/coin.js";

const GAME_WIDTH = 820; 
const GAME_HEIGHT = 600; 

const BLOCK_SIZE = 20; 

const GAME_HEIGHT_IN_BLOCKS = GAME_HEIGHT / BLOCK_SIZE - 1; 
const GAME_WIDTH_IN_BLOCKS = GAME_WIDTH / BLOCK_SIZE - 1; 
const GAME = new Game({});

function gameInitialization() {
  for (let i = 0; i < GAME.numberOfFences; i++) {
    const FENCE = new Fence({
      length: GAME_HEIGHT_IN_BLOCKS,
    });
    GAME.BORDERS.push(FENCE);
  }

  GAME.BORDERS[0].createFenceLine(0, 0);
  GAME.BORDERS[1].createFenceLine(GAME_WIDTH_IN_BLOCKS, 0);

  GAME.setBases(0, GAME_WIDTH_IN_BLOCKS);
  for (let i = 0; i < GAME.botBases.length; i++) {
    const BOT = new Car({});
    BOT.buildItem();

    BOT.itemParts.forEach((part) => {
      part.x += GAME.botBases[i] - 1;
      part.y -= i * BOT.heightInSquares * BOT.heightInSquares;
    });
    GAME.BOTS.push(BOT);
    GAME.BOTS_AND_COINS.push(BOT)
  }

  const PLAYER = new Player({});
  PLAYER.buildItem();
  PLAYER.choseRandomBase(GAME_HEIGHT_IN_BLOCKS, GAME.botBases);
  PLAYER.createStatusInfo(GAME.gameBoard, GAME.level);
  GAME.PLAYERS.push(PLAYER);
  

  const COIN = new Coin({});
  COIN.buildItem();
  COIN.itemParts.forEach(part => {
      part.y += GAME_HEIGHT_IN_BLOCKS
  })
  GAME.COINS.push(COIN);
  GAME.BOTS_AND_COINS.push(COIN)


  GAME.PLAYERS.forEach((player) => {
    document.addEventListener("keyup", (e) => {
      player.setKeys(e.keyCode, GAME_WIDTH_IN_BLOCKS);
    });
  });
}

gameInitialization();

gameLoop();

function gameLoop() {

  GAME.changeLevel();
  GAME.checkTheTouchBetweenItems(() => {
      GAME.COINS.forEach(coin => {
          coin.dissapear(GAME_HEIGHT_IN_BLOCKS)
      })
  })
  HELPERS.clearField();

  GAME.BOTS.forEach((bot) => {
    bot.itemParts.forEach((part) => {
      HELPERS.drawBotSegment(part.x, part.y);
    });
    bot.move(GAME_HEIGHT_IN_BLOCKS);
    bot.reborn(GAME_HEIGHT_IN_BLOCKS, GAME.BOTS_AND_COINS, GAME.botBases);
  });

  GAME.PLAYERS.forEach((player) => {
    player.updateStatus(GAME.level, GAME.scores);
    player.itemParts.forEach((part) => {
      HELPERS.drawCarSegment(part.x, part.y);
    });
  });

  GAME.COINS.forEach(coin => {
    coin.move(GAME_HEIGHT_IN_BLOCKS);
    coin.reborn(GAME_HEIGHT_IN_BLOCKS, GAME.BOTS_AND_COINS, GAME.botBases);
      coin.itemParts.forEach(part => {
        HELPERS.drawCoinSegment(part.x, part.y);
      })
  })

  GAME.BORDERS.forEach((border) => {
    for (let i = 0; i < border.itemParts.length; i++) {
      if (i % 4 !== 0) {
        HELPERS.drawFenceSegment(border.itemParts[i].x, border.itemParts[i].y);
      }
    }
    border.move(GAME_HEIGHT_IN_BLOCKS);
  });

  if(GAME.IS_GAME_OVER === false) {
    setTimeout(gameLoop, GAME.TIME_INTERVAL);
  }
  else if(GAME.IS_GAME_OVER === true) {      
      alert('sorry bro');
      location.reload()
      GAME.IS_GAME_OVER = false
  }
  
}

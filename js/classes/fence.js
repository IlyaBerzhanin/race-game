import GameItem from './game-item.js'

export default class Fence extends GameItem {
    constructor(options) {
        super(options)
        this.itemParts = []
        this.type = 'fence'
        this.map = [
            [1],
            [1],
            [1],
        ]
    }

    createFenceLine(x, y) {
        for (let i = 0; i < this.length; i++) {
          let obj = {
            type: this.type,
            x: x,
            y: y + i,
          };
          this.itemParts[i] = obj;
        }
        
      }
}
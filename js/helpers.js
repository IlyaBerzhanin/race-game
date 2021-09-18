
const GAME_WIDTH = 820;  // ширина поля в пикселях
const GAME_HEIGHT = 600; // высота поля в пикселях
const BLOCK_SIZE = 20;   // размер одной клетки поля в пикселях

const COLOR_BACKGROUND = "#c5f0a7";
const COLOR_CAR = "#ffffff";
const COLOR_BOT = "#000000"
const COLOR_FENCE = '#2ED0EB';
const COLOR_COIN = 'yellow'



 export default  function Helpers() {
    const BLOCK_BORDER_RADIUS = 5;
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext('2d');
    
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    this.clearField = clearField;
    this.drawCarSegment = drawCarSegment;
    this.drawFenceSegment = drawFenceSegment
    this.drawBotSegment = drawBotSegment;
    this.drawCoinSegment = drawCoinSegment

    this.random = {
        getX: getRandomX,
        getY: getRandomY
    }

    function clearField() {
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }

    function drawCarSegment(x, y) {
        roundRect(x, y, COLOR_CAR);
    }

    function drawCoinSegment(x, y) {
        roundRect(x, y, COLOR_COIN);
    }

    function drawFenceSegment(x, y) {
        roundRect(x, y, COLOR_FENCE)
    }

    function drawBotSegment(x, y) {
        roundRect(x, y, COLOR_BOT)
    }
   
    function roundRect(x, y, color) {
        x = x * BLOCK_SIZE;
        y = y * BLOCK_SIZE;
    
        ctx.beginPath();
        ctx.moveTo(x + BLOCK_BORDER_RADIUS, y);
        ctx.lineTo(x + BLOCK_SIZE - BLOCK_BORDER_RADIUS, y);
        ctx.quadraticCurveTo(x + BLOCK_SIZE, y, x + BLOCK_SIZE, y + BLOCK_BORDER_RADIUS);
        ctx.lineTo(x + BLOCK_SIZE, y + BLOCK_SIZE - BLOCK_BORDER_RADIUS);
        ctx.quadraticCurveTo(x + BLOCK_SIZE, y + BLOCK_SIZE, x + BLOCK_SIZE - BLOCK_BORDER_RADIUS, y + BLOCK_SIZE);
        ctx.lineTo(x + BLOCK_BORDER_RADIUS, y + BLOCK_SIZE);
        ctx.quadraticCurveTo(x, y + BLOCK_SIZE, x, y + BLOCK_SIZE - BLOCK_BORDER_RADIUS);
        ctx.lineTo(x, y + BLOCK_BORDER_RADIUS);
        ctx.quadraticCurveTo(x, y, x + BLOCK_BORDER_RADIUS, y);
        ctx.closePath();
        
        ctx.strokeStyle = COLOR_BACKGROUND;
        ctx.fillStyle = color;

        ctx.fill();    
        ctx.stroke();
    }   

    function getRandomX() {
        return getRandomNumber(GAME_WIDTH_IN_BLOCKS);
    }

    function getRandomY() {
        return getRandomNumber(GAME_HEIGHT_IN_BLOCKS);
    }

    function getRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }
}

            









const GAME_WIDTH = 800;  // ширина поля в пикселях
const GAME_HEIGHT = 600; // высота поля в пикселях

const BLOCK_SIZE = 20;   // размер одной клетки поля в пикселях

const GAME_HEIGHT_IN_BLOCKS = GAME_HEIGHT / BLOCK_SIZE - 1; // ширина поля в клетках
const GAME_WIDTH_IN_BLOCKS = GAME_WIDTH / BLOCK_SIZE - 1;   // высота поля в клетках

const TIME_INTERVAL = 500 // интервал времени перерисовки игрового экрана в милисекундах



//описание начальных параметров игрока
const USER = {
    startPosition: { // начальные координаты игрока в вклетках
        x: 20,
        y: 15
    },
    startLength: 4, // начальная длина змеи
    KEYS: {  //коды кнопок управления для этого игрока (посмотреть коды всех кнопок клавиатуры можно тут http://gcctech.org/csc/javascript/javascript_keycodes.htm)
        UP: 38,    // это код стрелки вверх
        DOWN: 40,  // это код стрелки вниз
        LEFT: 37,  // это код стрелки влево
        RIGHT: 39  // это код стрелки вправо
    }
}
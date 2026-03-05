let board = document.querySelector(".board");
const sb = document.querySelector(".btn-start");

const modal = document.querySelector(".modal");
const Startgamemodal = document.querySelector(".start-game");
const Gameovermodal = document.querySelector(".game-over");

const restartbutton = document.querySelector(".btn-restart");

const scoreElement = document.querySelector("#score");
const highscoreElement = document.querySelector("#high-score");
const timeElement = document.querySelector("#Time");

const blockHeight = 50;
const blockWidth = 50;

let score = 0;
let highscore = 0;
let time  = "00:00";

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalid = null;
let timeIntervalid = null;
let food = {x: Math.floor(Math.random()*rows), y: Math.floor(Math.random()* cols)};

const blocks = [];
let snake = [{
    x: 1 , y: 3
}];

let direction = "down";

for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row},${col}`] = block;
    }
}


function render() {
    
    let head = null;

    blocks[`${food.x},${food.y}`].classList.add("food");

    if(direction === "left"){
        head = {
            x: snake[0].x,
            y: snake[0].y - 1
        }
    }else if(direction === "right"){
             head = {
            x: snake[0].x,
            y: snake[0].y + 1
        }
        }else if(direction === "down"){
            head = {
                x: snake[0].x + 1,
                y: snake[0].y
            }
        }else if(direction === "up"){
            head = {
                x: snake[0].x - 1,
                y: snake[0].y
            }
        }


        // logic of wall collision
        if(head.x<0 || head.x >= rows || head.y < 0 || head.y >= cols){
            clearInterval(intervalid);

            modal.style.display = "flex";
            Startgamemodal.style.display = "none";
            Gameovermodal.style.display = "flex";
            return;
        }


        // logic of food consuming 
        if(head.x == food.x && head.y == food.y){
            blocks[`${food.x},${food.y}`].classList.remove("food");
            food = {x: Math.floor(Math.random()*rows), y: Math.floor(Math.random()* cols)};
            blocks[`${food.x},${food.y}`].classList.add("food");
            snake.unshift(head);
            score += 10;
            scoreElement.innerText = score;

            if(score > highscore){
                highscore = score;
                highscoreElement.innerText = highscore;
                localStorage.setItem("highscore", highscore.toString());
            }
        }
        snake.forEach(segment => {
            blocks[`${segment.x},${segment.y}` ].classList.remove("fill");
        })
        snake.unshift(head);
        snake.pop();

        snake.forEach(segment => {
        blocks[`${segment.x},${segment.y}` ].classList.add("fill");
    });
};

sb.addEventListener("click", () => {
    modal.style.display = "none";
    intervalid = setInterval(() => {render()},250);
    timeIntervalid = setInterval(() => {
        let [minute, second] = time.split(":").map(Number);

        if(second == 59){
            minute += 1;
            second = 0;
        } else{
            second += 1;
        }

        time = `${minute}:${second}`;
        timeElement.innerText = time; 
    }, 1000);
});

restartbutton.addEventListener("click", restartGame);

function restartGame() {

    // Stop previous game loop
    clearInterval(intervalid);

    // Remove old food
    if (blocks[`${food.x},${food.y}`]) {
        blocks[`${food.x},${food.y}`].classList.remove("food");
    }

    // Remove old snake
    snake.forEach(segment => {
        if (blocks[`${segment.x},${segment.y}`]) {
            blocks[`${segment.x},${segment.y}`].classList.remove("fill");
        }
    });

    // Reset values
    snake = [{ x: 1, y: 3 }];
    direction = "right";
    food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols)
    };
    score = 0;
    scoreElement.innerText = score;

    highscore = localStorage.getItem("highscore") ? parseInt(localStorage.getItem("highscore")) : 0;
    highscoreElement.innerText = highscore;

    time = "00:00";
    timeElement.innerText = time;

    modal.style.display = "none";

    // Start new game loop
    intervalid = setInterval(render, 250);
}
 

addEventListener("keydown", (event) => {
    if(event.key == "ArrowLeft"){
        direction = "left";
    }
    if(event.key == "ArrowRight"){
        direction = "right";
    }
    if(event.key == "ArrowDown"){
        direction = "down";
    }
    if(event.key == "ArrowUp"){
        direction = "up";
    }
})
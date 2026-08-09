const modal = document.querySelector(".modal");
const gameOver = document.querySelector(".gameOver");
const highScoreElement = document.querySelector("#high-score")
const scoreElement = document.querySelector("#score")
const timeElement = document.querySelector("#time")

modal.addEventListener("click", () => {
    modal.style.display = "none";
    let highScore = localStorage.getItem("highScore") || 0;
    highScoreElement.innerText = highScore;
    let score = 0;
    let time = `00:00`;
    restartbtn = document.querySelector(".restartbtn")
    const board = document.querySelector(".board")
    const blockHeight = 50;
    const blockWidth = 50;
    const cols = Math.floor(board.clientWidth / blockWidth);
    const rows = Math.floor(board.clientHeight / blockHeight)
    let blocks = []
    let direction = 'left';
    let head = null;
    let food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols)
    }

    let snake = [{
        x: 1, y: 12
    }, {
        x: 1, y: 13
    }, {
        x: 1, y: 14
    }]

    let timeInterval = setInterval(() => {
        let [min, sec] = time.split(":").map(Number);
        sec += 1;
        if (sec == 59) {
            min += 1;
            sec = 0;
        }
        if (min < 10) {
            time = `0${min}:`
        }
        else {
            time = `${min}:`
        }
        if (sec < 10) {
            time += `0${sec}`
        } else {
            time += `${sec}`
        }
        timeElement.innerText = time;

    }, 1000)

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const block = document.createElement("div");
            block.classList.add("block");
            board.appendChild(block)
            blocks[`${row}-${col}`] = block
        }
    }
    function render() {
        snake.forEach(function (segment) {
            blocks[`${segment.x}-${segment.y}`].classList.add("fill")
        })
    }
    function move() {
        head = { x: snake[0].x, y: snake[0].y }


        if (direction === 'left') head.y -= 1;
        else if (direction === 'up') head.x -= 1;
        else if (direction === 'right') head.y += 1;
        else if (direction === 'down') head.x += 1;

        snake.forEach(function (segment) {
            blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
        })
        snake.unshift(head);
        snake.pop();

        if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
            clearInterval(gameloop);
            clearInterval(timeInterval);
            gameOver.style.display = "flex";
        }
    }
    function foodLogic() {
        blocks[`${food.x}-${food.y}`].classList.add("food");
        if (head.x === food.x && head.y === food.y) {
            blocks[`${food.x}-${food.y}`].classList.remove("food");
            food = {
                x: Math.floor(Math.random() * rows),
                y: Math.floor(Math.random() * cols)
            }
            snake.unshift(head);

            score += 10;
            scoreElement.innerText = `${score}`;
            highScoreLogic();
        }
    }
    function highScoreLogic() {
        if (highScore <= score) {
            highScore = score;
        }

        highScoreElement.innerText = highScore;

        localStorage.setItem("highScore", highScore.toString())
    }

    let gameloop = setInterval(() => {
        move();
        render();
        foodLogic();
    }, 300);




    window.addEventListener("keydown", (event) => {
        switch (event.code) {
            case 'KeyW':
                direction = 'up'
                break;
            case 'KeyA':
                direction = 'left'
                break;
            case 'KeyS':
                direction = 'down'
                break;
            case 'KeyD':
                direction = 'right'
                break;
        }
    })


    restartbtn.addEventListener("click", () => {
        clearInterval(gameloop);
        time = `00:00`;
        timeElement.innerText = time;
        timeInterval = setInterval(() => {
            let [min, sec] = time.split(":").map(Number);
            sec += 1;
            if (sec == 59) {
                min += 1;
                sec = 0;
            }
            if (min < 10) {
                time = `0${min}:`
            }
            else {
                time = `${min}:`
            }
            if (sec < 10) {
                time += `0${sec}`
            } else {
                time += `${sec}`
            }
            timeElement.innerText = time;

        }, 1000)
        score = 0;
        scoreElement.innerText = `${score}`;

        gameOver.style.display = "none";

        snake = [{ x: 1, y: 12 }, { x: 1, y: 13 }, { x: 1, y: 14 }]

        direction = 'left';

        blocks[`${food.x}-${food.y}`].classList.remove("food");

        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

        gameloop = setInterval(() => {
            move();
            render();
            foodLogic();
        }, 300);
    })

})
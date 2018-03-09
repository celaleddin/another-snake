function setup() {
    var height = 600, width = 1200;
    var canvas = createCanvas(width, height);
    canvas.parent('main-canvas');
    frameRate(10);

    snake.initialise(width, height);
}


function draw() {
    background("#32CD32");
    if (snake.is_moving) {
        snake.update();
    }
    snake.show();
    snake.is_dead();
}


function keyPressed() {
    var current_dir = snake.current_dir;
    var defaultSpeed = snake.defaultSpeed;
    if (keyCode === UP_ARROW && current_dir !== "DOWN") {
        snake.set_dir("UP");
    } else if (keyCode === DOWN_ARROW && current_dir !== "UP") {
        snake.set_dir("DOWN");
    } else if (keyCode === LEFT_ARROW && current_dir !== "RIGHT") {
        snake.set_dir("LEFT");
    } else if (keyCode === RIGHT_ARROW && current_dir !== "LEFT") {
        snake.set_dir("RIGHT");
    } else if (keyCode === ENTER) {
        snake.grow();
    }
}

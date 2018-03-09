var keys_pressed = [];


function setup() {
    var height = 600, width = 1200;
    var canvas = createCanvas(width, height).parent('main-canvas');
    frameRate(10);
    snake.initialise(width, height);
    food.initialise(width, height, snake.size);
}


function draw() {
    background("#32CD32");
    operate_key_press();

    if (snake.is_moving) {
        snake.update();
    }
    snake.is_dead();

    snake.show();
    food.show();

    if (food.is_eaten(snake.get_head())) {
        snake.grow();
        food.feed_new();
    }
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        keys_pressed.push("UP");
    } else if (keyCode === DOWN_ARROW) {
        keys_pressed.push("DOWN");
    } else if (keyCode === LEFT_ARROW) {
        keys_pressed.push("LEFT");
    } else if (keyCode === RIGHT_ARROW) {
        keys_pressed.push("RIGHT");
    } else if (keyCode === ENTER) {
        snake.grow();
    }
}

function operate_key_press() {
    if (keys_pressed.length > 0) {
        snake.set_dir(keys_pressed.shift());
    }
}

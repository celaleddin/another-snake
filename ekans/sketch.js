var keys_pressed = [];


function setup() {
    var height = window.innerHeight, width = window.innerWidth;
    var canvas = createCanvas(width, height).parent('ekans');
    frameRate(10);
    snake.initialise(width, height);
    food.initialise(width, height, snake.size);
}


function draw() {
    if (snake.is_dead()) {
        alert("Game Over!\n\nYour score: " + food.count +
              "\n\nRefresh the page to replay the game.");
    } else {
        background("#32CD32");
        operate_key_press();

        snake.update();
        food.show();
        snake.show();
    }

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

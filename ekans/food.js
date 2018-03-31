var food = {
    width: undefined,
    height: undefined,
    resolution: undefined,

    food_x: undefined,
    food_y:  undefined,

    count: 0,

    initialise: function(canvas_width, canvas_height, resolution) {
        this.width = canvas_width;
        this.height = canvas_height;
        this.resolution = resolution;
        this.feed_new();
    },

    feed_new: function() {
        let x = Math.random() * this.width - this.resolution;
        let y = Math.random() * this.height - this.resolution;

        this.food_x = roundScreenParameter(x, this.resolution);
        this.food_y = roundScreenParameter(y, this.resolution);
    },

    show: function() {
        stroke('#ffff00');
        fill('#ffff00');
        rect(this.food_x, this.food_y, this.resolution, this.resolution);
    },

    is_eaten: function([x_coord, y_coord]) {
        if (x_coord === this.food_x && y_coord === this.food_y) {
            this.count += 1;
            return true;
        } return false;
    }
}

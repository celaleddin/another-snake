var food = {
    width: undefined,
    height: undefined,
    resolution: undefined,

    food_x: undefined,
    food_y:  undefined,

    initialise: function(canvas_width, canvas_height, resolution) {
        this.width = canvas_width;
        this.height = canvas_height;
        this.resolution = resolution;
        this.feed_new();
    },

    feed_new: function() {
        let x = Math.random() * this.width - this.resolution;
        let y = Math.random() * this.height - this.resolution;

        var normalize = function (val, res) {
            return val - (val % res);
        };

        this.food_x = normalize(x, this.resolution);
        this.food_y = normalize(y, this.resolution);
    },

    show: function() {
        rect(this.food_x, this.food_y, this.resolution, this.resolution);
    },

    is_eaten: function([x_coord, y_coord]) {
        if (x_coord === this.food_x && y_coord === this.food_y) {
            return true;
        } return false;
    }
}

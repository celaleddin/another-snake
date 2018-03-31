var snake = {
    // initial body with only head
    body: [{
        x: 0,
        y: 0
    }],
    x_speed: 0,
    y_speed: 0,
    size: 50,
    initial_length: 4,

    screen_width: undefined,
    screen_height: undefined,

    default_speed: undefined,
    current_dir: undefined,
    _is_moving: false,

    initialise: function(width, height) {
        rect(this.body[0].x, this.body[0].y, this.size, this.size);
        for (let i = 0; i < this.initial_length; i++) {
            this.body.push({x: 0, y: 0});
        }
        this.screen_width = roundScreenParameter(width, this.size);
        this.screen_height = roundScreenParameter(height, this.size);
        this.default_speed = this.size;
    },

    set_dir: function(dir) {
        if (dir === "UP" && this.current_dir !== "DOWN") {
            this.set_speed(0, -this.default_speed);
        } else if (dir === "DOWN" && this.current_dir !== "UP") {
            this.set_speed(0, this.default_speed);
        } else if (dir === "RIGHT" && this.current_dir !== "LEFT") {
            this.set_speed(this.default_speed, 0);
        } else if (dir === "LEFT" && this.current_dir !== "RIGHT") {
            this.set_speed(-this.default_speed, 0);
        } else {
            return;
        }
        this.current_dir = dir;
        this._is_moving = true;
    },

    set_speed: function(x, y) {
        this.x_speed = x;
        this.y_speed = y;
    },

    grow: function() {
        let last = this.body[this.body.length-1];
        this.body.push({
            x: last.x,
            y: last.y
        });
    },

    is_dead: function() {
        let head = this.body[0];
        for (let i = 1; i < this.body.length; i++) {
            let part = this.body[i];
            if (this._is_moving && head.x === part.x && head.y === part.y) {
                this._is_moving = false;
                return true;
            }
        } return false;
    },

    get_head: function () {
        return [this.body[0].x, this.body[0].y];
    },

    update: function() {
        // update body
        for (let i = this.body.length-1; i > 0; i--) {
            var prev_cell = this.body[i-1];
            this.body[i] = {
                x: prev_cell.x,
                y: prev_cell.y
            };
        }
        // update head
        let head = this.body[0];
        let new_x = head.x + this.x_speed,
            new_y = head.y + this.y_speed;
        // limiter for continuous area effect
        let limiter = (val, lim) => {
            if (val < 0)
                return lim + val;
            return val % lim;
        };
        head.x = limiter(new_x, this.screen_width);
        head.y = limiter(new_y, this.screen_height);
    },

    show: function() {
        for (let i = 0; i < this.body.length; i++) {
            part_coords = this.body[i];
            fill("#1e7b1e");
            stroke("#2db82d");
            rect(part_coords.x, part_coords.y, this.size, this.size);
        }
    }
};

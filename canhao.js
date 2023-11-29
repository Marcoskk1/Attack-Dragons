class Canhao {
    constructor() {
        this.w = 100;
        this.h = 100;
        this.x = 0.136 * width;
        this.y = 0.37 * height;
        this.angle = 0;
    }


    mostrar() {
        image(imgcanhao, this.x, this.y, this.w, this.h);
    }

    rotacao() {
        if (keyIsDown(RIGHT_ARROW) && this.angle < 0.2) {
            this.angle += 0.01;
        } else if (keyIsDown(LEFT_ARROW) && this.angle > -0.2) {
            this.angle -= 0.01;
        }

        push();
        rotate(this.angle);
        this.mostrar();
        pop();
    }
}
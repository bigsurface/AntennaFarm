class Fox {
    constructor(tail) {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(100, 300);
    this.speed = 10;
    }
    
    move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    }
    
    display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    
}
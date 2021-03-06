class Pendulum9 {
    constructor(originX, frequency, ballRadius, gravity){
        this.originX = originX;
        this.originY = 200;
        this.ballX = originX + frequency;
        this.ballY = this.originY + frequency;
        this.ballRadius = ballRadius;
        this.gravity = gravity;
        this.frequency = frequency;
        this.angle = Math.PI/3;
        this.angleVelocity = .1;
        this.angleAcceleration = .01;
        this.damping = 0.9999;
        this.strokeColor = [183, 135, 39];
        this.strokeWeight = 6;
        this.fillColor = [252,218,95]
        console.log(this.angle)
    }

    updateAngle(){
        this.angleAcceleration = (-1 * gravity / this.frequency) * sin(this.angle);  // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
        this.angleVelocity += this.angleAcceleration;                            // Increment velocity
        this.angleVelocity *= this.damping;                                  // Arbitrary damping
        this.angle += this.angleVelocity;    
    }

    updatePosition(){
        // this.position.set(this.frequency * sin(this.currentAngle), this.frequency * cos(this.angle), 0); 
        // console.log(this.angle);
        this.ballX = Math.sin(this.angle) * this.frequency + this.originX;
        this.ballY = Math.cos(this.angle) * this.frequency; 
    }

    update(){
        this.updateAngle();
        this.updatePosition();
    }

    display(){
        console.log(this.ballX, this.ballY);
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeight);
        fill(this.fillColor);
        line(this.originX, this.originY, this.ballX, this.ballY);
        ellipse(this.ballX, this.ballY, this.ballRadius * 2);

    }

}

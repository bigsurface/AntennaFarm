
const gravity = 0.8;

const foxes = Array.from({ length: 10 },(e, i)=> {
    return new Fox(670, (i+1)*35, (i+1)*50, gravity)
});

function setup(){
    createCanvas(1340, 900);
}

function draw(){
    background(0, 255, 0);

    foxes.forEach(Fox => {
        Fox.update();
        Fox.display();
    })

}
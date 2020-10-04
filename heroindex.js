
const gravity = 0.8;

const heroes = Array.from({ length: 10 },(e, i)=> {
    return new Hero(670, (i+1)*100, (i+1)*50, gravity)
});

function setup(){
    createCanvas(1340, 900);
}

function draw(){
    background(140, 185, 230);

    heroes.forEach(Hero => {
        Hero.update();
        Hero.display();
    })

}
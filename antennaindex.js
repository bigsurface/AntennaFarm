
const gravity = 0.8;
// const myPendulum = new Pendulum(400, 400, 50, gravity);

const pendulums = Array.from({ length: 3 },(e, i)=> {
    return new Pendulum(300, (i+1)*100, (i+1)*30, gravity)
});

const pendulums2 = Array.from({ length: 6 },(e, i)=> {
    return new Pendulum2(300, (i+1)*100, (i+1)*6, gravity)
});

const pendulums3 = Array.from({ length: 9 },(e, i)=> {
    return new Pendulum3(300, (i+1)*100, (i+1)*5, gravity)
});

const pendulums9 = Array.from({ length: 9 },(e, i)=> {
    return new Pendulum9(300, (i+1)*100, (i+1)*5, gravity)
});


function setup(){
    createCanvas(1340, 900);
}

function draw(){
    background(60, 93, 89);

    pendulums.forEach(pendulum => {
        pendulum.update();
        pendulum.display();
    })

    pendulums2.forEach(pendulum2 => {
        pendulum2.update();
        pendulum2.display();
    })

    pendulums3.forEach(pendulum3 => {
        pendulum3.update();
        pendulum3.display();
    })

    pendulums9.forEach(pendulum9 => {
        pendulum9.update();
        pendulum9.display();
    })
}
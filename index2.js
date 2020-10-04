
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

const pendulums4 = Array.from({ length: 3 },(e, i)=> {
    return new Pendulum(700, (i+1)*100, (i+1)*30, gravity)
});

const pendulums5 = Array.from({ length: 6 },(e, i)=> {
    return new Pendulum2(700, (i+1)*100, (i+1)*6, gravity)
});

const pendulums6 = Array.from({ length: 9 },(e, i)=> {
    return new Pendulum3(700, (i+1)*100, (i+1)*5, gravity)
});

const pendulums7 = Array.from({ length: 40 },(e, i)=> {
    return new Pendulum7(300, (i+1)*1, (i+1)*1, gravity)
});

const pendulums8 = Array.from({ length: 40 },(e, i)=> {
    return new Pendulum8(700, (i+1)*1, (i+1)*1, gravity)
});


function setup(){
    createCanvas(1340, 1650);
}

function draw(){
    background(220, 220, 250);

    pendulums7.forEach(pendulum7 => {
        pendulum7.update();
        pendulum7.display();
    })

    pendulums8.forEach(pendulum8 => {
        pendulum8.update();
        pendulum8.display();
    })

    // pendulums.forEach(pendulum => {
    //     pendulum.update();
    //     pendulum.display();
    // })

    pendulums2.forEach(pendulum2 => {
        pendulum2.update();
        pendulum2.display();
    })

    pendulums3.forEach(pendulum3 => {
        pendulum3.update();
        pendulum3.display();
    })

    // pendulums4.forEach(pendulum4 => {
    //     pendulum4.update();
    //     pendulum4.display();
    // })

    pendulums5.forEach(pendulum5 => {
        pendulum5.update();
        pendulum5.display();
    })

    pendulums6.forEach(pendulum6 => {
        pendulum6.update();
        pendulum6.display();
    })


}
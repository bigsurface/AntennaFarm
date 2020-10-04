
// const gravity = 0.8;

// const heroes = Array.from({ length: 10 },(e, i)=> {
//     return new Hero2(670, (i+1)*100, (i+1)*50, gravity)
// });

let twitch;
let shake;

function setup(){
    createCanvas(1340, 460);
    twitch = new Fox();
    shake = new Snake();
}

function draw(){
    background(140, 185, 230);
    twitch.move();
    twitch.display();
    shake.move();
    shake.display();

    // heroes.forEach(Hero2 => {
    //     Hero2.update();
    //     Hero2.display();
    // })

}
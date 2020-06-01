
function setup() {
  createCanvas(1000,600);

  space = "press space to drive";
  shift = "press shift to continue"

  lane1 = createSprite(100, 300, 100, 20);
  lane1.shapeColor = color("yellow");

  lane2 = createSprite(400, 300, 100, 20);
  lane2.shapeColor = color("yellow");

  lane3 = createSprite(700, 300, 100, 20);
  lane3.shapeColor = color("yellow");
  
  lane4 = createSprite(1000, 300, 100, 20);
  lane4.shapeColor = color("yellow");

  road = createSprite(500, 100, 1000, 200);
  road2 = createSprite(500, 500, 1000, 200);

  c1 = createSprite(200, 300, 50, 50);
  c1.shapeColor = color("blue");

  c1a = createSprite(165, 310, 30, 30);
  c1a.shapeColor = color("blue");

  c1b = createSprite(235, 310, 30, 30);
  c1b.shapeColor = color("blue");


  wall = createSprite(800, 300, 50, height/2);
  wall.shapeColor = color("red");

  speed = random(55, 90);

  weight = random(400, 1500);

  state = "serve";
}

function draw() {
  background(0);  
   if((keyDown("SPACE"))&&(state === "serve")) {
    c1.velocityX = speed;
    c1a.velocityX = c1.velocityX;
    c1b.velocityX = c1.velocityX;
   }

   open();

  if(((wall.x - 50) - c1.x) < ((c1.width/2 + wall.width/2))&&((wall.y - c1.y) < (c1.height/2 + wall.height/2))&&((c1.y - wall.y) < (wall.height/2 + c1.height/2))&&((c1.x + 50) - wall.x) < ((wall.width/2 + c1.width/2))) {

    deformation = 0.5 * speed * weight * speed/22509;

     if(deformation > 180) {
      // c1.shapeColor = color("blue");
       c1.velocityX = 0; 
       c1.x = c1.x - 50;
       c1a.velocityX = 0; 
       c1a.x = c1a.x - 50;
       c1b.velocityX = 0; 
       c1b.x = c1b.x - 50;
       state = "play";
      //reset();
     }

     if((deformation < 180)&&(deformation > 100)) {
     // c1.shapeColor = color("green");
      c1.velocityX = 0; 
      c1.x = c1.x - 50;
      c1a.velocityX = 0; 
      c1a.x = c1a.x - 50;
      c1b.velocityX = 0; 
      c1b.x = c1b.x - 50;
      state = "play";
      //reset();
     }

     if(deformation < 100) {
     // c1.shapeColor = color("brown");
      c1.velocityX = 0; 
      c1.x = c1.x - 50;
      c1a.velocityX = 0; 
      c1a.x = c1a.x - 50;
      c1b.velocityX = 0; 
      c1b.x = c1b.x - 50;
      state = "play";
      //reset();
     }
  }

  if(keyDown("r")) {
    reset();
  }
  
  drawSprites();
  fill("yellow");
  text(space, 500, 300);

  if(keyDown("SPACE")) {
    fill("yellow");
    space = "";
  }
  if(space === "") {
    text(shift, 500, 300);
  }
  if(shift === "") {
    text("press 'r' to reset the program", 500, 300);
  }
}

function open() {

  if(state === "play") {
  
  if(keyDown("SHIFT")) {
   wall.y = -5;
   c1.velocityX = 10;
   c1a.velocityX = 10;
   c1b.velocityX = 10;
   shift = "";
  }
}
}

function reset() {
  wall.y = 300;
  c1.y = 300;
  c1a.y = 310;
  c1b.y = 310;
  wall.x = 800;
  c1.x = 200;
  c1a.x = 165;
  c1b.x = 235;
  c1.velocityX = speed;
  c1a.velocityX = c1.velocityX;
  c1b.velocityX = c1.velocityX;
  state === "serve";
  shift = "press shift to continue";
}
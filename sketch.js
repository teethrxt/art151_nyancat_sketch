//melanie and joesph  
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
//line 8 needed let variable
let nyanBg; 
let variable; 
let circles = [];


let color = [
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  //added color code for hot pink
  [255, 182, 180], // hot pink 
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;


async function setup() {
  createCanvas(400, 400);
  background(noNyan);
    nyan = await loadSound('medias/nyanCat.mp3');
    noNyan = await loadImage('medias/nyancatless.gif');
  //added semicolon after nyancatlessgif
  //removed sprinkles load due to not having that in media 
 //NyanCat to NyanCatless uppercase
  //changed media to medias file pathway
}

function draw() {
  // Draw all circles
  //fixed spelling for circles
  //fixed spelling for ellipse
  for (let circle of circles) { 
    fill(circle.colors); 
    ellipse(circle.x, circle.y, 50, 50); 
  }
  

  if (mouseIsPressed) {
    let c = random(colors); 
    //new circle -> newCircle
    //made mousex lowercase
    let newCircle = { 
      x: mouseX, 
      y: mouseY,
      colors: color(c(0), c[1], c[2]) 
    };
    circles.push(newCircle);
  }
}

function mousePressed() {
  let c = random(colors);
  let newCircle = {
    x: mouseX,
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  nyan.setVolume(0.5); 
  nyan.rate(playbackRate); 
   nyan.loop();
  //fixed nyan spelling and playbackrate 
}
function mouseReleased(){
  nyan.stop();


// added === tp up arrow
  // capatilized all of down arrow
  //removed else for down arrow and up arrow and added ===
function keyPressed() {
  if (keycode === UP_ARROW); { 
    playBackRate += 0.1; 
    nyan.rate(playbackRate); 
  } if (keyCode === DOWN_ARROW) { 
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } if (keyCode === LEFT_ARROW) { 
    playbackRate = playbackRate * 1; 
    nyan.rate(playBackRate); 
  }
}

//removed two { 
}
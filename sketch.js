let angle = 0;
let w = 30;
let ma;
let maxDist;

function setup() {
  createCanvas(400,400, WEBGL);
  ma = atan(1/sqrt(2));
  maxDist = dist(0,0,200,200);
}

function draw() {
  background(100);
  ortho(-400,400,400,-400,0,1000);

  rotateX(QUARTER_PI);
  rotateY(ma);

  //rotateX(angle*0.25);

  for(let z = 0; z < height; z += w){
    for(let x = 0; x < width; x += w){
      push();
      let d = dist(x,z,width/2,height/2);
      let offset = map(d, 0, maxDist, -2, 2);
      let a = angle + offset;
      let h = floor(map(sin(a),-1,1,50,400));
      translate(x - width / 2,0, z - height / 2);
      normalMaterial();
      box(w - 2, h, w - 2);
      //rect(x - width / 2 + w / 2,0,w - 2,h);
      pop();
    }
  }
  angle += 0.1;
}

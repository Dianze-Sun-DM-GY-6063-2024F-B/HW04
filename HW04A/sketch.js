let r = 15
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 38, 0);
 noStroke();
  
  for (let n = 0; n < windowWidth; n+=30) {
  
    for (let d = 0; d < windowWidth; d+=30) {
  
      let c=random(["#0f0729","#0f0729","#a3003c","#0f0729"]);
      fill(c);
      let ab= dist(n,d,windowWidth/2,windowHeight/2);
      let l = map(ab,0,dist(0,0,windowWidth/2,windowHeight/2),0,40);
      let ran1=random(-r, r);
      ellipse(n+ran1,d+ran1,l+ran1);
     
    }
  }
  
}

function draw() {
 
}

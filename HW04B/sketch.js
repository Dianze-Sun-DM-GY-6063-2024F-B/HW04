/*
" "title" : "Wall Drawing #46 (1970)",
    "description" : "Vertical lines, not straight, not touching, covering the wall evenly.""*/
let r1=20
let r2=20
let r3=20
let r4=20
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 38, 0);
  noFill(); // Do not fill shapes
  stroke(0);
  strokeWeight(4); // Set stroke color to black
  for (let n = 0; n < windowWidth; n+=windowWidth/70) {
    randomlineV(n,windowHeight/9);
    
  }
}
 function randomlineV(a,b){
  let ran1=random(-r1,r1);
  let ran2=random(-r2,r2);
  let ran3=random(-r3,r3);  
  let ran4=random(-r4,r4);
  let ran5=random(-r1,r1);
  let ran6=random(-r2,r2);
  let ran7=random(-r3,r3);  
  let ran8=random(-r4,r4);
  let ran9=random(-r1,r1);  
  let ran10=random(-r2,r2);
  
  let l=random(470,480);

  let c=random(["#0f0729","#a3003c","#0f0729"]);
  stroke(c);
  line(a, ran1, a+ran2, b+ran2);
  line( a+ran2, b+ran2, a+ran3, 2*b+ran3);
  line( a+ran3, 2*b+ran3,a+ran4,3*b+ran4 );
  line( a+ran4,3*b+ran4, a+ran5, 4*b+ran5);
  line( a+ran5, 4*b+ran5,a+ran6,5*b+ran6 );
  line( a+ran6, 5*b+ran6,a+ran7,6*b+ran7 );
  line( a+ran7, 6*b+ran7,a+ran8,7*b+ran8 );
  line( a+ran8, 7*b+ran8,a+ran9,8*b+ran9 );
  line( a+ran9, 8*b+ran9,a+ran10,windowHeight);
  


 }


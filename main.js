img="";

function preload(){
    img=loadImage("download.jpg")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center();
}

function draw(){
    image( img,0,0,500,500);
    fill("#FF0000");
    text("Dog",50,70);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
}
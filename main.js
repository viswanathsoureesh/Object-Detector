mp="";
input="";
status="";
function preload(){
mp=createCapture(VIDEO);
mp.hide();
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
}

function start(){
    objectdetector=ml5.objectDetector('cocossd' ,modelloaded);
    document.getElementById("status").innerHTML='Status =Detecting Objects';
    input=document.getElementById("input");
}

function modelloaded(){
    console.log("Model Loaded");
    status=true;
    mp.loop();
    mp.speed(1);
    mp.volume(0);
}

function draw(){
    image(mp,0,0,500,500)
}
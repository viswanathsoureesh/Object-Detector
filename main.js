img="";
status="";
function preload(){
    img=loadImage("download.jpg")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center();

    object_dectector=ml5.objectDetector('cocossd',modelLoaded) ;
    document.getElementById("status").innerHTML='Status=Detecting Objects'
}
    
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    object_dectector.detect(img,got_result);
}

function got_result(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
    }
}

function draw(){
    image( img,0,0,500,500);
    fill("#FF0000");
    text("Dog",50,70);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("Cat",250,130);
    noFill();
    stroke("#FF0000");
    rect(230,100,450,350);
}
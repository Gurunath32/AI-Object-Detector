status="";

function preload() {}

function setup() {
    canvas=createCanvas(680,420);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function start() {
    console.log(test);
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
}

function draw() {
    image(video,0,0,600,420);
}
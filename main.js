function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video.size(380,380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
    document.getElementById(object_name).value;
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

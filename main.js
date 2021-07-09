noseX = 0;
noseY = 0;
function preload() {
    Clownnose = loadImage('clownnose.png');
}
function setup() {
    canvas = createCanvas(397, 298);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(397, 298);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y - 20;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
function draw() {
    canvas.center();
    image(video, 0, 0, 397, 298);
    image(Clownnose, noseX, noseY, 45, 45);
    Xpos = mouseX.toFixed(2);
    Ypos = mouseY.toFixed(2);
    document.getElementById("mouseX").innerHTML = "X = " + Xpos;
    document.getElementById("mouseY").innerHTML = "Y = " + Ypos;
}
function takeSnapshot() {
    save('myFilterImage.png');
}
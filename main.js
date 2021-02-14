song = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;
var song;
var button;


rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;
function preload()
{
song = loadSound("harry_potter_theme.mp3");
song2 = loadSound("iphone_11_pro.mp3");
}


function setup()
{
canvas = createCanvas(600, 500);


song.setVolume(0.3);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
console.log("PoseNet has successfully been initiaized"); 
}


function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
scoreRightWrist = results[0]
console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("leftWristX = " + leftWristX + "leftWristY =" + leftWristY);
}
}




function draw()
{
image(video,0,0, 600, 500);
song_song.isPlaying(song);
fill("red");
stroke("yellow");
circle(leftWristX, leftWristY, 20);
circle(rightWristX, rightWristY, 20);

if(scoreLeftWrist > 0.2)
{
    circle(leftWristX, leftWristY, 20);
    song2.pause();

    if(song_song.isPlaying(song) = false)
    {
        song_song.isPlaying(song) = true;
        document.getElementById("song").innerHTML = "Song name is " + song;
    }
}

}

function play()
{
song.play();
song.setVolume(1); 
song.rate(1);
}
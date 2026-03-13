let canvas = document.getElementById("wheel");
let ctx = canvas.getContext("2d");

let rewards=[0,5,10,20,50,0,15,30];

let startAngle=0;
let arc=Math.PI/(rewards.length/2);

let points=0;

function drawWheel(){

for(let i=0;i<rewards.length;i++){

let angle=startAngle+i*arc;

ctx.fillStyle=i%2==0?"#ffcc00":"#ff6600";

ctx.beginPath();

ctx.arc(150,150,150,angle,angle+arc,false);

ctx.arc(150,150,0,angle+arc,angle,true);

ctx.fill();

ctx.save();

ctx.fillStyle="black";

ctx.translate(
150+Math.cos(angle+arc/2)*100,
150+Math.sin(angle+arc/2)*100
);

ctx.fillText(rewards[i],-10,0);

ctx.restore();

}

}

drawWheel();

function spin(){

let spinAngle=Math.floor(Math.random()*360)+720;

startAngle+=spinAngle*Math.PI/180;

ctx.clearRect(0,0,300,300);

drawWheel();

let index=Math.floor(Math.random()*rewards.length);

let reward=rewards[index];

points+=reward;

document.getElementById("result").innerHTML=
"Reward: "+reward+" NAVAA";

document.getElementById("points").innerHTML=
"Points: "+points;

}

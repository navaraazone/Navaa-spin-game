let points = 0;

function spin(){

let rewards=[0,5,10,20,50];

let result=rewards[Math.floor(Math.random()*rewards.length)];

points += result;

document.getElementById("result").innerHTML =
"Reward: "+result+" NAVAA";

document.getElementById("points").innerHTML =
"Points: "+points;

}

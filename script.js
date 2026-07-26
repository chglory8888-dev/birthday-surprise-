// =============================
// Birthday Surprise Script
// =============================


// START BUTTON

function startGame(){

document.getElementById("welcomeScreen")
.classList.add("hidden");


document.getElementById("balloonSection")
.classList.remove("hidden");


createBalloons();

}





// MUSIC

function startMusic(){

let music=document.getElementById("bgMusic");


if(music){

music.volume=0.5;

music.play();

}

}





// CREATE BALLOONS

function createBalloons(){


let box=document.getElementById("balloonBouquet");


if(!box){

return;

}


box.innerHTML="";



let numbers=[
7,15,20,31,45,57,10,26
];



let colors=[

"#ff1744",
"#ff4081",
"#ff9800",
"#ffd600",
"#00e5ff",
"#7c4dff",
"#00e676",
"#e040fb"

];




for(let i=0;i<50;i++){



let item=document.createElement("div");

item.className="balloonItem";


item.style.position="absolute";

item.style.left=
Math.random()*300+"px";


item.style.top=
Math.random()*300+"px";





let balloon=document.createElement("div");


balloon.className="balloon";



let color=
colors[Math.floor(Math.random()*colors.length)];



balloon.style.background=
`radial-gradient(circle at 30% 20%,white,${color},#400020)`;




if(i<8){


let value=numbers[i];


balloon.innerHTML=value;



balloon.onclick=function(){



if(value===26){



balloon.innerHTML="💥";


balloon.classList.add("pop");



let sound=document.getElementById("blastSound");


if(sound){

sound.play();

}



setTimeout(()=>{


document.getElementById("balloonSection")
.classList.add("hidden");



document.getElementById("chinnari")
.classList.remove("hidden");



},1000);



}

else{


balloon.remove();


}



};



}

else{


balloon.innerHTML="";



balloon.onclick=function(){


balloon.remove();


};


}





item.appendChild(balloon);

box.appendChild(item);



}


}

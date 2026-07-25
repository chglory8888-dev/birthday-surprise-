// =============================
// Birthday Surprise Script
// =============================


// Start Game

function startGame(){

document.getElementById("welcomeScreen")
.classList.add("hidden");


document.getElementById("balloonSection")
.classList.remove("hidden");


createBalloons();

}


// Background Music

function startMusic(){

let music=document.getElementById("bgMusic");

if(music){

music.volume=0.5;

music.play();

}

}



// Create Balloons

function createBalloons(){

let box=document.getElementById("balloonBouquet");

box.innerHTML="";


let numbers=[
7,15,20,31,45,57,10,26
];


numbers.sort(()=>Math.random()-0.5);



let positions=[

[180,20],
[90,70],
[270,70],
[40,150],
[340,150],
[120,220],
[250,220],
[190,300]

];



for(let i=0;i<50;i++){


let item=document.createElement("div");

item.className="balloonItem";


let balloon=document.createElement("div");

balloon.className="balloon";



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


let color=
colors[Math.floor(Math.random()*colors.length)];



balloon.style.background=
`radial-gradient(circle at 30% 20%,white,${color},#400020)`;



if(i<8){

item.style.left=positions[i][0]+"px";

item.style.top=positions[i][1]+"px";


balloon.innerHTML="?";


let value=numbers[i];



balloon.onclick=function(){


if(value===26){


let sound=document.getElementById("blastSound");

if(sound){

sound.play();

}


balloon.innerHTML="💥";

balloon.classList.add("pop");



setTimeout(()=>{


document.getElementById("balloonSection")
.classList.add("hidden");


document.getElementById("chinnari")
.classList.remove("hidden");


},1000);



}

else{


let wrong=document.getElementById("wrongSound");


if(wrong){

wrong.play();

}


balloon.innerHTML="❌";


setTimeout(()=>{

balloon.innerHTML="?";

},800);



}


};


}


else{


item.style.left=
(50+Math.random()*350)+"px";


item.style.top=
(20+Math.random()*330)+"px";


balloon.innerHTML="";


}



item.appendChild(balloon);

box.appendChild(item);



}


}
// =============================
// Chinnari Next To Cake
// =============================

function showCake(){

document.getElementById("chinnari")
.classList.add("hidden");


document.getElementById("cakeSection")
.classList.remove("hidden");

}



// =============================
// Blow Candle
// =============================

function blowCandle(){

let candles=document.querySelector(".candles");

let text=document.querySelector(".wish-text");


if(candles){

candles.innerHTML="";

}


if(text){

text.innerHTML=
"✨ Your Wish Will Come True ❤️";

}



setTimeout(()=>{


document.getElementById("cakeSection")
.classList.add("hidden");


document.getElementById("giftSection")
.classList.remove("hidden");


},2000);



}




// =============================
// Gift Open
// =============================

function openGift(){

let gift=document.querySelector(".gift-box");


if(gift){

gift.innerHTML="✨🎁✨";

gift.style.transform="scale(1.5)";

}



setTimeout(()=>{


document.getElementById("giftSection")
.classList.add("hidden");


document.getElementById("memorySection")
.classList.remove("hidden");


startSlider();



},1500);



}





// =============================
// Photo Slider
// =============================


let photos=[

"IMG20250801125626.jpg",
"IMG20250801130030.jpg",
"IMG20250801130041.jpg",
"IMG20250808202607.jpg",
"IMG20250808202610.jpg",
"IMG20250808202801.jpg",
"IMG20250809204959.jpg",
"IMG20250809205006.jpg",
"IMG20250813114618.jpg",
"IMG20250813114658.jpg",
"IMG20250816134319.jpg",
"IMG20251004182338.jpg",
"IMG20251004182550.jpg",
"IMG20251004182657.jpg",
"IMG20251004182706.jpg",
"IMG20251207194247.jpg"

];


let photoIndex=0;



function startSlider(){


let image=document.getElementById("slideImage");


if(!image){

return;

}



setInterval(()=>{


photoIndex++;


if(photoIndex>=photos.length){

photoIndex=0;

}



image.style.opacity=0;



setTimeout(()=>{


image.src=photos[photoIndex];


image.style.opacity=1;



},500);



},4000);



}




// =============================
// Wishes
// =============================


function showWishes(){


document.getElementById("memorySection")
.classList.add("hidden");


document.getElementById("wishSection")
.classList.remove("hidden");


}




// =============================
// Password
// =============================


function showPassword(){


document.getElementById("wishSection")
.classList.add("hidden");


document.getElementById("passwordSection")
.classList.remove("hidden");


}




function checkPassword(){


let pass=
document.getElementById("password").value;



if(pass==="26-07-2020"){


document.getElementById("passwordSection")
.classList.add("hidden");


document.getElementById("videoSection")
.classList.remove("hidden");



}

else{


document.getElementById("secretMessage")
.innerHTML=
"❌ Wrong Password Try Again";


}



}
// =============================
// Video Section
// =============================


function showFinal(){


document.getElementById("videoSection")
.classList.add("hidden");


document.getElementById("finalMessage")
.classList.remove("hidden");



// Firework Sound

let sound =
document.getElementById("fireworkSound");


if(sound){

sound.volume=0.7;

sound.play();

}



// Start Fireworks

createFireworks();



}



// =============================
// Fireworks Effect
// =============================


function createFireworks(){


let area=
document.getElementById("fireworks");



if(!area){

return;

}



setInterval(()=>{


let burst=
document.createElement("div");



burst.className=
"firework-burst";



burst.innerHTML="✨";



burst.style.left=
Math.random()*90+"%";



burst.style.top=
Math.random()*70+"%";



burst.style.fontSize=
(40+Math.random()*50)+"px";



area.appendChild(burst);



setTimeout(()=>{


burst.remove();



},1500);



},500);



}





// =============================
// Video Music Control
// =============================


window.onload=function(){


let video=
document.getElementById("birthdayVideo");


let music=
document.getElementById("bgMusic");



if(video && music){



video.addEventListener("play",()=>{


music.pause();


});




video.addEventListener("ended",()=>{


music.play();


});



}



};

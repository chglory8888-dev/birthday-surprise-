// =============================
// Birthday Surprise Script
// =============================


// Start Game

function createBalloons(){

let box=document.getElementById("balloonBouquet");

console.log(box);

box.innerHTML="";

}


// =============================
// Background Music
// =============================

function startMusic(){

let music=document.getElementById("bgMusic");

if(music){

music.volume=0.5;

music.play();

}

}





// =============================
// Create Balloons
// =============================

function createBalloons(){

alert("Balloons Function Working");


let box=document.getElementById("balloonBouquet");

...


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



item.style.left=
(20+Math.random()*350)+"px";


item.style.top=
(20+Math.random()*350)+"px";



let balloon=document.createElement("div");

balloon.className="balloon";



let color=
colors[Math.floor(Math.random()*colors.length)];



balloon.style.background=
`radial-gradient(circle at 30% 20%,white,${color},#400020)`;





if(i<8){


// Number balloons

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


balloon.innerHTML="❌";


setTimeout(()=>{

balloon.innerHTML=value;

},800);



}


};



}

else{


// Empty balloons


balloon.innerHTML="";


balloon.onclick=function(){


balloon.innerHTML="❌";


setTimeout(()=>{


balloon.innerHTML="";


},800);



};



}





item.appendChild(balloon);

box.appendChild(item);



}


}






// =============================
// Cake
// =============================

function showCake(){


document.getElementById("chinnari")
.classList.add("hidden");


document.getElementById("cakeSection")
.classList.remove("hidden");


}




function blowCandle(){


let candle=document.querySelector(".candles");


let text=document.querySelector(".wish-text");



if(candle){

candle.innerHTML="";

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
// Gift
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
// Photos
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



let count=0;



let timer=setInterval(()=>{


photoIndex++;


count++;



if(photoIndex>=photos.length){

photoIndex=0;

}



image.src=photos[photoIndex];



if(count>=photos.length){


clearInterval(timer);



document.getElementById("photoNextBtn")
.classList.remove("hidden");


}



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
// Final
// =============================


function showFinal(){


document.getElementById("videoSection")
.classList.add("hidden");


document.getElementById("finalMessage")
.classList.remove("hidden");



createFireworks();



let sound=document.getElementById("fireworkSound");


if(sound){

sound.play();

}



}






// =============================
// Fireworks
// =============================


function createFireworks(){


let area=document.getElementById("fireworks");


if(!area){

return;

}



setInterval(()=>{


let burst=document.createElement("div");


burst.className="firework-burst";


burst.innerHTML="✨";


burst.style.left=
Math.random()*90+"%";


burst.style.top=
Math.random()*70+"%";


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

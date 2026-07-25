// =============================
// Birthday Surprise Script
// =============================


// Start Game

function startGame(){

document.getElementById("welcomeScreen")
.classList.add("hidden");


document.getElementById("balloonSection")
.classList.remove("hidden");


startMusic();

createBalloons();

}





// Background Music

function startMusic(){

let music=document.getElementById("bgMusic");

music.volume=0.5;

music.play()
.catch(()=>{

console.log("Music waiting");

});

}





// Create Balloon Bouquet

function createBalloons(){

let box=document.getElementById("balloonBouquet");

box.innerHTML="";


let numbers=[
7,15,20,31,45,57,10,26
];


// create 50 balloons

for(let i=0;i<50;i++){


let item=document.createElement("div");

item.className="balloonItem";



let balloon=document.createElement("div");

balloon.className="balloon";



// positions

item.style.left=
Math.random()*330+"px";


item.style.top=
Math.random()*300+"px";



// first 8 balloons have numbers

if(i<8){


balloon.innerHTML=numbers[i];



balloon.onclick=function(){



if(numbers[i]===26){


// correct

document.getElementById("blastSound")
.play();



balloon.innerHTML="💥";


balloon.style.transform="scale(2)";


setTimeout(()=>{


document.getElementById("balloonSection")
.classList.add("hidden");


document.getElementById("chinnari")
.classList.remove("hidden");


},800);



}

else{


// wrong

document.getElementById("wrongSound")
.play();


balloon.innerHTML="❌";


}

};


}



item.appendChild(balloon);

box.appendChild(item);



}

}





// Chinnari Next

function showCake(){


document.getElementById("chinnari")
.classList.add("hidden");


document.getElementById("cakeSection")
.classList.remove("hidden");


}





// Candle

function blowCandle(){


document.getElementById("cakeSection")
.classList.add("hidden");


document.getElementById("giftSection")
.classList.remove("hidden");


}





// Gift Open

function openGift(){


document.getElementById("giftSection")
.classList.add("hidden");


document.getElementById("memorySection")
.classList.remove("hidden");


startSlider();


}





// Photo Slider


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


setInterval(()=>{


photoIndex++;


if(photoIndex>=photos.length){

photoIndex=0;

}



document.getElementById("slideImage")
.src=photos[photoIndex];


},3000);



}





// Wishes


function showWishes(){


document.getElementById("memorySection")
.classList.add("hidden");


document.getElementById("wishSection")
.classList.remove("hidden");


}





// Password


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





// Video Music Control


let video=
document.getElementById("birthdayVideo");


let music=
document.getElementById("bgMusic");



if(video){


video.addEventListener("play",()=>{

music.pause();

});



video.addEventListener("ended",()=>{

music.play();

});


}





// Final


function showFinal(){


document.getElementById("videoSection")
.classList.add("hidden");


document.getElementById("finalMessage")
.classList.remove("hidden");


// fireworks sound

let sound=document.getElementById("fireworkSound");

sound.volume=0.7;

sound.play();


// start fireworks

createFireworks();


}
function createFireworks(){

let area=document.getElementById("fireworks");


setInterval(()=>{


let spark=document.createElement("span");


spark.innerHTML="✨";


spark.style.position="absolute";

spark.style.left=Math.random()*100+"%";

spark.style.top=Math.random()*80+"%";

spark.style.fontSize=
(20+Math.random()*40)+"px";


area.appendChild(spark);



setTimeout(()=>{

spark.remove();

},1500);



},300);


}
function createFireworks(){

let area=document.getElementById("fireworks");


setInterval(()=>{


let fire=document.createElement("div");


fire.className="firework";


fire.innerHTML="✨";


fire.style.left=
Math.random()*90+"%";


fire.style.top=
Math.random()*70+"%";


fire.style.fontSize=
(30+Math.random()*50)+"px";


area.appendChild(fire);



setTimeout(()=>{

fire.remove();

},1500);



},250);


}

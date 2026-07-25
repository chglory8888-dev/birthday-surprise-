// =======================
// Start Surprise
// =======================

function startGame(){

    document.getElementById("welcomeScreen")
    .classList.add("hidden");

    document.getElementById("balloonSection")
    .classList.remove("hidden");

    createBalloons();

}




// =======================
// Background Music
// =======================

function startMusic(){

    let music = document.getElementById("bgMusic");

    if(music){

        music.play();

    }

}




// =======================
// Balloons
// =======================

let balloonNumbers = [
3,15,57,20,31,10,26,45
];


function createBalloons(){

let container=document.getElementById("balloonBouquet");

container.innerHTML="";


let numbers=[
7,15,20,31,45,57,10,26
];


// 50 empty balloons

for(let i=0;i<50;i++){

let div=document.createElement("div");

div.className="balloonItem";


let balloon=document.createElement("div");

balloon.className="balloon";


// every 6th balloon gets number

if(i < 8){

balloon.classList.add("number");

balloon.innerHTML=numbers[i];


balloon.onclick=function(){


if(numbers[i]===26){

document.getElementById("blastSound").play();


balloon.innerHTML="💥";


setTimeout(()=>{

document.getElementById("balloonSection")
.classList.add("hidden");


document.getElementById("chinnari")
.classList.remove("hidden");


},700);


}

else{

document.getElementById("wrongSound").play();

}


};


}
else{

balloon.innerHTML="";

}



div.appendChild(balloon);

container.appendChild(div);


}

}






// =======================
// Cake
// =======================

function showCake(){

    document.getElementById("chinnari")
    .classList.add("hidden");


    document.getElementById("cakeSection")
    .classList.remove("hidden");

}



function blowCandle(){

    document.getElementById("cakeSection")
    .classList.add("hidden");


    document.getElementById("giftSection")
    .classList.remove("hidden");


}






// =======================
// Gift
// =======================

function openGift(){

    document.getElementById("giftSection")
    .classList.add("hidden");


    document.getElementById("memorySection")
    .classList.remove("hidden");


}







// =======================
// 20 Images Slider
// =======================


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
"IMG20251207194247.jpg",
"Snapchat-1511237649.jpg",
"Snapchat-974702302.jpg",
"IMG20250809123456.jpg",
"IMG20250810123456.jpg"

];


let photoIndex=0;



setInterval(function(){


let image =
document.getElementById("slideImage");


if(image){


photoIndex++;


if(photoIndex >= photos.length){

photoIndex=0;

}


image.src=photos[photoIndex];


}


},3000);







// =======================
// Wishes
// =======================

function showWishes(){

    document.getElementById("memorySection")
    .classList.add("hidden");


    document.getElementById("wishSection")
    .classList.remove("hidden");

}







// =======================
// Password
// =======================

function showPassword(){

    document.getElementById("wishSection")
    .classList.add("hidden");


    document.getElementById("passwordSection")
    .classList.remove("hidden");

}



function checkPassword(){


let password =
document.getElementById("password").value;


if(password==="26-07-2020"){


document.getElementById("passwordSection")
.classList.add("hidden");


document.getElementById("videoSection")
.classList.remove("hidden");


}

else{


document.getElementById("secretMessage")
.innerHTML="Wrong Password ❌";


}


}







// =======================
// Final + Fireworks
// =======================

function showFinal(){


document.getElementById("videoSection")
.classList.add("hidden");


document.getElementById("finalMessage")
.classList.remove("hidden");



let sound =
document.getElementById("fireworkSound");


if(sound){

sound.play();

}


createFireworks();


}


function createFireworks(){

let box=document.getElementById("fireworks");


for(let i=0;i<80;i++){


let spark=document.createElement("span");


spark.className="spark";


spark.style.left=Math.random()*100+"%";

spark.style.top=Math.random()*70+"%";


spark.style.animationDelay=
Math.random()*2+"s";


box.appendChild(spark);


}

        }
setInterval(function(){

let image=document.getElementById("slideImage");

if(image){

image.classList.add("slide-animation");


setTimeout(()=>{

photoIndex++;

if(photoIndex >= photos.length){
photoIndex=0;
}


image.src=photos[photoIndex];


image.classList.remove("slide-animation");


},1000);

}

},4000);
// =======================
// Video Music Control
// =======================

let video = document.getElementById("birthdayVideo");
let music = document.getElementById("bgMusic");


if(video && music){


    // Video start - music mute

    video.addEventListener("play", function(){

        music.pause();

    });



    // Video pause - music continue

    video.addEventListener("pause", function(){

        music.play();

    });



    // Video end - music continue

    video.addEventListener("ended", function(){

        music.play();

    });


}
let balloons = document.querySelectorAll(".balloon");


balloons.forEach(balloon => {


balloon.onclick = function(){


let number = balloon.innerHTML;


if(number == "26"){


document.getElementById("blastSound").play();


balloon.style.transform="scale(2)";

balloon.style.opacity="0";


setTimeout(()=>{


document.getElementById("balloonSection")
.classList.add("hidden");


document.getElementById("chinnari")
.classList.remove("hidden");


},800);



}

else{


document.getElementById("wrongSound").play();


balloon.innerHTML="💥";


balloon.style.opacity="0";


}



}


});
function popEffect(balloon){

for(let i=0;i<20;i++){

let particle=document.createElement("span");

particle.className="particle";


particle.style.left=
balloon.offsetLeft+"px";


particle.style.top=
balloon.offsetTop+"px";


document.body.appendChild(particle);



setTimeout(()=>{

particle.remove();

},1000);


}


balloon.style.transform="scale(0)";

balloon.style.opacity="0";


}


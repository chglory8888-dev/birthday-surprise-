// Heart Beat Effect
function startSurprise() {
    document.getElementById("message").style.display = "block";

    let music = document.getElementById("music");
    music.play();

    createHearts();
}


// Floating Hearts
function createHearts() {
    setInterval(() => {

        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 300);
}


// Typing Effect
let text = "With Lots of Love ❤️ From Our Loving Family Members";
let index = 0;

function typing() {
    if(index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing,100);
    }
}

typing();
// Birthday Countdown

let birthdayDate = new Date("August 15, 2026 00:00:00").getTime();

let countdown = setInterval(function(){

    let now = new Date().getTime();

    let distance = birthdayDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
    days + " Days " + hours + " Hours "
    + minutes + " Minutes " + seconds + " Seconds ";

    if(distance < 0){
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML =
        "🎉 Happy Birthday ❤️🎂";
        fireworks();
    }

},1000);


// Fireworks Effect 🎆

function fireworks(){

    for(let i=0; i<50; i++){

        let fire = document.createElement("div");

        fire.className = "firework";
        fire.innerHTML = "✨";

        fire.style.left = Math.random()*100+"vw";
        fire.style.top = Math.random()*80+"vh";

        document.body.appendChild(fire);

        setTimeout(()=>{
            fire.remove();
        },2000);
    }
}
// Memory Photo Animation

let photos = document.querySelectorAll(".memory");

photos.forEach((photo,index)=>{

    photo.style.animationDelay = index + "s";

});
// Cake Cutting Effect

function cutCake(){

    let cake = document.querySelector(".cake");

    cake.classList.add("cut");

    document.getElementById("cakeMessage").innerHTML =
    "🎉 Cake Cut Successfully ❤️🎂<br>Make a Beautiful Wish ✨";


    createHearts();

}
// Gift Opening Animation

function openGift(){

    let gift = document.querySelector(".gift");

    gift.innerHTML = "🎉";

    document.getElementById("giftMessage").innerHTML =
    "Surprise Opened ❤️";


    document.getElementById("finalMessage").style.display="block";


    createHearts();

}
// Background Music

function startMusic(){

    let music = document.getElementById("music");

    music.play();

}


// Full Screen Celebration

function celebration(){

    document.getElementById("celebration")
    .style.display="block";

    createHearts();

}
// Confetti Creation 🎊

function createConfetti(){

    let symbols = ["🎉","✨","❤️","🎂","🎁"];

    for(let i=0; i<100; i++){

        let confetti = document.createElement("div");

        confetti.className="confetti";

        confetti.innerHTML =
        symbols[Math.floor(Math.random()*symbols.length)];

        confetti.style.left =
        Math.random()*100+"vw";

        confetti.style.animationDuration =
        (2+Math.random()*3)+"s";

        document.body.appendChild(confetti);


        setTimeout(()=>{
            confetti.remove();
        },5000);

    }

}


// Run Celebration

function finalCelebration(){

    createConfetti();
    createHearts();

}
// Open Website Button

function startWebsite(){

    document.getElementById("welcomeScreen")
    .classList.add("hideWelcome");


    startMusic();

    createHearts();

}
// Background Music 🎵

function startMusic(){

    let music = document.getElementById("music");

    if(music){
        music.play();
    }

}



// Heart Floating Animation ❤️

function createHearts(){

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
    (20 + Math.random()*30) + "px";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },5000);

}



setInterval(()=>{

    createHearts();

},500);






// Typing Message Effect 💌

let message =
"With Lots of Love ❤️ From Our Loving Family Members";


let i = 0;


function typingEffect(){

    if(i < message.length){

        document.getElementById("typing").innerHTML +=
        message.charAt(i);

        i++;

        setTimeout(typingEffect,100);

    }

}


typingEffect();






// Birthday Countdown 🎂

let birthday =
new Date("August 15, 2026 00:00:00").getTime();



setInterval(()=>{


let now = new Date().getTime();


let time = birthday - now;



let days =
Math.floor(time/(1000*60*60*24));


let hours =
Math.floor((time%(1000*60*60*24))/(1000*60*60));


let minutes =
Math.floor((time%(1000*60*60))/(1000*60));


let seconds =
Math.floor((time%(1000*60))/1000);



document.getElementById("countdown").innerHTML =

days+" Days ❤️ "+
hours+" Hours "+
minutes+" Minutes "+
seconds+" Seconds";


},1000);
if(password === "27-07-2020"){
    // Love Letter Open 💌

function openLetter(){

    document.getElementById("letter")
    .style.display="block";

    createHearts();

}



// Secret Password 🔐

function checkPassword(){

    let password =
    document.getElementById("password").value;


    if(password === "27-07-2020"){


        document.getElementById("secretMessage").innerHTML =
        "🎉 Secret Surprise Unlocked ❤️🎁";


        document.getElementById("grandFinal")
        .style.display="block";


        createConfetti();
        createHearts();


    }
    else{


        document.getElementById("secretMessage").innerHTML =
        "❌ Wrong Password";


    }

}





// Photo Slideshow 📸

let images = [

"photo1.jpg",

"photo2.jpg",

"photo3.jpg"

];


let imageIndex = 0;


setInterval(()=>{


    imageIndex++;


    if(imageIndex >= images.length){

        imageIndex = 0;

    }


    document.getElementById("slideImage")
    .src = images[imageIndex];


},3000);






// Grand Celebration 🎉

function grandCelebration(){

    document.getElementById("grandFinal")
    .style.display="block";


    createConfetti();

    createHearts();

}
    // Sparkle Creation ✨

function createSparkles(){

    let sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";


    sparkle.style.left =
    Math.random()*100+"vw";


    sparkle.style.animationDuration =
    (2+Math.random()*3)+"s";


    document.body.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },5000);

}


setInterval(()=>{

    createSparkles();

},500);
    if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js");

    }

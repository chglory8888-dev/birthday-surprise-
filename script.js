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

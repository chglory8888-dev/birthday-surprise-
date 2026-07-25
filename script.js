// Background Music 🎵

function startMusic(){

    let music = document.getElementById("bgMusic");

    music.play();

}



// Start Surprise ❤️

function startWebsite(){

    document.getElementById("welcomeScreen").style.display="none";

    document.getElementById("mainContent").style.display="block";

    startMusic();

}



// Balloons 🎈

let balloonNumbers = [3,15,57,20,31,10,26,45];


function createBalloons(){

    let container =
    document.getElementById("balloonContainer");


    balloonNumbers.forEach(num=>{


        let balloon = document.createElement("div");


        balloon.className="balloon";


        // Number on balloon

        balloon.innerHTML = num;



        balloon.onclick=function(){



            if(num === 26){


                document.getElementById("balloonSection")
                .style.display="none";


                document.getElementById("chinnari")
                .classList.remove("hidden");


            }

            else{


                balloon.style.transform="scale(0)";

                balloon.style.opacity="0";


            }


        };


        container.appendChild(balloon);



    });


}


createBalloons();






// Hii Chinnari ➜ Cake 🎂

function showCake(){


    document.getElementById("chinnari")
    .style.display="none";


    document.getElementById("cakeSection")
    .classList.remove("hidden");


}







// Candle Blow 🕯️

function blowCandle(){


    document.getElementById("cakeMessage")
    .innerHTML =
    "🎉❤️ HAPPY BIRTHDAY SHANVITHA PRIYA ❤️🎉";


    createCrackers();



    setTimeout(()=>{


        document.getElementById("cakeSection")
        .style.display="none";


        document.getElementById("giftSection")
        .classList.remove("hidden");


    },3000);



}







// Crackers 🎆

function createCrackers(){


    let cracker=document.createElement("div");


    cracker.innerHTML="🎆✨🎇";


    cracker.style.position="fixed";

    cracker.style.top="40%";

    cracker.style.left="40%";

    cracker.style.fontSize="60px";


    document.body.appendChild(cracker);



    setTimeout(()=>{


        cracker.remove();


    },3000);


}







// Gift Open 🎁

function openGift(){


    document.getElementById("giftSection")
    .style.display="none";


    document.getElementById("memorySection")
    .classList.remove("hidden");


}







// Images ➜ Wishes 📸

function showWishes(){


    document.getElementById("memorySection")
    .style.display="none";


    document.getElementById("wishSection")
    .classList.remove("hidden");


}








// Wishes ➜ Password 🔐

function showPassword(){

document.getElementById("passwordSection")
.classList.remove("hidden");

}







// Password Check 🔐

function checkPassword(){


    let password =
    document.getElementById("password").value;



    if(password === "26-07-2020"){


        document.getElementById("passwordSection")
        .style.display="none";


        document.getElementById("videoSection")
        .classList.remove("hidden");


    }


    else{


        document.getElementById("secretMessage")
        .innerHTML =
        "❌ Wrong Password";


    }


}








// Video & Music Control 🎥🎵

window.onload=function(){


let video =
document.getElementById("birthdayVideo");


let music =
document.getElementById("bgMusic");



if(video){


video.addEventListener("play",()=>{


    music.pause();


});



video.addEventListener("ended",()=>{


    music.play();


});


}



};








// Video ➜ Final ❤️

function showFinal(){


    document.getElementById("videoSection")
    .style.display="none";


    document.getElementById("finalMessage")
    .classList.remove("hidden");


}
// Automatic Photo Slider 📸

let photos = [

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
"Snapchat-974702302.jpg"

];


let photoIndex = 0;


let photoIndex = 0;

setInterval(function(){

photoIndex++;

if(photoIndex >= photos.length){
photoIndex = 0;
}

document.getElementById("slideImage").src = photos[photoIndex];

},3000);
// Password check code
function checkPassword(){

    let pass = document.getElementById("password").value;

    if(pass=="DD-MM-YEAR"){

        document.getElementById("passwordSection")
        .classList.add("hidden");

        document.getElementById("videoSection")
        .classList.remove("hidden");

    }

}


// Final message open

function showFinal(){

    document.getElementById("videoSection")
    .classList.add("hidden");


    document.getElementById("finalMessage")
    .classList.remove("hidden");

}


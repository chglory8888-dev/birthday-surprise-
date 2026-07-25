// Background Music 🎵

function startMusic(){

    let music = document.getElementById("bgMusic");

    music.play();

}



// Welcome Start

function startGame(){

    document.getElementById("welcomeScreen")
    .style.display="none";


    document.getElementById("balloonSection")
    .classList.remove("hidden");


}



// Balloon Game 🎈

let balloonNumbers = [3,15,57,20,31,10,26,45];


function createBalloons(){

    let container =
    document.getElementById("balloonContainer");


    balloonNumbers.forEach(num=>{


        let balloon = document.createElement("div");


        balloon.className="balloon";


        balloon.innerHTML=num;



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






// Show Cake 🎂

function showCake(){


    document.getElementById("chinnari")
    .style.display="none";


    document.getElementById("cakeSection")
    .classList.remove("hidden");


}







// Blow Candle 🕯️

function blowCandle(){


    document.getElementById("cakeMessage")
    .innerHTML =
    "🎉❤️ HAPPY BIRTHDAY ❤️🎉";


    createCrackers();


    setTimeout(()=>{


        document.getElementById("cakeSection")
        .style.display="none";


        document.getElementById("giftSection")
        .classList.remove("hidden");


    },3000);


}






// Crackers Effect 🎆

function createCrackers(){


    let cracker=document.createElement("div");


    cracker.innerHTML="🎆🎇✨";


    cracker.style.position="fixed";

    cracker.style.top="40%";

    cracker.style.left="40%";

    cracker.style.fontSize="50px";


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








// Wishes 💌

function showWishes(){


    document.getElementById("memorySection")
    .style.display="none";


    document.getElementById("wishSection")
    .classList.remove("hidden");


}








// Password 🔐

function showPassword(){


    document.getElementById("wishSection")
    .style.display="none";


    document.getElementById("passwordSection")
    .classList.remove("hidden");


}




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
        .innerHTML="❌ Wrong Password";


    }


}








// Video & Music Control 🎥🎵

let birthdayVideo =
document.getElementById("birthdayVideo");


let bgMusic =
document.getElementById("bgMusic");



if(birthdayVideo){


birthdayVideo.addEventListener("play",()=>{


    bgMusic.pause();


});



birthdayVideo.addEventListener("ended",()=>{


    bgMusic.play();


});


}








// Final Message ❤️

function showFinal(){


    document.getElementById("videoSection")
    .style.display="none";


    document.getElementById("finalMessage")
    .classList.remove("hidden");


}

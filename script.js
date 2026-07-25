// Welcome Screen ❤️

function startWebsite(){

    document.getElementById("welcomeScreen")
    .classList.add("hideWelcome");


    setTimeout(()=>{

        document.getElementById("welcomeScreen")
        .style.display="none";

    },1000);


}



// Cake Click 🎂

function cutCake(){

    document.getElementById("cakeMessage").innerHTML =
    "🎉 Cake Cut Successfully ❤️";


    createHearts();

}



// Gift Open 🎁

function openGift(){

    document.getElementById("giftMessage").innerHTML =
    "🎁 Your Special Surprise is Opened ❤️";


    document.getElementById("finalMessage")
    .style.display="block";


    createConfetti();

    createHearts();

}



// Password 🔐

function checkPassword(){

    let password =
    document.getElementById("password").value;


    if(password === "26-07-2020"){


        document.getElementById("secretMessage").innerHTML =
        "🎉 Secret Surprise Unlocked ❤️🎁";


        createConfetti();

        createHearts();


    }

    else{


        document.getElementById("secretMessage").innerHTML =
        "❌ Wrong Password";


    }

}





// Floating Hearts ❤️

function createHearts(){

    let heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.bottom="0";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize="30px";

    heart.style.animation="float 5s linear";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },5000);

}




// Confetti 🎉

function createConfetti(){

    let confetti=document.createElement("div");

    confetti.innerHTML="🎉";

    confetti.style.position="fixed";

    confetti.style.top="0";

    confetti.style.left=Math.random()*100+"vw";

    confetti.style.fontSize="30px";

    document.body.appendChild(confetti);


    setTimeout(()=>{

        confetti.remove();

    },3000);

}
// మీ existing JavaScript code


// Balloon Game 🎈

let balloonNumbers = [3,15,57,20,31,10,26,45];


function createBalloons(){

    let container = document.getElementById("balloonContainer");


    balloonNumbers.forEach(num=>{

        let balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.innerHTML = num;


        balloon.onclick = function(){

            if(num === 26){

                document.getElementById("balloonSection")
                .style.display="none";


                document.getElementById("chinnari")
                .classList.remove("hidden");

            }

            else{

                balloon.style.opacity="0";
                balloon.style.transform="scale(0)";

            }

        };


        container.appendChild(balloon);

    });

}


createBalloons();

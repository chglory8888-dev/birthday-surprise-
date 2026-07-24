// Open Gift Button
function openGift() {

    const welcome = document.querySelector(".welcome");
    const surprise = document.getElementById("surprise");

    if (welcome && surprise) {
        welcome.style.display = "none";
        surprise.style.display = "block";
    }

}


// Page Load
window.onload = function() {

    const surprise = document.getElementById("surprise");

    if (surprise) {
        surprise.style.display = "none";
    }

};

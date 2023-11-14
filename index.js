var imageSources = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
];

function toggleer() {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var element1 = document.querySelector(".img1");
    element1.setAttribute("src", imageSources[randomNumber1]);


    var randomNumber2 = Math.floor(Math.random() * 6);
    var element2 = document.querySelector(".img2");
    element2.setAttribute("src", imageSources[randomNumber2]);


    var header = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        header.innerHTML = "player 1 wins! 🚩";
    } else if (randomNumber1 < randomNumber2){
        header.innerHTML = "🚩 player 2 wins!"
    } else {
        header.innerHTML = "Draw!"
    }
}

toggleer();


/*
// Call the function to change the image when the page is fully loaded
window.onload = function() {
    toggleer();
};*/


/* Move NO button */
function moveNo() {
    const noBtn = document.getElementById("noBtn");

    const x = Math.random() * 250;
    const y = Math.random() * 40;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* YES Celebration */
function yesClick() {
    document.getElementById("celebrate").style.display = "block";

    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

/* Create Confetti */
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const colors = ["#ff1744", "#ffea00", "#00e676", "#2979ff", "#f500ff"];

    confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDuration =
        Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

/* Floating Hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️💕";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 30 + 25 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);

/* ✨ Sparkles Generator */

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 4000);
}

setInterval(createSparkle, 300);

document.addEventListener("click", function () {
    document.getElementById("bgMusic").play();
});

// Ahmed Abd-Algayed
// Ahmed Abd-Algayed
// Ahmed Abd-Algayed
const hole = document.getElementById("hole");
const obstacle = document.getElementById("obstacle");
const bird = document.getElementById("bird");

let score = 0;
let isJumping = false;


hole.addEventListener("animationiteration", () => {
    let rand = Math.random() * (500 - 150);
    hole.style.top = rand + "px";
    score++;
});


setInterval(() => {
    let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if (!isJumping) {
        bird.style.top = birdTop + 3 + "px"; // الجاذبية
    }

    let obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    let birdLeft = parseInt(getComputedStyle(bird).getPropertyValue("left"));

    // Game Over
    if (
        birdTop > 480 ||
        (
            obstacleLeft < birdLeft + 20 &&
            obstacleLeft + 50 > birdLeft &&
            (birdTop < holeTop || birdTop > holeTop + 150)
        )
    ) {
        alert(`Game Over , Your Score: ${score}`);
        bird.style.top = "100px";
        obstacle.style.left = "100%";
        hole.style.left = "100%";
        score = 0;
    }
}, 10);


document.addEventListener("click", () => {
    if (isJumping) return;
    isJumping = true;
    let jumpCount = 0;

    let jumpInterval = setInterval(() => {
        let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
        if (birdTop > 0 && jumpCount < 15) {
            bird.style.top = birdTop - 5 + "px";
            jumpCount++;
        } else {
            clearInterval(jumpInterval);
            isJumping = false;
        }
    }, 10);
});

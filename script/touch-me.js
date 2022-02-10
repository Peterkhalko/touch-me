const start = document.querySelector("button");
const container = document.querySelector(".container");
const playGame = document.querySelector("#game");
const buttons = document.querySelectorAll("#buttons");
let clickCounter = document.querySelector("#counter");
let counter = 0;
let exitCounter = 0;
console.log(buttons);
let game = () => {
  buttons[0].style.display = "none";
  buttons[1].style.display = "none";
  let myColors = [
    "#D82E2F",
    "#FF6263",
    "#5DA3FA",
    "#46B2E0",
    "#6EC72D",
    "#1C8D73",
    "#DDD101",
    "#35BDD0",
    "#0D0D0D",
    "#1B98F5",
    "#FF6263",
  ];
  colorsLength = myColors.length;
  let blocks = document.querySelectorAll(".blocks");
  let blocksLength = blocks.length;
  let gameInterval = setInterval(() => {
    let color = myColors[Math.random() * colorsLength];
    let randValue = Math.floor(Math.random() * blocksLength);
    let randColor = Math.floor(Math.random() * colorsLength);
    blocks[randValue].style.cssText = `visibility:visible`;
    blocks[randValue].style.backgroundColor = myColors[randColor];
    disspear(randValue);
  }, 500);
  disspear = (randValue) => {
    let wonInterval = setInterval(() => {
      blocks[randValue].style.cssText = `visibility:hidden`;
    }, 800);
    blocks[randValue].addEventListener("click", (e) => {
      party.confetti(e, {
        count: party.variation.range(20, 40),
      });
      clearInterval(gameInterval);
      clearInterval(wonInterval);
      exitCounter = 1;
    });
  };
};
let dribble = () => {
  buttons[0].style.display = "none";
  buttons[1].style.display = "none";
  console.log("dribble");
  let myColors = [
    "#D82E2F",
    "#FF6263",
    "#5DA3FA",
    "#46B2E0",
    "#6EC72D",
    "#1C8D73",
    "#DDD101",
    "#35BDD0",
    "#0D0D0D",
    "#1B98F5",
    "#FF6263",
  ];
  colorsLength = myColors.length;
  let blocks = document.querySelectorAll(".blocks");
  let blocksLength = blocks.length;
  let practiceInterval = setInterval(() => {
    let color = myColors[Math.random() * colorsLength];
    let randValue = Math.floor(Math.random() * blocksLength);
    let randColor = Math.floor(Math.random() * colorsLength);
    blocks[randValue].style.cssText = `visibility:visible`;
    blocks[randValue].style.backgroundColor = myColors[randColor];
  }, 100);
};
document.body.addEventListener("click", (e) => {
  counter++;
  clickCounter.style.cssText = `visibility:visible`;
  clickCounter.style.margin = `15px`;
  clickCounter.innerHTML = `Your Clicks: ${counter}`;
  if (exitCounter == 1) {
    // code to stop counter to increment on click
  }
});
start.addEventListener("click", dribble);
playGame.addEventListener("click", game);

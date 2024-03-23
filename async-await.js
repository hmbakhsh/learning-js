// who won the game, game score, result

function getGameWinner() {
  const teams = ["Faze Clan", "G2 Esports", "Vitality", "Spirit"];
  let randomIndex = Math.floor(Math.random() * teams.length);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(teams[randomIndex]);
    }, 1000);
  });
}

function createGameScore() {
  let loseScore = Math.floor(Math.random() * 11);
  return [13, loseScore];
}

function getGameScore() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(createGameScore());
    }, 1000);
  });
}

async function getWinner() {
  let gameWinner = await getGameWinner();
  let gameScore = await getGameScore();
  console.log("Major Winner:", gameWinner, gameScore);
}

getWinner();

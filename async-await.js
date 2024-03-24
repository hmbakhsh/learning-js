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

// Dependent Promise Calls (Not actually but has the run time as if it was one by one)
async function getWinner() {
  try {
    let gameWinner = await getGameWinner();
    let gameScore = await getGameScore();
    console.log("(Dependent) Major Winner:", gameWinner, gameScore);
  } catch (err) {
    console.log(err);
  }
}

// Concurrent Promise Calls
async function getWinner2() {
  try {
    let gameWinner = getGameWinner();
    let gameScore = getGameScore();
    console.log(
      "(Concurrent) Major Winner:",
      await gameWinner,
      await gameScore,
    );
  } catch (err) {
    console.log(err);
  }
}

async function allGetWinner() {
  try {
    let arrPromise = await Promise.all([getGameScore(), getGameWinner()]);
    console.log(arrPromise);
  } catch (error) {
    console.log(error);
  }
}

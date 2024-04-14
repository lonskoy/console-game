#!/usr/bin/env node

const readline = require("readline");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "logGame.txt");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minRange = 1;
const maxRange = 2;
const secretNumber =
  Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

console.log(`Отгадай число 1 или 2`);

rl.on("line", (input) => {
  const guess = parseInt(input);

  if (isNaN(guess)) {
    console.log("Введите числовое значение.");
  } else {
    if (guess === secretNumber) {
      fs.appendFile(dir, `{wins: true}, `, (err) => {
        if (err) throw Error(err);
        console.log("Вы угадали число");
        endGame();
      });
    } else {
      fs.appendFile(dir, `{wins: false}, `, (err) => {
        if (err) throw Error(err);
        console.log("Вы не угадали число");
        endGame();
      });
    }
  }
});

function endGame() {
  console.log("Спасибо за игру!");
  rl.close();
}

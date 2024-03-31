#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const minRange = 0;
const maxRange = 100;
const secretNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
let attempts = 0;

console.log(`Загадано число в диапазоне от ${minRange} до ${maxRange}`);

rl.on('line', (input) => {
  const guess = parseInt(input);

  if (isNaN(guess)) {
    console.log('Введите числовое значение.');
  } else {
    attempts++;

    if (guess < secretNumber) {
      console.log('Больше');
    } else if (guess > secretNumber) {
      console.log('Меньше');
    } else {
      console.log(`Отгадано число ${secretNumber} за ${attempts} попыток.`);
      rl.close();
    }
  }
});
#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
let allGame = 0;
let looseGame = 0;
let winGame = 0;
let winGameProc = 0;

const dir = path.join(__dirname, "logGame.txt");

try {
  let data = fs.readFileSync(dir, "utf-8", (err, data) => {
    if (err) throw Error(err);
    return
  });

  // Удаление лишних символов
  const cleanedData = data.replace(/{|}| /g, "");

  // Разделение данных на массив объектов
  const objectsArray = cleanedData.split(",").map((item) => {
    const [key, value] = item.split(":");
    return { [key]: value };
  });

  allGame = objectsArray.length -1;

  objectsArray.map(el => {
    if(el.wins === 'true') winGame += 1
    else looseGame += 1
  })

  winGameProc = (winGame / allGame * 100).toFixed(2)

  console.log(`Всего сыграно партий: ${allGame} \n Побед: ${winGame} \n Поражений: ${looseGame -1} \n Соотношение побед ко всем играм: ${winGameProc}%`)
} catch (err) {
  console.error("Ошибка чтения файла:", err);
}

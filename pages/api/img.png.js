const text2png = require('text2png');
const fs = require('fs');
const path = require('path');
import { registerFont } from 'canvas';

module.exports = (req, res) => {
  registerFont(path.resolve('./public/SpecialElite-Regular.ttf'), { family: 'Special Elite' });
  let data = fs.readFileSync(path.resolve('./public/data.json'), 'utf8');
  let jsonData = JSON.parse(data);
  let element = jsonData[Math.floor(Math.random() * jsonData.length)];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.send(text2png(`"${element.quote.match(/.{1,64}(\s|$)/g).join('\n')}"\n-- ${element.source} by ${element.author}`, {
    color: 'gray',
    font: '40px Special Elite'
  }));
};
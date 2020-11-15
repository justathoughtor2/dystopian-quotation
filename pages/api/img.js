const textToImage = require('text-to-image');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  let data = fs.readFileSync(path.resolve('./public/data.json'), 'utf8');
  let jsonData = JSON.parse(data);
  let element = jsonData[Math.floor(Math.random() * jsonData.length)];
  textToImage.generate(`"${element.quote}"\n-- ${element.source} by ${element.author}`, { width: 720 }).then(function (dataUri) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send({quotation: dataUri});
  });
};
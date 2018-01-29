let chirps = ["a", "b", "c", "d", "e"];
const path = require('path');
const fs = require('fs');
// const request = require('request');

let dataPath = path.join(__dirname, '../chirps.json');
//console.log(dataPath);

fs.writeFile('../chirps.json', chirps, (err) => {
    if (err) throw err;
    console.log('Chirp saved!');
});

fs.readFile(dataPath, {
    encoding: "UTF-8",
}, (err, data) => {

    console.log(data);
    // var person = JSON.parse(data);
    // console.log(person.name);
    // console.log(person.greet);
});







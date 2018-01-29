const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, 'popular-articles.json');

//const rp = require('request-promise');

// rp('https://reddit.com/r/popular.json', (err, res, body) => {

//     if (err) console.log(err);

//     let data = JSON.parse(body).data;

//     let reddit = data.children.map(item => {
//         return {
//             title: item.data.title,
//             author: item.data.author,
//             url: item.data.url
//         }
//     })

//     let red = JSON.stringify(reddit, null, 4);

//     fs.writeFile(dataPath, red, err => {
//         if (err) console.log(err);
//     })

// });

const request = require('request');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    fs.writeFile(dataPath, res.body, err => {
        if (err) console.log(err);
    });
});
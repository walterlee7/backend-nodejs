const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

// let dataPath = path.join(__dirname, './downloads/', 'hello' + '.jpg');

// const options = {
//     url: 'https://b.thumbs.redditmedia.com/shcivmNAZ1IAETJ75q3fIiG_GAxZQfzXoDVJOgTehBM.jpg',
//     encoding: null
// };

// rp.get(options)
//     .then(function (res) {
//         const buffer = Buffer.from(res, 'utf8');
//         fs.writeFileSync(dataPath, buffer);
//     });

rp('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    let data = JSON.parse(body).data;

    let reddit = data.children.map(item => {
        return {
            id: item.data.id,
            thumbnail: item.data.thumbnail
        };

    })

    //console.log(path.extname(reddit[0].thumbnail));





    for (let i = 0; i < reddit.length; i++) {

        if (path.extname(reddit[i].thumbnail) === '.jpg') {
            let dataPath = path.join(__dirname, './downloads/', reddit[i].id + path.extname(reddit[i].thumbnail));
            //console.log(dataPath);

            const options = {
                url: reddit[i].thumbnail,
                encoding: null
            };

            rp.get(options)
                .then(function (res) {
                    const buffer = Buffer.from(res, 'utf8');
                    fs.writeFileSync(dataPath, buffer);
                });
        }
        // let dataPath = path.join(__dirname, './downloads/', reddit[i].id + path.extname(reddit[i].thumbnail));
        // //console.log(dataPath);

        // const options = {
        //     url: reddit[i].thumbnail,
        //     encoding: null
        // };

        // rp.get(options)
        //     .then(function (res) {
        //         const buffer = Buffer.from(res, 'utf8');
        //         fs.writeFileSync(dataPath, buffer);
        //     });

    }


});

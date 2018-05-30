let loremIpsum = require('lorem-ipsum');

function lor(numOf, type) {
    let lorem = loremIpsum({
        count: numOf,
        units: type
    })
    return lorem
}

function dataBuilder() {

    let allObjects = [];

    console.log(allObjects);

    
    for (var i = 0; i < 30; i++) {

        let obj = {

            id: parseInt(Math.random() * 300),
            title: lor(3, 'words'),
            intro: lor(2, 'sentences')

        }
        allObjects.push(obj);
    }

    return allObjects;
}

module.exports = {
    dataBuilder: dataBuilder
}
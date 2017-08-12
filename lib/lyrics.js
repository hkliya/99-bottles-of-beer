const _ = require("lodash");

function withUnit(amount) {
    if (amount > 1) {
        return `${amount} bottles`;
    }

    if (amount === 1) {
        return '1 bottle';
    }

    return 'no more bottles';
}

let toLyric = function (amount) {
    let firstLine = `${_.capitalize(withUnit(amount))} of beer on the wall, ${withUnit(amount)} of beer.`;
    let secondLine = `Take one down and pass it around, ${withUnit(amount - 1)} of beer on the wall.`;
    if (amount === 0) {
        secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }
    return firstLine + '\n' + secondLine;
};

function range(amount) {
    let array = [];
    for (let i = amount; i >= 0; i--) {
        array.push(i);
    }
    return array;
}

let toLyrics = (amount) => {
    return range(amount).map(amount => toLyric(amount)).join('\n');
};

module.exports = toLyrics;
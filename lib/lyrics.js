const _ = require("lodash");

function withUnit(amount) {
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

let toLyrics = (amount) => {
    if (amount === 1) {
        return toLyric(1) + '\n' + toLyric(0);
    }

    return toLyric(amount);
};

module.exports = toLyrics;
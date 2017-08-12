const _ = require("lodash");

function withUnit(amount) {
    return 'no more bottles';
}

let toLyrics = (amount) => {
    return `${_.capitalize(withUnit(amount))} of beer on the wall, ${withUnit(amount)} of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
};

module.exports = toLyrics;
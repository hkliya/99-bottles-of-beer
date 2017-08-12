"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var toLyrics = require("../lib/lyrics.js");


describe("Lyrics", function() {
    it("should generate lyrics given 0", function () {
        let lyrics = toLyrics(0);
        expect(lyrics).to.equal(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
    });

    it("should generate lyrics given 1", function () {
        let lyrics = toLyrics(1);
        expect(lyrics).to.equal(`1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
    });

    it("should generate lyrics given 2", function () {
        let lyrics = toLyrics(2);
        expect(lyrics).to.equal(`2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
    });

});
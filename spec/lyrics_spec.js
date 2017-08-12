"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var toLyrics = require("../lib/lyrics.js");


describe("Lyrics", function() {
    it("should generate lyrics", function () {
        let lyrics = toLyrics(0);
        expect(lyrics).to.equal(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
    });
});
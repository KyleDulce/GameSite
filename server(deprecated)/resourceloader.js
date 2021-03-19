const filesystem = require('fs');
const readline = require('readline');

function ResourceLoader() {
    this.redflagdata = null;
}

ResourceLoader.prototype.getResourcesOfClass = function getResourcesOfClass(data) {
    return new Promise((resolve, reject) => {

        var endFunc = null;

        switch(data) {
            case "Red Flags":
                endFunc = this.getRedFlagsResources;
                break;
            case "Tycoon":
                endFunc = this.getTraditionalFullDeck;
            default:
                resolve(null);
        }

        endFunc(this).then((result) => {
            resolve(result);
        });

    }) ;
}

ResourceLoader.prototype.loadTxtAsArray = function loadTxtAsArray(file) {
    return new Promise((resolve, reject) => {
        const readInterface = readline.createInterface({
            input: filesystem.createReadStream(file),
            output: process.stdout,
            terminal: false
        });
        
        var linesArray = [];

        readInterface.on('line', function(line) {
            linesArray.push(line);
        });

        readInterface.on('close', function() {
            resolve(linesArray);
        })

    });
}

ResourceLoader.prototype.getTraditionalFullDeck = function getTraditionalFullDeck(self) {
    return new Promise((resolve, reject) => {
        var deck = []
        
        var suits = ["H", "D", "S", "C"];
        //go through each suit
        for(let s of suits) {
            for(var a = 1; a <= 13; a++) {
                var c = new Card();

                c.suit = s;
                c.value = a;

                deck.push(c);
            }
        }

        var bj = new Card();
        bj.suit = "B";
        bj.value = 14;

        var rj = new Card();
        rj.suit = "R";
        rj.value = 14;

        deck.push(bj);
        deck.push(rj);

        resolve(deck);
    });
}

ResourceLoader.prototype.getJokerlessTraditionalFullDeck = function getTraditionalFullDeck(self) {
    return new Promise((resolve, reject) => {
        var deck = []
        
        var suits = ["H", "D", "S", "C"];
        //go through each suit
        for(let s of suits) {
            for(var a = 1; a <= 13; x++) {
                var c = new Card();

                c.suit = s;
                c.value = a;

                deck.push(c);
            }
        }

        resolve(deck);
    });
}

ResourceLoader.prototype.getRedFlagsResources = function getRedFlagsResources(self) {
    return new Promise((resolve, reject) => {
        if(self.redflagdata != null) {
            resolve(self.redflagdata);
        } else {
            Promise.all([
                self.loadTxtAsArray(REDFLAG_BASE_FLAGS),
                self.loadTxtAsArray(REDFLAG_BASE_PERKS),
                self.loadTxtAsArray(REDFLAG_TEST_FLAGS),
                self.loadTxtAsArray(REDFLAG_TEST_PERKS),
                self.loadTxtAsArray(REDFLAG_CUSDIRT_FLAGS),
                self.loadTxtAsArray(REDFLAG_CUSDIRT_PERKS),
                self.loadTxtAsArray(REDFLAG_ANG_PERKS),
                self.loadTxtAsArray(REDFLAG_ANG_FLAGS),
                self.loadTxtAsArray(REDFLAG_TORT_PERKS),
                self.loadTxtAsArray(REDFLAG_TORT_FLAGS)
            ]).then((result) => {
                var decks = new RedFlagDecks();
                //var deckresult = 0;

                var basedeck = new RedFlagData(result[0], result[1]);
                decks.baseDeck = basedeck;

                var testd = new RedFlagData(result[2], result[3]);
                decks.testDeck = testd;

                var cddeck = new RedFlagData(result[4], result[5]);
                decks.cddeck = cddeck;

                var angDeck = new RedFlagData(result[6], result[7]);
                decks.angDeck = angDeck;

                var tortDeck = new RedFlagData(result[8], result[9]);
                decks.tortDeck = tortDeck;

                self.redflagdata = decks;
                resolve(decks);
            });
        }
    });
}

module.exports = ResourceLoader;

//deck of cards data

class Card {
    suit
    value
}

//redflag data
const REDFLAG_BASE_PERKS = "./assets/redflags/basedeck/perks.txt";
const REDFLAG_BASE_FLAGS = "./assets/redflags/basedeck/flags.txt";

const REDFLAG_TEST_PERKS = "./assets/redflags/testdeck/perks.txt";
const REDFLAG_TEST_FLAGS = "./assets/redflags/testdeck/flags.txt";

const REDFLAG_CUSDIRT_PERKS= "./assets/redflags/customDirtyDeck/perks.txt";
const REDFLAG_CUSDIRT_FLAGS= "./assets/redflags/customDirtyDeck/flags.txt";

const REDFLAG_ANG_PERKS= "./assets/redflags/angDeck/perks.txt";
const REDFLAG_ANG_FLAGS= "./assets/redflags/angDeck/flags.txt";

const REDFLAG_TORT_PERKS= "./assets/redflags/tortDeck/perks.txt";
const REDFLAG_TORT_FLAGS= "./assets/redflags/tortDeck/flags.txt";

class RedFlagDecks {
    baseDeck
    testDeck
    cddeck
    angDeck
    tortDeck

    getDeckFromString(str) {
        switch(str) {
            case "Base Deck":
                return this.baseDeck;
            case "Test Deck":
                return this.testDeck;
            case "Custom Dirty Deck":
                return this.cddeck;
            case "Ang's Deck":
                return this.angDeck;
            case "Tortino's Deck":
                return this.tortDeck;
            default:
                return null;
        }
    }
}

class RedFlagData {
    flags
    perks
    constructor(f, p) {
        this.flags = f;
        this.perks = p;
    }
}
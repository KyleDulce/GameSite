const filesystem = require('fs');
const readline = require('readline');

export class ResourceLoader {

    redflagdata!: RedFlagDecks;
    fullDeck!:TraditionalDeck;
    jokerlessDeck!:TraditionalDeck;

    constructor() {}
    
    public getResourcesOfClass(resourceId: string): Promise<Resource> {
       return new Promise((resolve, reject) => {
           var resultFunc: any;

            switch(resourceId) {
                case "Red Flags":
                    resultFunc = this.getRedFlagsResources;
                    break;
                case "Tycooon":
                    resultFunc = this.getTraditionalFullDeck;
                    break;
                case "Poker":
                    resultFunc = this.getJokerlessTraditionalFullDeck;
                default:
                    resolve(new EmptyResource());
            }

            resultFunc(this).then((result: any) => {
                resolve(result);
            }).catch((result: any) => {
                reject(result);
            });
       }); 
    }

    public loadTxtAsArray(file: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            const readInterface = readline.createInterface({
                input: filesystem.createReadStream(file),
                output: process.stdout,
                terminal: false
            });

            var linesArray: string[] = [];

            readInterface.on('line', function(line: string) {
                linesArray.push(line);
            });

            readInterface.on('close', function() {
                resolve(linesArray);
            });
        });
    }

    public getTraditionalFullDeck(self: ResourceLoader): Promise<TraditionalDeck> {
        return new Promise((resolve, reject) => {
            if (self.fullDeck != null) {
                var cloned: TraditionalDeck = TraditionalDeck.clone(self.fullDeck);
                resolve(cloned);
                //resolve(self.fullDeck);
            } else {
                var deck: Card[] = [];

                var suits: string[] = ["H", "D", "S", "C"];

                for (let s of suits) {
                    for (var a = 1; a <= 13; a++) {
                        var c: Card = { suit: s, value: a };

                        deck.push(c);
                    }
                }

                var bj: Card = { suit: "B", value: 14 };
                var rj: Card = { suit: "B", value: 14 };

                deck.push(bj);
                deck.push(rj);

                self.fullDeck = {deck: deck};

                var cloned: TraditionalDeck = TraditionalDeck.clone(self.fullDeck);
                resolve(cloned);
                //resolve(self.fullDeck);
            }
        });
    }

    public getJokerlessTraditionalFullDeck(self: ResourceLoader): Promise<TraditionalDeck> {
        return new Promise((resolve, reject) => {
            if (self.jokerlessDeck != null) {
                var cloned: TraditionalDeck = TraditionalDeck.clone(self.jokerlessDeck);
                resolve(cloned);
                //resolve(self.jokerlessDeck);
            } else {

                var deck: Card[] = [];

                var suits: string[] = ["H", "D", "S", "C"];

                for (let s of suits) {
                    for (var a = 1; a <= 13; a++) {
                        var c: Card = { suit: s, value: a };

                        deck.push(c);
                    }
                }

                self.jokerlessDeck = {deck: deck};
                var cloned: TraditionalDeck = TraditionalDeck.clone(self.jokerlessDeck);
                resolve(cloned);
                //resolve(self.jokerlessDeck);
            }
        });
    }

    public getRedFlagsResources(self: ResourceLoader): Promise<RedFlagDecks> {
        return new Promise((resolve, reject) => {
            if(self.redflagdata != null) {
                var cloned: RedFlagDecks = RedFlagDecks.clone(self.redflagdata);
                //resolve(self.redflagdata);
                resolve(cloned);
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
                ]).then((result: string[][]) => {
                    var decks: RedFlagDecks = new RedFlagDecks();

                    decks.baseDeck = new RedFlagDeck(result[0], result[1]);
                    decks.testDeck = new RedFlagDeck(result[0], result[1]);
                    decks.cddeck = new RedFlagDeck(result[0], result[1]);
                    decks.angDeck = new RedFlagDeck(result[0], result[1]);
                    decks.tortDeck = new RedFlagDeck(result[0], result[1]);

                    self.redflagdata = decks;
                    var cloned: RedFlagDecks = RedFlagDecks.clone(self.redflagdata);
                    //resolve(decks);
                    resolve(cloned);
                }).catch((reason) => {
                    reject(reason);
                })
            }
        });
    }

}

export class Resource {}
export class EmptyResource extends Resource {}

//Basic Deck Data
export class TraditionalDeck extends Resource {
    deck!: Card[]

    static clone(data: TraditionalDeck): TraditionalDeck {
        var r: TraditionalDeck = new TraditionalDeck();
        r.deck = CloneArray<Card>(data.deck, cloneCard);
        return r;
    }
}

export class Card {
    suit!: string
    value!: number
}

//Red Flags Data
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

export class RedFlagDecks extends Resource {
    baseDeck!: RedFlagDeck
    testDeck!: RedFlagDeck
    cddeck!: RedFlagDeck
    angDeck!: RedFlagDeck
    tortDeck!: RedFlagDeck
    emptyDeck: RedFlagDeck = {flags: [], perks: []};

    getDeckFromString(str: string): RedFlagDeck {
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
                return this.emptyDeck;
        }
    }

    static clone(data: RedFlagDecks): RedFlagDecks {
        var r = new RedFlagDecks();
        r.baseDeck = RedFlagDeck.clone(data.baseDeck);
        r.testDeck = RedFlagDeck.clone(data.testDeck);
        r.cddeck = RedFlagDeck.clone(data.cddeck);
        r.angDeck = RedFlagDeck.clone(data.angDeck);
        r.tortDeck = RedFlagDeck.clone(data.tortDeck);
        r.emptyDeck = RedFlagDeck.clone(data.emptyDeck);

        return r
    }
}

export class RedFlagDeck {
    flags: string[];
    perks: string[];

    constructor(f: string[], p: string[]) {
        this.flags = f;
        this.perks = p;
    }

    static clone(data: RedFlagDeck): RedFlagDeck {
        return new RedFlagDeck(CloneArray<string>(data.flags, cloneString), CloneArray<string>(data.perks, cloneString))
    }
}

function CloneArray<E>(arr: Array<E>, cloneFunc?: Function): Array<E> {
    var r: Array<E> = [];
    for(var x = 0; x < arr.length; x++) {
        if(cloneFunc == null) {
            r.push(arr[x]);
        } else {
            r.push(cloneFunc(arr[x]));
        }
    }
    return r;
}

function cloneString(str: string): string {
    return str.slice();
}

function cloneCard(obj: Card): Card {
    var r: Card = new Card();
    r.suit = cloneString(obj.suit);
    r.value = obj.value;
    return r;
}
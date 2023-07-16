"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var api = 'https://official-joke-api.appspot.com/random_joke';
console.log("Fetching record from " + api);
axios_1.default.get(api).then(function (response) {
    var randomjokes = response.data;
    var type = randomjokes.type;
    var setup = randomjokes.setup;
    var punchline = randomjokes.punchline;
    var id = randomjokes.id;
    printRamdonJokes(type, setup, punchline, id);
});
var printRamdonJokes = function (type, setup, punchline, id) {
    if (id > 0 && id <= 100) {
        console.log("\n            Id is between 0 to 100\n            Received Id: ".concat(id, "\n            Type: ").concat(type, "\n            Setup: ").concat(setup, "\n            PunchLine: ").concat(punchline, "\n        "));
    }
    else if (id > 101 && id <= 200) {
        console.log("\n            Id is between 101 to 200\n            Received Id: ".concat(id, "\n            Type: ").concat(type, "\n            Setup: ").concat(setup, "\n            PunchLine: ").concat(punchline, "\n        "));
    }
    else if (id > 201 && id <= 400) {
        console.log("\n            Id is between 201 to 400\n            Received Id: ".concat(id, "\n            Type: ").concat(type, "\n            Setup: ").concat(setup, "\n            PunchLine: ").concat(punchline, "\n        "));
    }
    else {
        console.log("\n        Id does not match our condition\n        Received Id: ".concat(id, "\n        Type: ").concat(type, "\n        Setup: ").concat(setup, "\n        PunchLine: ").concat(punchline, "\n    "));
    }
};

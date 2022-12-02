var rounds = require('fs').readFileSync('02/input.txt').toString().split("\r\n");

var roundPoints = 0;
rounds.forEach(round => {

    var opponent = round[0];
    var me = round[2];

    switch(me) {
        case 'X':
            if (opponent == 'A') {
                roundPoints += 3;
            } else if (opponent == 'B') {
                roundPoints += 1;
            } else {
                roundPoints += 2;
            }
            break;

        case 'Y':
            roundPoints += 3;
            if (opponent == 'A') {
                roundPoints += 1;
            } else if (opponent == 'B') {
                roundPoints += 2;
            } else {
                roundPoints += 3;
            }
            break;

        case 'Z':
            roundPoints += 6;
            if (opponent == 'A') {
                roundPoints += 2;
            } else if (opponent == 'B') {
                roundPoints += 3;
            } else {
                roundPoints += 1;
            }
            break;
    }
})

console.log(roundPoints)
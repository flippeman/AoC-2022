var rounds = require('fs').readFileSync('02/input.txt').toString().split("\r\n");

var roundPoints = 0;
rounds.forEach(round => {

    var opponent = round[0];
    var me = round[2];

    switch(me) {
        case 'X':
            roundPoints += 1;
            if (opponent == 'A') {
                roundPoints += 3
            } else if (opponent == 'C') {
                roundPoints += 6;
            }
            break;

        case 'Y':
            roundPoints += 2;
            if (opponent == 'B') {
                roundPoints += 3
            } else if (opponent == 'A') {
                roundPoints += 6;
            }
            break;

        case 'Z':
            roundPoints += 3;
            if (opponent == 'C') {
                roundPoints += 3
            } else if (opponent == 'B') {
                roundPoints += 6;
            }
            break;
    }
})

console.log(roundPoints)
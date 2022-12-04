var pairs = require('fs').readFileSync('04/input.txt').toString().split("\r\n").map(pair => pair.split(/[,-]/).map(Number));

var fullyContainedCount = pairs.length;

pairs.forEach(pair => {
    fullyContainedCount -= (((pair[0] < pair[2]) && (pair[1] < pair[2])) || ((pair[2] < pair[0]) && (pair[3] < pair[0]))) ? 1 : 0;
})

console.log(fullyContainedCount);
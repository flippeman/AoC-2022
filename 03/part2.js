var rucksacks = require('fs').readFileSync('03/input.txt').toString().split("\r\n");

var sum = 0;

for (let group = 0; group < rucksacks.length; group+=3) {

    var badgeCharCode = [...rucksacks[group]].filter(item => rucksacks[group+1].includes(item)).find(commonItem => rucksacks[group+2].includes(commonItem)).charCodeAt(0);

    sum += badgeCharCode > 90 ? badgeCharCode-96 : badgeCharCode-38
}

console.log(sum);
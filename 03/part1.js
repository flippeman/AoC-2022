var rucksacks = require('fs').readFileSync('03/input.txt').toString().split("\r\n");

var sum = 0;

rucksacks.forEach(rucksack => {
    var compartmentOne = rucksack.slice(0, rucksack.length/2);
    var compartmentTwo = rucksack.slice(rucksack.length/2, rucksack.length);

    var duplicateCharCode = [...compartmentOne].find(item => compartmentTwo.includes(item)).charCodeAt(0);

    sum += duplicateCharCode > 90 ? duplicateCharCode-96 : duplicateCharCode-38
})

console.log(sum);
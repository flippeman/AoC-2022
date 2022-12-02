var elfs = require('fs').readFileSync('input.txt').toString().split("\r\n\r\n").map(elf => elf.split("\r\n").map(Number));

var elfsSum = elfs.map(elf => elf.reduce((sum, calorie) => sum + calorie, 0))

var largest = Math.max(...elfsSum)

console.log(largest);
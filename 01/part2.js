var fs = require('fs');
var elfs = fs.readFileSync('input.txt').toString().split("\r\n\r\n").map(elf => elf.split("\r\n").map(Number));

var elfsSum = elfs.map(elf => elf.reduce((sum, calorie) => sum + calorie, 0));


var topThree = [elfsSum.shift(), elfsSum.shift(), elfsSum.shift()].sort((a,b) => b-a);

elfsSum.forEach(elf => {
    if(elf > topThree[2]) {
        topThree[2] = elf;
        topThree.sort((a,b) => b-a);
    }
})

sum = topThree[0] + topThree[1] + topThree[2];

console.log(sum);
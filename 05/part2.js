var input = require('fs').readFileSync('05/input.txt').toString().split("\r\n\r\n").map(row => row.split('\r\n'));

// formatting input
var startingStacksInput = [];
var stacksCount = parseInt(input[0].pop().slice(-2,-1));

input[0].forEach((row, index) => {
    for (let i = 1; i < row.length-1; i+=4) {
        startingStacksInput.push(row.charAt(i));
    }
});

var stacks = new Array(stacksCount).fill().map(item=>item=[])

startingStacksInput.forEach((crate, index) => {
    if (crate != ' ') {
        stacks[index%stacksCount].unshift(crate)
    }
});

var procedure = [];

input[1].forEach(instruction => {
    var instructionArr = [];

    var instructionSplit = instruction.split(' ');

    instructionArr.push(parseInt(instructionSplit[1])) 
    instructionArr.push(parseInt(instructionSplit[3])-1)
    instructionArr.push(parseInt(instructionSplit[5])-1)
    procedure.push(instructionArr);
})


// actually doing the thingy
procedure.forEach(step => {
    //console.log(step);
    //console.log(stacks);
    //console.log(stacks[0].splice(-step[0], step[0]));
    var crateMover9001Chunk = stacks[step[1]].splice(-step[0], step[0]);
    //console.log(crateMover9001Chunk);
    stacks[step[2]].push(...crateMover9001Chunk);
    //stacks[step[2]].push(stacks[step[1]].pop());
})

var finalCode = "";
stacks.forEach(stack => finalCode+=stack.pop())

console.log(finalCode);

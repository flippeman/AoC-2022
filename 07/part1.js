class Directory {
    parentDirectory;
    size = 0;
    name;
    childDirectories = [];

    constructor(parentDirectory, name) {
        this.parentDirectory = parentDirectory;
        this.name = name;
    }

    increaseSize(size) {
        this.size += size;
        if (this.parentDirectory != undefined) {
            this.parentDirectory.increaseSize(size);
        }
    }

    addChild(directory) {
        this.childDirectories.push(directory);
    }

}




var output = require('fs').readFileSync('07/input.txt').toString().split('\r\n');

var openDirectory = new Directory(undefined, "/");
var allDirectories = [openDirectory];

output.slice(1).forEach(line => {
    var lineParts = line.split(" ");

    if(lineParts[1] == "cd") {
        if(lineParts[2] == "..") {   
            openDirectory = openDirectory.parentDirectory;
        } else {
            openDirectory = openDirectory.childDirectories.find(directory => directory.name==lineParts[2]);
        }

    } else if(!isNaN(lineParts[0])) {
        openDirectory.increaseSize(parseInt(lineParts[0]));
        
    } else if(lineParts[0] == "dir") {
        var newDirectory = new Directory(openDirectory, lineParts[1]);
        openDirectory.addChild(newDirectory);
        allDirectories.push(newDirectory);
    }
})

var sum = 0;

allDirectories.forEach(directory =>  {
    if (directory.size <= 100000) {
        sum += directory.size;
    }
})

console.log(sum);
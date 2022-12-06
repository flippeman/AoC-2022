var signal = require('fs').readFileSync('06/input.txt').toString();

var reading = "";

for (let i = 0; i < signal.length; i++) {

    if (reading.length == 4) {

        console.log(i);
        i = signal.length; 
    
    } else if(reading.includes(signal.charAt(i))){

        reading = reading.slice(reading.indexOf(signal.charAt(i))+1)

    }
    
    reading += signal.charAt(i);
}
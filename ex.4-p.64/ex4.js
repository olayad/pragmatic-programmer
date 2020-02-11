var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

var input = {
    "P": {"hasArg": true},
    "D": {"hasArg": false},
    "U": {"hasArg": false},
    "W": {"hasArg": true},
    "N": {"hasArg": true},
    "E": {"hasArg": true},
    "S": {"hasArg": true}
};


var waitForUserInput = function() {
  rl.question("Please give an instruction: ", function(answer) {
    if (answer == "exit"){
        rl.close();
    } else {
        console.log("user said: ", answer);
        processInput(answer);
        waitForUserInput();
    }
  });
};

waitForUserInput();

function processInput(input) {
    // TODO: input should be converted to upper case before split
    // splitted = input.split(" ");
    // console.log("typeof splitted: ", typeof splitted[0])
    // console.log("splitted: ", splitted[0]);
    // console.log("type splitted :", typeof input[splitted[0]]);
    if (input[splitted[0].toUpperCase()]){
//         console.log("instruction found!");
//     } else{
//         console.log(" could not find instruction :(");
//     }
// }

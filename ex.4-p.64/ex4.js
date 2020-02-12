var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

var instruction = {
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
        processInput(answer);
        waitForUserInput();
    }
  });
};

waitForUserInput();

function processInput(input) {
    // TODO: input should be converted to upper case before split
    input = input.toUpperCase().split(" ");
    if (instruction[input[0]]){
        console.log("instruction found!");
    } else{
        console.log(" could not find instruction :(");
    }
}


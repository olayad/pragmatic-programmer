var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

var waitForUserInput = function() {
  rl.question("Please give an instruction: ", function(answer) {
    if (answer == "exit"){
        rl.close();
    } else {
        console.log("you said: ", answer);
        waitForUserInput();
    }
  });
};

waitForUserInput();
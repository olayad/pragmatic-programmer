var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

var penDown = function(step){ console.log("[INFO] doing pen down..."+step) };
var down = function(){ console.log("[INFO] doing down...") };
var west = function(step){ console.log("[INFO] doing west..."+step) };
var north = function(step){ console.log("[INFO] doing north..."+step) };
var east = function(step){ console.log("[INFO] doing east..."+step) };
var south = function(step){ console.log("[INFO] doing south..."+step) };
var penUp = function(){ console.log("[INFO] doing pen up...") };

var instruction = {
    "P": {"hasArg": true, "action": penDown},
    "D": {"hasArg": false, "action": down},
    "U": {"hasArg": false, "action": penUp},
    "W": {"hasArg": true, "action": west},
    "N": {"hasArg": true, "action": north},
    "E": {"hasArg": true, "action": east},
    "S": {"hasArg": true, "action": south}
};


var waitForUserInput = function() {
  rl.question("Please give an instruction: ", function(answer) {
    if (answer === "exit"){
        rl.close();
    } else {
        processInput(answer);
        waitForUserInput();
    }
  });
};

const INVALID = 0;
const VALID_NO_ARGS = 1;
const VALID_WITH_ARGS = 2;


function processInput(input) {
    input = input.toUpperCase().split(" ");
    let instuctionType = isValidInstruction(input);
    if (instuctionType){
        executeInstruction(input, instuctionType)
    } else{
        console.log("[Error] Could not execute instruction :( ");
    }
}


function isValidInstruction(input){
    if (instructionExists(input)){     // Check it exists
        if (instructionNeedArgs(input)){    //Check it has args needed
            if (input[1] === undefined){
                console.log('[Error] Instruction should have included argument');
                return INVALID;
            }else{
                return VALID_WITH_ARGS;
            }
        } else{
            console.log('[Info] Valid instruction; no args needed]!!');
            return VALID_NO_ARGS;
        }
    }
}

function instructionExists(input) {
    return instruction[input[0]] ? true : false;
}

function instructionNeedArgs(input) {
    return instruction[input[0]]["hasArg"] ? true : false;
}

function executeInstruction(input, arg){
    if (arg === VALID_NO_ARGS){
        instruction[input[0]]["action"]();
    }
    else if (arg === VALID_WITH_ARGS){
        instruction[input[0]]["action"](input[1]);
    } else {
        console.log("[ERROR] executeInstruction - I don't know what I am being asked");
    }
}

waitForUserInput();
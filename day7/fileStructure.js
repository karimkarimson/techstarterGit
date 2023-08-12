const { dir } = require('console');
const fs = require('fs');
const cmds = fs.readFileSync('C:/Users/karim/Desktop/Techstarter/gitrepo/techstarterGit/day7/cmds.txt', 'utf8');
const cmdsArray = cmds.split('\n');
const cleanCmds = [];
// clean up the commands, each line
cmdsArray.forEach((cmd) => {
    cleanCmds.push(cmd.replace(/(\n\r|\n|\r)/gm, ""));
});

function getCurrentPath() {
    var buffer = "fileStructure.";
    if (currentDir.length === 0) {
        currentDir.push("/");
    };
    for (let i = 0; i < currentDir.length - 1; i++) {
        buffer += currentDir[i] + ".";
    };
    buffer += currentDir[currentDir.length - 1]; 
    console.log("Current path: " + buffer);
    return buffer;
};
// if line starts with $ then command follows
// if line starts with dir then directory name follows
// if line starts with number, then file name follows

const fileStructure = {};
const currentDir = [];
function checkCmd(cmd) {
    if (cmd.startsWith("$")) {
        checkCmdType(cmd);
    } else if (cmd.startsWith("dir")) {
        // it's a directory
    } else if (!isNaN(parseInt(cmd[0]))) {
        // add size to current directory
        addFileSize(cmd);
    } else {
        console.log("error at checkCmd - probably unexpected input: " + cmd);
    };
}
function addFileSize(cmd) {
    let sizeToAdd = cmd.split(" ");
    sizeToAdd = parseInt(sizeToAdd[0]);
    let path = getCurrentPath();
    // fileStructure[currentDir[currentDir.length -1]].size += sizeToAdd;
}
function checkCmdType(cmd) {
    var cmdArray = cmd.split(" ");
    if (cmdArray[1] === "cd") {
        changeDir(cmdArray);
    } else if (cmdArray[1] === "ls") {
        console.log("listing files in " + currentDir[currentDir.length - 1]);
    } else {
        console.log("New command found: " + cmdArray[1]);
    };
}
function changeDir(dirArray) {
    if (dirArray[2] === "..") {
        // go up one level
        currentDir.pop();
    } else {
        // go down one level inside the fileStructure object
        let path = getCurrentPath();
        fileStructure.path = {childOf: currentDir[currentDir.length -1], size: 0};
        currentDir.push(dirArray[2]);
    };
}

cleanCmds.forEach((cmd) => {
    checkCmd(cmd);
});

function collectDirs() {
    var dirCounter = 0;
    Object.values(fileStructure).forEach((directory) => {
        if (directory.size < 100001 ) {
            dirCounter++;
        };
    });
    console.log("Number of directories with size less than 100000: " + dirCounter);
};
console.log(fileStructure);
collectDirs();


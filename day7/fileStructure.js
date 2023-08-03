const fs = require('fs');
const cmds = fs.readFileSync('C:/Users/karim/Desktop/Techstarter/gitrepo/techstarterGit/day7/cmds.txt', 'utf8');
const cmdsArray = cmds.split('\n');
const cleanCmds = [];
cmdsArray.forEach((cmd) => {
    cleanCmds.push(cmd.replace(/(\n\r|\n|\r)/gm, ""));
});

// if line starts with $ then command follows
// if line starts with dir then directory name follows
// if line starts with number, then file name follows

const fileStructure = {};
const currentDir = [];
function checkCmd(cmd) {
    if (cmd.startsWith("$")) {
        checkCmdType(cmd);
    } else if (cmd.startsWith("dir")) {
        saveDir(cmd);
    } else if (!isNaN(parseInt(cmd[0]))) {
        saveFile(cmd);
    } else {
        console.log("error at checkCmd - probably unexpected input: " + cmd);
    };
};

function checkCmdType(cmd) {
    var bufferArray = cmd.split(" ");
    var cmdArray = [];
    var currentPath = "";
    currentDir.forEach((dir) => {
        currentPath += dir + ".";
    });
    bufferArray.forEach((element) => {
        if (element !== "" && element !== '$' && element !== " ") {
            cmdArray.push(element);
        };
    });
    if (cmdArray[0] === "cd") {
        if (cmdArray[1] === "..") {
            currentDir.pop();
        } else {
            currentPath += cmdArray[1];
            fileStructure.{currentPath} = {};
            fileStructure[cmdArray[1]].size = 0;
            fileStructure[cmdArray[1]].dirs = [];
            currentDir.push(cmdArray[1]);
        };
    } else if (cmdArray[0] === "ls") {
        console.log("listing files in " + currentDir[currentDir.length - 1]);
    } else {
        console.log("New command found: " + cmdArray[0]);
    };
};
function saveDir(dir) {
    var bufferArray = dir.split(" ");
    bufferArray.forEach((element) => {
        if (element !== "" && element !== "dir" && element !== " ") {
            fileStructure[currentDir[currentDir.length -1]].dirs.push(element);
        };
    });
};

function saveFile(file) {
    var bufferArray = file.split(" ");
    bufferArray.forEach((element) => {
        if (!isNaN(parseInt(element))) {
            fileStructure[currentDir[currentDir.length -1]].size += parseInt(element);
        };
    });
};

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


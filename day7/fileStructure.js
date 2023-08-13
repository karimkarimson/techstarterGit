const { dir } = require('console');
const fs = require('fs');
const cmds = fs.readFileSync('C:/Users/karim/Desktop/Techstarter/gitrepo/techstarterGit/day7/cmds.txt', 'utf8');
const cmdsArray = cmds.split('\n');
const cleanCmds = [];
// clean up the commands, each line
cmdsArray.forEach((cmd) => {
    cleanCmds.push(cmd.replace(/(\n\r|\n|\r)/gm, ""));
});

class Directory {
    constructor(name, parent, level) {
        this.name = name;
        this.parent = parent;
        this.level = level;
        this.size = 0;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    addSize(size) {
        this.size += size;
    }
}

const fileStructure = [];
var level = 0;
var currentDir;

// if line starts with $ then command follows
// if line starts with dir then directory name follows
// if line starts with number, then file name follows

function checkCmd(cmd) {
    if (cmd.startsWith("$")) {
        checkCmdType(cmd);
    } else if (cmd.startsWith("dir")) {
        handleDir(cmd);
    } else if (!isNaN(parseInt(cmd[0]))) {
        currentDir.addSize(parseInt(cmd));
    } else {
        console.log("error at checkCmd - probably unexpected input: " + cmd);
    };
}
function checkCmdType(cmd) {
    var cmdArray = cmd.split(" ");
    if (cmdArray[1] === "cd") {
        changeDir(cmdArray);
    } else if (cmdArray[1] === "ls") {
        console.log("listing files in " + currentDir.name);
    } else {
        console.log("New command found: " + cmdArray[1]);
    };
}
function changeDir(dirArray) {
    if (dirArray[2] === "..") {
        level--;
        currentDir = currentDir.parent;
    } else {
        //check if directory exists
        level++;
        var dirExists = fileStructure.find((directory) => {
            return (directory.name === dirArray[1] && directory.level === level);
        });
        if (dirExists) {
            currentDir = dirExists;
        } else {
            // go down one edge and change currentDir
            currentDir = currentDir.children.find((dir) => {
                return (dir.name === dirArray[2] && dir.level === level);
            });
        };
    };
}
function handleDir(dir) {
    var dirArray = dir.split(" ");
    fileStructure.push(new Directory(dirArray[1], currentDir, level + 1));
    currentDir.addChild(fileStructure[fileStructure.length - 1]);
}
cleanCmds.forEach((cmd) => {
    checkCmd(cmd);
});

// function collectDirs() {
//     var dirCounter = 0;
//     Object.values(fileStructure).forEach((directory) => {
//         if (directory.size < 100001 ) {
//             dirCounter++;
//         };
//     });
//     console.log("Number of directories with size less than 100000: " + dirCounter);
// };
// console.log(fileStructure);
// collectDirs();


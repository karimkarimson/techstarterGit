// This is day8 of the advent of code challange with a trial to solve it using a graph
// Thanks for checking in :)
// go fetch data:
const fs = require('fs');
let file = fs.readFileSync('C:/Users/karim/Desktop/Techstarter/gitrepo/techstarterGit/day8/input.txt', 'utf8');
file = file.split('\n');
// clean up the commands, each line
const eachLineCleaned = [];
file.forEach((cmd) => {
    eachLineCleaned.push(cmd.replace(/(\n\r|\n|\r)/gm, ""));
});
// split into individual numbers per line
const numbersArray = [];
eachLineCleaned.forEach((line) => {
    numbersArray.push(line.split(""));
});
// lets create the Tree class, with each tree being a vertice in the graph and having a maximum of 4 edges
class Tree {
    constructor(height, x, y) {
        this.height = height;
        // indecies of the tree in the originial data 
        this.x = x;
        this.y = y;
        // relation to other trees
        this.west = null;
        this.east = null;
        this.north = null;
        this.south = null;
    }
    setWestNeighboor(tree) {
        this.west = tree;
    }
    setEastNeighboor(tree) {
        this.east = tree; 
    }
    setNorthNeighboor(tree) {
        this.north = tree;
    }
    setSouthNeighboor(tree) {
        this.south = tree;
    }
}
// create a graph of trees
const treeGraph = [];
for (let i = 0; i < numbersArray.length; i++) {
    treeGraph.push([]);
    for (let j = 0; j < numbersArray[i].length; j++) {
        treeGraph[i].push(new Tree(numbersArray[i][j], i, j));
    };
};
// set neighboors
for (let i = 0; i < treeGraph.length; i++) {
    for (let j = 0; j < treeGraph[i].length; j++) {
        if (i === 0 && j === 0) {
            // E S
            treeGraph[i][j].setEastNeighboor(treeGraph[i][j+1]);
            treeGraph[i][j].setSouthNeighboor(treeGraph[i+1][j]);
        } else if (i === numbersArray.length - 1 && j === numbersArray.length - 1) {
            // W N
            treeGraph[i][j].setWestNeighboor(treeGraph[i][j-1]);
            treeGraph[i][j].setNorthNeighboor(treeGraph[i-1][j]);
        } else if (i === 0) {
            // W E S
            treeGraph[i][j].setWestNeighboor(treeGraph[i][j-1]);
            treeGraph[i][j].setEastNeighboor(treeGraph[i][j+1]);
            treeGraph[i][j].setSouthNeighboor(treeGraph[i+1][j]);
        } else if (i === numbersArray.length - 1) {
            // W E N
            treeGraph[i][j].setWestNeighboor(treeGraph[i][j-1]);
            treeGraph[i][j].setEastNeighboor(treeGraph[i][j+1]);
            treeGraph[i][j].setNorthNeighboor(treeGraph[i-1][j]);
        } else if (j === 0) {
            // E N S
            treeGraph[i][j].setEastNeighboor(treeGraph[i][j+1]);
            treeGraph[i][j].setNorthNeighboor(treeGraph[i-1][j]);
            treeGraph[i][j].setSouthNeighboor(treeGraph[i+1][j]);
        } else if (j === numbersArray[i].length - 1) {
            // W N S
            treeGraph[i][j].setWestNeighboor(treeGraph[i][j-1]);
            treeGraph[i][j].setNorthNeighboor(treeGraph[i-1][j]);
            treeGraph[i][j].setSouthNeighboor(treeGraph[i+1][j]);
        } else { 
            // W E N S
            treeGraph[i][j].setWestNeighboor(treeGraph[i][j-1]);
            treeGraph[i][j].setEastNeighboor(treeGraph[i][j+1]);
            treeGraph[i][j].setNorthNeighboor(treeGraph[i-1][j]);
            treeGraph[i][j].setSouthNeighboor(treeGraph[i+1][j]);
        };
    };
};
// function for travelling the graph & finding ascending ordered lists of trees
/*
* Pseudocode
for each point of view
getSelectionOfTrees(startingTree, direction)
- while direction-neighboor is not null
- if neighboor is taller then current tree
- add neighboor to list & neighboor height becomes new height to compare to
- return list
*/
function getSelectionOfTrees(startingTree, direction) {
    const visibleTreesFromPOV = [];
    visibleTreesFromPOV.push(startingTree);
    var heightBuffer = startingTree.height;
    var currentTree = startingTree;
    while(currentTree[direction] != null) {
        // is the next tree higher?
        // console.log(`The ${neighboor}-neighboors height is ${currentTree[neighboor].height}`);
        if (heightBuffer< currentTree[direction].height) {
            visibleTreesFromPOV.push(currentTree[direction]);
            heightBuffer = currentTree[direction].height;
            currentTree = currentTree[direction];
        } else {
            currentTree = currentTree[direction];
        };
    };
    return visibleTreesFromPOV;
};
const visibleTreesFromEast = [];
const visibleTreesFromWest = []; 
treeGraph.forEach((line) => {
    visibleTreesFromEast.push(getSelectionOfTrees(line[0], "east"));
    visibleTreesFromWest.push(getSelectionOfTrees(line[line.length - 1], "west"));
});

const visibleTreesFromNorth = []; 
const visibleTreesFromSouth = []; 
for (let i = 0; i < treeGraph[0].length; i++) {
    visibleTreesFromNorth.push(getSelectionOfTrees(treeGraph[0][i], "south"));
    visibleTreesFromSouth.push(getSelectionOfTrees(treeGraph[treeGraph.length - 1][i], "north"));
};

// the following 13 lines are a misread of the assigment and will no further be used
// remove Trees that are on the borders
function purgeBorders(treeArray) {
    var treeArray = treeArray;
    treeArray.forEach((lineOfTrees) => {
        lineOfTrees.forEach((tree) => {
            if (tree.x === 0 || tree.x === treeGraph.length - 1 || tree.y === 0 || tree.y === treeGraph.length - 1) {
                console.log(`removing tree at ${tree.x}, ${tree.y}`);
                treeArray.splice(treeArray.indexOf(tree), 1);
            };
        });
    });
    return treeArray;
};

const allFinalists = [visibleTreesFromEast, visibleTreesFromWest, visibleTreesFromNorth, visibleTreesFromSouth];
const allSelectedTrees = [];
function mergeAllSelections(selection) {
    selection.forEach((pointOfViewFinalist) => {
        pointOfViewFinalist.forEach((lineOfTrees) => {
            lineOfTrees.forEach((tree) => {
                allSelectedTrees.push(tree);
            });
        });
    });
}
mergeAllSelections(allFinalists);

console.log(allSelectedTrees.length);
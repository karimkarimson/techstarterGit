const bs = require('./bubblesortmodule.js');

const list = [];
const list2 = [];
for (let i = 0; i < 500; i++) {
    list.push(Math.floor(Math.random() * 100));
    list2.push(Math.floor(Math.random() * 100));
};
console.log("First list: " + list);
console.log("Second list: " + list2);

console.log("Merging lists ...");
let mergedList = [];
for (let i = 0; i < list.length; i++) {
    mergedList.push(list[i]);
    mergedList.push(list2[i]);
};
console.log(mergedList);
console.log("Starting bubblesort ...");
const sortedMerged = bs(mergedList);

console.log("Finished bubblesort & sorting out duplicates ....");
const uniqList = [];
for (let i = 0; i < mergedList.length; i++) {
    if (mergedList[i] === mergedList[i+1]) {
        continue;
    } else {
        uniqList.push(mergedList[i]);
    }
}
console.log("Finally: ");
console.log(uniqList);
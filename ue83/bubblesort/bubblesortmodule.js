const bubblesort = function (list) {
    let unfinished = true;
    while (unfinished) {
        let finisher = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i] > list[i + 1]) {
                let temp = list[i];
                console.log(`swapped ${list[i]} with ${list[i + 1]}`);
                list[i] = list[i + 1];
                list[i + 1] = temp;
                unfinished = true;
            } else {
                finisher++;
            }
        }
        if (finisher === list.length) {
            console.log("finished sorting");
            console.log(list);
            return list;
            unfinished = false;
        } else {
            finisher = 0;
        }
    }
};
module.exports = bubblesort;
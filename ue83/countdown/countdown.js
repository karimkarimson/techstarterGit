const prompt = require('prompt-sync')({sigint: true});

const setCountTime = prompt('Set time for countdown in minutes: ');
const moment = new Date();
const countDate = new Date(moment);
countDate.setMinutes(moment.getMinutes() + Number(setCountTime));

function printTimeToEnd() {
    let now = new Date();
    let timeToEnd = countDate - now;
    console.log(Math.floor(timeToEnd / 1000));
}

setInterval(printTimeToEnd, 1000);
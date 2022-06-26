import entries from "./entries.js";
const EntryTitle = document.getElementById('EntryTitle');
const EntryContent = document.getElementById('EntryContent');
const Refresh = document.getElementById("Refresh");

/* 
    the index of the entry you're currently on / are about to switch from.
    used to check if the new random index is the same as the previous to
    prevent duplicate entries on Refresh 
*/
let thisIndex;

function getRandomInt() {
    let randomInt = Math.floor(Math.random() * (entries.length - 1) + 1);
    return (randomInt === thisIndex) ? getRandomInt() : randomInt;
}

function newEntry() {
    thisIndex = getRandomInt();
    EntryTitle.innerText = entries[thisIndex].title;
    EntryContent.innerText = entries[thisIndex].content;
}

Refresh.addEventListener("click", newEntry);

document.addEventListener("DOMContentLoaded", newEntry);




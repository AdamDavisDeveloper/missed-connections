import entries from "./entries.js";
const EntryTitle = document.getElementById('EntryTitle');
const EntryContent = document.getElementById('EntryContent');
const Refresh = document.getElementById("Refresh");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newEntry() {
    const entryIndex = getRandomInt(0, entries.length - 1);
    console.log(entryIndex);
    EntryTitle.innerText = entries[entryIndex].title;
    EntryContent.innerText = entries[entryIndex].content;
}

Refresh.addEventListener("click", newEntry);

document.addEventListener("DOMContentLoaded", newEntry);




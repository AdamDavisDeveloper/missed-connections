import entries from "./entries.js";
const Main = document.getElementById('Main');
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

function backgroundPosition() {
    const types = ['top', 'bottom', 'left', 'right', 'center'];
    const int = Math.floor(Math.random() * (types.length - 1) + 1);
    return types[int];
}

function newEntry() {
    thisIndex = getRandomInt();
    EntryTitle.innerText = entries[thisIndex].title;
    EntryContent.innerText = entries[thisIndex].content;
    Main.style.backgroundPosition = `${backgroundPosition()}`

}

Refresh.addEventListener("click", newEntry);

document.addEventListener("DOMContentLoaded", newEntry);




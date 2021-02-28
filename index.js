// console.log("Hello")
// - Your history items should be `li` elements.
// - Clicking the roll button the first time should not add anything to the history
// - Subsequent clicks to the rolls button should add the previous roll to the history
// - The only `li` elements should be your history dice rolls
// - You should have exactly one `input` element where the number of dice can be entered
// - You should have exactly one `button` element that the user can click on to roll the dice
// - The die result from rolling should be stored in an element with the id "dice-para"
// - The sum from rolling should be stored in an element with the id "sum-para"
// - Use the follow HTML entity values for dice:

const theDice = ["&#9856 = ⚀", "&#9857 = ⚁", "&#9858 = ⚂", "&#9859 = ⚃", "&#9860 = ⚄", "&#9861 = ⚅"]

document.addEventListener("DOMContentLoaded", () => {
    const li = document.createElement("li");
    const numDice = document.querySelector("#number-of-dice");
    const dieBtn = document.querySelector("#roll-dice");
    const ul = document.querySelector("ul");
    const dicePara = document.querySelector("#dice-para");
    const sum = document.querySelector("#sum-para");

    








})
/**
 * @typedef {Object} Point
 * @property {number} randX - The X-coordinate of the point.
 * @property {number} randY - The Y-coordinate of the point.
 */

let count = 0;
/** @type {number} */
let randX, randY;

/**
 * Generates random coordinates for the point.
 * @function
 * @returns {void}
 */
function point() {
    randX = Math.floor(Math.random() * 30);
    randY = Math.floor(Math.random() * 50);
}

/**
 * Moves the point randomly within the grid.
 * @function
 * @returns {void}
 */
function move() {
    let deltaX = Math.floor(Math.random() * 3) - 1;
    let deltaY = Math.floor(Math.random() * 3) - 1;
    randX = (randX + deltaX + 30) % 30;
    randY = (randY + deltaY + 50) % 50;
}

/**
 * Draws the grid with the point.
 * @function
 * @returns {void}
 */
function draw() {
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 50; j++) {
            let isBorder = i === 0 || i === 29 || j === 0 || j === 49;
            let isFirefly = i === randX && j === randY;

            process.stdout.write(isBorder ? "+" : (i === 0 || i === 29) ? "-" : (j === 0 || j === 49) ? "|" : isFirefly ? "*" : " ");
        }
        console.log("");
    }
}

/**
 * Handles the animation and updates the grid.
 * @function
 * @returns {void}
 */
function dot() {
    if (count === 1) move();
    draw();
    count = 1;
}

point();
setInterval(dot, 1000);

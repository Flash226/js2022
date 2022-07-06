const elField = document.querySelector('.field');
const elXn = document.querySelector('.xn');
const elYn = document.querySelector('.yn');
const elChangeLevel = document.querySelector('select[name="changeLevel"]');
const elFixedBlock = document.querySelector('select[name="fixedBlock"]');
const elButtons = document.querySelector('.buttons');
const elGen = document.querySelector('#button0');
const elRight = document.querySelector('#button4');
const elLeft = document.querySelector('#button1');
const elUp = document.querySelector('#button2');
const elDown = document.querySelector('#button3');

let vXn = 0;
let vYn = 0;
let activeCell = [];
let exitCell = [];
let blockCell = [];
let vFixedBlock = '';
let gameOver = 0;

const randomFunction = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const findXY = (array, x, y) => {
    let id = -1;
    for (let i = 0; array.length > i; i++) {
        if (array[i].x === x && array[i].y === y) {
            id = i;
            return id;
        }
    }
    return id;
}

const startRender = () => {
    const vChangeLevel = elChangeLevel.value;
    vXn = Number(elXn.value);
    vYn = Number(elYn.value);
    vFixedBlock = elFixedBlock.value;
    gameOver = 0

    if (vXn < 4 || vYn < 4) {
        elField.innerHTML = `<hr>Entered size field must be 4*4 or more! <hr>`;
        elField.style.cssText = `font-size: 20px;
        text-align: center;`;
        elButtons.style.cssText = `display: none;`;
        return;
    } else if (vXn > 15 || vYn > 15) {
        elField.innerHTML = `<hr>Entered size field must be 15*15 or less! <hr>`;
        elField.style.cssText = `font-size: 20px;
            text-align: center;`;
        elButtons.style.cssText = `display: none;`;
        return;

    };
    if (vFixedBlock === '' && vChangeLevel != '') {
        elField.innerHTML = `<hr>Please select block fixed or no! <hr>`;
        elField.style.cssText = `font-size: 20px;
        text-align: center;`;
        elButtons.style.cssText = `display: none;`;
        return;
    }

    activeCell = [{ x: randomFunction(0, vXn - 1), y: randomFunction(0, vYn - 1) }];
    if (activeCell[0].y > vYn * 0.7) {
        activeCell[0].y = Math.trunc(activeCell[0].y - vYn * 0.3);
    }

    exitCell = [{ x: vXn - 1, y: vYn - 1, }]

    let amountBlockCell = 0;

    if (vChangeLevel === 'low') {
        amountBlockCell = vXn * vYn * 0.08;
    } else if (vChangeLevel === 'medium') {
        amountBlockCell = vXn * vYn * 0.16;
    } else if (vChangeLevel === 'hard') {
        amountBlockCell = vXn * vYn * 0.22;
    }

    blockCell = [];
    for (let i = 0; blockCell.length < amountBlockCell; i++) {
        let xblock = randomFunction(0, vXn);
        let yblock = randomFunction(0, vYn);
        let xn = xblock + 1;
        if (findXY(blockCell, xblock, yblock) === -1
            && findXY(activeCell, xblock, yblock) === -1
            && findXY(exitCell, xblock, yblock) === -1
            && findXY(exitCell, xblock + 1, yblock) === -1
            && findXY(exitCell, xblock + 1, yblock + 1) === -1
            && findXY(exitCell, xblock, yblock + 1) === -1
            && xblock * yblock != vXn * vYn) {

            blockCell.push({ x: xblock, y: yblock });
        }
    }
    fieldGeneration();
}

const goToRight = () => {
    if (vFixedBlock != 'noFixed') {
        if (activeCell[0].x + 1 != vXn && findXY(blockCell, activeCell[0].x + 1, activeCell[0].y) === -1) {
            activeCell[0].x = activeCell[0].x + 1;
            move();
        }
    } else {
        if (activeCell[0].x + 1 != vXn && findXY(blockCell, activeCell[0].x + 1, activeCell[0].y) === -1) {
            activeCell[0].x = activeCell[0].x + 1;
            move();
        } else if (activeCell[0].x + 1 != vXn && findXY(blockCell, activeCell[0].x + 1, activeCell[0].y) != -1) {
            if (activeCell[0].x + 2 != vXn && findXY(blockCell, activeCell[0].x + 2, activeCell[0].y) === -1 && findXY(exitCell, activeCell[0].x + 2, activeCell[0].y) === -1) {
                let n = findXY(blockCell, activeCell[0].x + 1, activeCell[0].y);
                blockCell[n].x = blockCell[n].x + 1;
                activeCell[0].x = activeCell[0].x + 1;
                if (blockCell[n].x === exitCell[0].x - 1 && blockCell[n].y === exitCell[0].y) {
                    gameOver = gameOver + 1;
                }
                move(n);
            }
        }
    }
}

const goToLeft = () => {
    if (vFixedBlock != 'noFixed') {
        if (activeCell[0].x - 1 != -1 && findXY(blockCell, activeCell[0].x - 1, activeCell[0].y) === -1) {
            activeCell[0].x = activeCell[0].x - 1;
            move();
        }
    } else {
        if (activeCell[0].x - 1 != -1 && findXY(blockCell, activeCell[0].x - 1, activeCell[0].y) === -1) {
            activeCell[0].x = activeCell[0].x - 1;
            move();
        } else if (activeCell[0].x - 1 != 0 && findXY(blockCell, activeCell[0].x - 1, activeCell[0].y) != -1) {
            if (activeCell[0].x - 2 != vXn && findXY(blockCell, activeCell[0].x - 2, activeCell[0].y) === -1) {
                let n = findXY(blockCell, activeCell[0].x - 1, activeCell[0].y);
                blockCell[n].x = blockCell[n].x - 1;
                activeCell[0].x = activeCell[0].x - 1;
                move(n);
            }
        }
    }
}

const goToUp = () => {
    if (vFixedBlock != 'noFixed') {
        if (activeCell[0].y - 1 != -1 && findXY(blockCell, activeCell[0].x, activeCell[0].y - 1) === -1) {
            activeCell[0].y = activeCell[0].y - 1;
            move();
        }
    } else {
        if (activeCell[0].y - 1 != -1 && findXY(blockCell, activeCell[0].x, activeCell[0].y - 1) === -1) {
            activeCell[0].y = activeCell[0].y - 1;
            move();
        } else if (activeCell[0].y - 1 != -1 && findXY(blockCell, activeCell[0].x, activeCell[0].y - 1) != -1) {
            if (activeCell[0].y - 2 != -1 && findXY(blockCell, activeCell[0].x, activeCell[0].y - 2) === -1) {
                let n = findXY(blockCell, activeCell[0].x, activeCell[0].y - 1);
                blockCell[n].y = blockCell[n].y - 1;
                activeCell[0].y = activeCell[0].y - 1;
                move(n);
            }
        }
    }
}

const goToDown = () => {
    if (vFixedBlock != 'noFixed') {
        if (activeCell[0].y + 1 != vYn && findXY(blockCell, activeCell[0].x, activeCell[0].y + 1) === -1) {
            activeCell[0].y = activeCell[0].y + 1;
            move();
        }
    } else {
        if (activeCell[0].y + 1 != vYn && findXY(blockCell, activeCell[0].x, activeCell[0].y + 1) === -1) {
            activeCell[0].y = activeCell[0].y + 1;
            move();
        } else if (activeCell[0].y + 1 != vYn && findXY(blockCell, activeCell[0].x, activeCell[0].y + 1) != -1) {
            if (activeCell[0].y + 2 != vYn && findXY(blockCell, activeCell[0].x, activeCell[0].y + 2) === -1 && findXY(exitCell, activeCell[0].x, activeCell[0].y + 2) === -1) {
                let n = findXY(blockCell, activeCell[0].x, activeCell[0].y + 1);
                blockCell[n].y = blockCell[n].y + 1;
                activeCell[0].y = activeCell[0].y + 1;
                if (blockCell[n].x === exitCell[0].x && blockCell[n].y === exitCell[0].y - 1) {
                    gameOver = gameOver + 1;
                }
                move(n);
            }
        }
    }
}

const fieldGeneration = () => {

    for (let i = 0; i <= vXn * vYn; i++) {
        if (i === 0) {
            elField.innerHTML = '';
        } else if (i === 1) {
            elField.innerHTML += '<div class="main"></div>'
        } else {
            elField.innerHTML += '<div></div>'
        }
    }
    const elMain = document.querySelector('.main');
    elMain.innerHTML = '<div class="active" id="active"></div>';
    elMain.innerHTML += '<div class="exit" id="exit"></div>';
    if (blockCell.length > 0) {
        for (let i = 0; i < blockCell.length; i++) {
            elMain.innerHTML += `<div class="block" id = "block${i}"></div>`;
        }
    }

    elField.style.cssText = `display: grid;
    grid-template-rows: repeat(${vYn}, 50px);
    grid-template-columns: repeat(${vXn}, 50px);
    background-color: blueviolet;
    width: max-content;
    grid-gap: 1px;
    position: relative;
    top: -40px;
    left: 15px;`;

    const elExit = document.querySelector('#exit');
    let exitCellPx = exitCell[0].x * 51;
    let exitCellPy = exitCell[0].y * 51 - 50;
    elExit.style.cssText = `top: ${exitCellPy}px;
        left: ${exitCellPx}px;`;

    if (blockCell.length > 0) {
        for (let i = 0; i < blockCell.length; i++) {
            const elBlock = document.querySelector(`#block${i}`);
            let left = blockCell[i].x * 51;
            let p = i * 50 + 100;
            let top = blockCell[i].y * 51 - p;
            elBlock.style.cssText = `top: ${top}px;
        left: ${left}px;`;
        }
    }

    elButtons.style.cssText = `display: block;`;
    move();
}

const move = (n) => {
    const elActive = document.querySelector('#active');
    let left = activeCell[0].x * 51;
    let top = activeCell[0].y * 51;
    elActive.style.cssText = `top: ${top}px;
    left: ${left}px;`;

    if (n != undefined) {
        const elBlock = document.querySelector(`#block${n}`);
        left = blockCell[n].x * 51;
        let p = n * 50 + 100;
        top = blockCell[n].y * 51 - p;
        elBlock.style.cssText = `top: ${top}px;
        left: ${left}px;`;

        if (gameOver === 2) {
            elField.innerHTML = `<hr>Game over! You lose!<hr>`;
            elField.style.cssText = `font-size: 22px;
        text-align: center;`;
            elButtons.style.cssText = `display: none;`;
            return;
        }
    }

    if (activeCell[0].x === exitCell[0].x && activeCell[0].y === exitCell[0].y) {
        elField.innerHTML = `<hr>Congrats, you win! <hr>`;
        elField.style.cssText = `font-size: 20px;
        text-align: center;`;
        elButtons.style.cssText = `display: none;`;
        return;
    }
}

elGen.addEventListener('click', startRender);
elRight.addEventListener('click', goToRight);
elLeft.addEventListener('click', goToLeft);
elUp.addEventListener('click', goToUp);
elDown.addEventListener('click', goToDown);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && event.repeat === false) {
        goToRight();
    } else if (event.key === 'ArrowLeft' && event.repeat === false) {
        goToLeft();
    } else if (event.key === 'ArrowUp' && event.repeat === false) {
        goToUp();
    } else if (event.key === 'ArrowDown' && event.repeat === false) {
        goToDown();
    }
});

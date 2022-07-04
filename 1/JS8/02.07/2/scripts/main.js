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
let cell = '<div></div>';

let vXn = 0;
let vYn = 0;
let nCell = 0;
let activeCell = 0;
let rightBorder = [];
let leftBorder = [];
let blockCell = [];
let vFixedBlock = '';
let redZver = [];

let randomFunction = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const startRender = () => {
    const vChangeLevel = elChangeLevel.value;
    vXn = Number(elXn.value);
    vYn = Number(elYn.value);
    vFixedBlock = elFixedBlock.value;

    if (vXn < 3 || vYn < 3) {
        elField.innerHTML = `<hr>Entered size field must be 3*3 or more! <hr>`;
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


    nCell = vXn * vYn;
    let amountBlockCell = 0;
    activeCell = randomFunction(1, nCell);
    rightBorder = [];
    leftBorder = [];
    blockCell = [];
    redZver = [];

    if (activeCell > nCell * 0.7) {
        activeCell = Math.trunc(activeCell - nCell * 0.3);
    }

    for (let i = 0; i <= nCell; i = i + vXn) {
        if (0 < i && i <= nCell) {
            rightBorder.push(i);
        }
    }

    for (let i = nCell; i > 0; i = i - vXn) {
        if (i > 0) {
            leftBorder.push(i - vXn + 1);
        }
    }

    if (vChangeLevel === 'low') {
        amountBlockCell = nCell * 0.09;
    } else if (vChangeLevel === 'medium') {
        amountBlockCell = nCell * 0.18;
    } else if (vChangeLevel === 'hard') {
        amountBlockCell = nCell * 0.25;
    }

    for (let i = 0; blockCell.length < amountBlockCell; i++) {
        let currentRandom = randomFunction(1, nCell);
        if (currentRandom != activeCell && blockCell.includes(currentRandom) === false) {
            blockCell.push(currentRandom);
        }
    }

    for (let i = 1; redZver.length < Math.trunc(nCell / 40 + 1); i = i + 40) {
        if (20 < i < nCell) {
            let currentRandom = randomFunction(1, nCell - 1);
            if (currentRandom != activeCell && blockCell.includes(currentRandom) === false && redZver.includes(currentRandom) === false) {
                redZver.push(currentRandom);
            }
        }
    }

    fieldGeneration();
}

const goToRight = () => {
    zverRun();
    if (vFixedBlock != 'noFixed') {
        if (rightBorder.includes(activeCell) === false && blockCell.includes(activeCell + 1) === false) {
            activeCell = activeCell + 1;
            fieldGeneration();
        }
    } else {
        if (rightBorder.includes(activeCell) === false && blockCell.includes(activeCell + 1) === false) {
            activeCell = activeCell + 1;
            fieldGeneration();
        } else if (rightBorder.includes(activeCell) === false && blockCell.includes(activeCell + 1) === true) {
            if (rightBorder.includes(activeCell + 1) === false && blockCell.includes(activeCell + 2) === false && activeCell + 2 != nCell) {
                activeCell = activeCell + 1;
                const index = blockCell.indexOf(activeCell);
                blockCell[index] = activeCell + 1;
                fieldGeneration();
            }
        }

    }
}

const goToLeft = () => {
    zverRun();
    if (vFixedBlock != 'noFixed') {
        if ((leftBorder.includes(activeCell) === false) && blockCell.includes(activeCell - 1) === false) {
            activeCell = activeCell - 1;
            fieldGeneration();
        }
    } else {
        if (leftBorder.includes(activeCell) === false && blockCell.includes(activeCell - 1) === false) {
            activeCell = activeCell - 1;
            fieldGeneration();
        } else if (leftBorder.includes(activeCell) === false && blockCell.includes(activeCell - 1) === true) {
            if (leftBorder.includes(activeCell - 1) === false && blockCell.includes(activeCell - 2) === false) {
                activeCell = activeCell - 1;
                const index = blockCell.indexOf(activeCell);
                blockCell[index] = activeCell - 1;
                fieldGeneration();
            }
        }
    }
}

const goToUp = () => {
    zverRun();
    if (vFixedBlock != 'noFixed') {
        if (activeCell > vXn && (blockCell.includes(activeCell - vXn) === false)) {
            activeCell = activeCell - vXn;
            fieldGeneration();
        }
    } else {
        if (activeCell > vXn && (blockCell.includes(activeCell - vXn) === false)) {
            activeCell = activeCell - vXn;
            fieldGeneration();
        } else if (activeCell > vXn * 2 && blockCell.includes(activeCell - vXn) === true) {
            if (activeCell > vXn && blockCell.includes(activeCell - (vXn * 2)) === false) {
                activeCell = activeCell - vXn;
                const index = blockCell.indexOf(activeCell);
                blockCell[index] = activeCell - vXn;
                fieldGeneration();
            }
        }
    }
}

const goToDown = () => {
    zverRun();
    if (vFixedBlock != 'noFixed') {
        if (activeCell <= (nCell - vXn) && (blockCell.includes(activeCell + vXn) === false)) {
            activeCell = activeCell + vXn;
            fieldGeneration();
        }
    } else {
        if (activeCell <= (nCell - vXn) && (blockCell.includes(activeCell + vXn) === false)) {
            activeCell = activeCell + vXn;
            fieldGeneration();
        } else if (blockCell.includes(activeCell + vXn) === true) {
            if (blockCell.includes(activeCell + (vXn * 2)) === false && (activeCell + (vXn * 2)) < nCell) {
                activeCell = activeCell + vXn;
                const index = blockCell.indexOf(activeCell);
                blockCell[index] = activeCell + vXn;
                fieldGeneration();
            }
        }
    }
}


const zverRun = () => {
    for (let i = 0; redZver.length > i; i++) {
        if (activeCell > redZver[i]
            && (activeCell / vYn - redZver[i] / vYn) < 1
            && rightBorder.includes(redZver[i] + 1) === false
            && blockCell.includes(redZver[i] + 1) === false
            && redZver.includes(redZver[i] + 1) === false) {
            redZver[i] = redZver[i] + 1;
        } else if (activeCell < redZver[i]
            && (redZver[i] / vYn - activeCell / vYn) < 1
            && rightBorder.includes(redZver[i] - 1) === false
            && blockCell.includes(redZver[i] - 1) === false
            && redZver.includes(redZver[i] - 1) === false) {
            redZver[i] = redZver[i] - 1;
        } else if ((activeCell > redZver[i] && redZver[i] / activeCell < 1)
            && redZver[i] + vXn < nCell
            && blockCell.includes(redZver[i] + vXn) === false
            && redZver.includes(redZver[i] + vXn) === false) {
            redZver[i] = redZver[i] + vXn;
        } else if ((activeCell < redZver[i]
            && redZver[i] / activeCell > 1)
            && redZver[i] - vXn > 0
            && blockCell.includes(redZver[i] - vXn) === false
            && redZver.includes(redZver[i] - vXn) === false) {
            redZver[i] = redZver[i] - vXn;

        }

    }
}




const fieldGeneration = () => {
    if (activeCell === nCell) {
        elField.innerHTML = `<hr>Congrats, you win! <hr>`;
        elField.style.cssText = `font-size: 20px;
        text-align: center;`;
        elButtons.style.cssText = `display: none;`;
        return;
    } else if (blockCell.includes(nCell - 1) === true && blockCell.includes(nCell - vXn) === true || redZver.includes(activeCell) === true) {
        elField.innerHTML = `<hr>Game over! You lose! <hr>`;
        elField.style.cssText = `font-size: 20px;
        text-align: center;`;
        elButtons.style.cssText = `display: none;`;
        return;
    } else {
        for (let i = 0; i <= nCell; i++) {
            if (i === 0) {
                elField.innerHTML = '';
            } else if (i === activeCell) {
                elField.innerHTML += '<div class="active"></div>'
            } else if (blockCell.includes(i) === true) {
                elField.innerHTML += '<div class="block"></div>'
            } else if (redZver.includes(i) === true) {
                elField.innerHTML += '<div class="zver"></div>'
            } else if (i === nCell) {
                elField.innerHTML += '<div class="exit"></div>'
            } else {
                elField.innerHTML += '<div></div>'
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
        elButtons.style.cssText = `display: block;`;
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

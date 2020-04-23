const sessionDiv = document.getElementById("div-session-arrow");

const sessionUpI = sessionDiv.querySelector(".fa-angle-up");
const sessionDownI = sessionDiv.querySelector(".fa-angle-down");
const sessionValuePara = sessionDiv.querySelector(".para-value");

const breakDiv = document.getElementById("div-break-arrow");

const breakUpI = breakDiv.querySelector(".fa-angle-up");
const breakDownI = breakDiv.querySelector(".fa-angle-down");
const breakValuePara = breakDiv.querySelector(".para-value");

const actualTimePara = document.querySelector(".para-actual-time");

const playI = document.querySelector(".fa-play");
const pauseI = document.querySelector(".fa-pause");
const restartI = document.querySelector(".fa-sync-alt");
const resetI = document.querySelector(".fa-square-full");

const workingStatePara = document.querySelector(".para-actual-status");

let modeValue = {
    sessionValue: (25 * 60),
    breakValue: (5 * 60)
}

let timeActual = 25 * 60;

let timingState = {
    play: false,
    pause: false,
    start: true
};

let workingState = {
    session: true,
    break: false
};

function displayTimer(workingStateActual, timeActual) {
    actualTimePara.textContent = Math.floor(timeActual / 60) + ":";
    if (timeActual % 60 < 10) {
        actualTimePara.textContent += "0" + timeActual % 60;
    } else {
        actualTimePara.textContent += timeActual % 60;
    }
    if (workingStateActual.session)
        workingStatePara.textContent = "Session";
    else
        workingStatePara.textContent = "Break";
}

function upValue(event) {
    let targetElement = event.target || event.srcElement;

    if (timingState.start == true) {
        if (targetElement.parentNode.id == "div-session-arrow") {
            modeValue.sessionValue += 60;
            timeActual = modeValue.sessionValue;
            sessionValuePara.textContent = modeValue.sessionValue / 60;
            displayTimer(workingState, modeValue.sessionValue);
        }
    }
    if (targetElement.parentNode.id == "div-break-arrow") {
        modeValue.breakValue += 60;
        breakValuePara.textContent = modeValue.breakValue / 60;
    }
}

function downValue(event) {
    let targetElement = event.target || event.srcElement;

    if (timingState.start == true) {
        if (targetElement.parentNode.id == "div-session-arrow" && modeValue.sessionValue / 60 >= 2) {
            modeValue.sessionValue -= 60;
            timeActual = modeValue.sessionValue;
            sessionValuePara.textContent = modeValue.sessionValue / 60;
            displayTimer(workingState, modeValue.sessionValue);
        }
    }
    if (targetElement.parentNode.id == "div-break-arrow" && modeValue.breakValue / 60 >= 2) {
        modeValue.breakValue -= 60;
        breakValuePara.textContent = modeValue.breakValue / 60;
    }
}

function resetTimer(element) {
    modeValue.sessionValue = 25 * 60;
    modeValue.breakValue = 5 * 60;
    timeActual = modeValue.sessionValue;

    timingState.play = false;
    timingState.pause = false;
    timingState.start = true;

    workingState.session = true;
    workingState.break = false;

    displayTimer(workingState, modeValue.sessionValue);
    sessionValuePara.textContent = modeValue.sessionValue / 60;
    breakValuePara.textContent = modeValue.breakValue / 60;
}

function restartTimer(element) {
    timeActual = modeValue.sessionValue;

    timingState.play = false;
    timingState.pause = false;
    timingState.start = true;

    workingState.session = true;
    workingState.break = false;

    displayTimer(workingState, modeValue.sessionValue);
    sessionValuePara.textContent = modeValue.sessionValue / 60;
    breakValuePara.textContent = modeValue.breakValue / 60;
}



sessionUpI.addEventListener("click", (event) => {
    upValue(event);
});

sessionDownI.addEventListener("click", (event) => {
    downValue(event);
});

breakUpI.addEventListener("click", (event) => {
    upValue(event);
});

breakDownI.addEventListener("click", (event) => {
    downValue(event);
});

playI.addEventListener("click", (event) => {
    timingState.play = true;
    timingState.pause = false;
    timingState.start = false;
});

pauseI.addEventListener("click", (event) => {
    timingState.play = false;
    timingState.pause = true;
});

restartI.addEventListener("click", (event) => {
    restartTimer(event);
});

resetI.addEventListener("click", (event) => {
    resetTimer(event);
});

function changeSession(timeActual, workingStateActual)
{
    if (timeActual <= 0) {
        if (workingStateActual.session == true) {
            workingState.break = true;
            workingState.session = false;
            timeActual = modeValue.breakValue + 1; // for timing because he deletes one second during execution
        } else {
            workingState.session = true;
            workingState.break = false;
            timeActual = modeValue.sessionValue  + 1; // for timing because he deletes one second during execution
        }
    }
    return (timeActual);
}

function actualizeSession() {
    if (timingState.play == true) {
        if (workingState.session == true) {
            timeActual -= 1;
        } else if (workingState.break == true) {
            timeActual -= 1;
        }
        displayTimer(workingState, timeActual);
        timeActual = changeSession(timeActual, workingState);
    }
}

let everySecondFunction = setInterval(actualizeSession, 1000);
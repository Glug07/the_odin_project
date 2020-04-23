function actualizeSession() { // actualize all seconds
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

function resetTimer(element) { // put the timer at the default value
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

function restartTimer(element) { // put the timer at my values
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

function downValue(event) { // change the timing duration values
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

function upValue(event) { // same as downvalue function
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

function displayTimer(workingStateActual, timeActual) { // generical function to display status working and remaining time
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

let modeValue = { // structure value COULD BE BETTER CHANGE IT PLS
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
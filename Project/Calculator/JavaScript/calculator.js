let operationContent = "";

const operands = document.getElementsByClassName("operands");
const operators = document.getElementsByClassName("operators");
const reset = document.getElementById("reset");
const del = document.getElementById("delete");
let paraDisplayContainer = document.getElementsByClassName("para-display");

function deleteSpaces(string) {
    return (string.replace(/ /g, ''));
}

function transformStringToArray(string) {
    let array = [];
    let storageString = "";

    for (let s = 0; s < string.length; s++) {
        if (isNaN(string.charAt(s))) {
            if (s != 0) // when the first element is a isNaN = true
                array.push(storageString);
            array.push(string.charAt(s));
            storageString = "";
        } else {
            storageString += string.charAt(s);
        }
    }
    if (storageString !== "")
        array.push(storageString);
    return (array);
}

function verifyOperation(array) {
    for (let a = 0; a < array.length; a++) {
        console.log(array[a]);
        if (a == 0 && isNaN(array[a])) {
            console.log("Error au début ")
            return (-1);
        } else if (array[a] == '0' && (array[a - 1] == '/' || array[a - 1] == '*')) {
            console.log("Error divisé par zero");
            return (-1);
        }
    }
    if (isNaN(array[array.length - 1]))
        return (-1);
}


function multOperands(valueA, valueB) {
    if (!isNaN(valueA) && !isNaN(valueB))
        return (valueA * valueB);
    return ("ERROR");
}

function divOperands(valueA, valueB) {
    if (!isNaN(valueA) && !isNaN(valueB))
        return (valueA / valueB);
    return ("ERROR");
}

function removeSpecificElements(array, a, numberToDelete) {
    array.splice(a, numberToDelete);
    return (array);
}

function updateArrayContent(operationContentArray, resultValue, a, numberToDelete) {
    removeSpecificElements(operationContentArray, a, numberToDelete);
    operationContentArray.splice(a, 0, resultValue);
    return (operationContentArray);
}

function doMultDivide(operationContentArray) {
    let resultValue = 0;

    for (let a = 0; a < operationContentArray.length; a++) {
        if (operationContentArray[a] == '*') {
            resultValue = multOperands(operationContentArray[a - 1], operationContentArray[a + 1]);
            operationContentArray = updateArrayContent(operationContentArray, resultValue, a - 1, 3);
            a -= 1;
            console.log(operationContentArray);
        }
        else if (operationContentArray[a] == '/') {
            resultValue = divOperands(operationContentArray[a - 1], operationContentArray[a + 1]);
            operationContentArray = updateArrayContent(operationContentArray, resultValue, a - 1, 3);
            a -= 1;
        }
        if (resultValue === "ERROR")
            return ("ERROR");
    }
    return (operationContentArray);
}

function addOperands(valueA, valueB) {
    if (!isNaN(valueA) && !isNaN(valueB))
        return (+valueA + +valueB);
    return ("ERROR");
}

function subOperands(valueA, valueB) {
    if (!isNaN(valueA) && !isNaN(valueB))
        return (valueA - valueB);
    return ("ERROR");
}

function roundResult(array)
{
    array[0] = Number(array[0]).toFixed(1);
    return (array);
}

function doSumSub(operationContentArray) {
    let resultValue = 0;

    for (let a = 0; a < operationContentArray.length; a++) {
        if (operationContentArray[a] == '+') {
            resultValue = addOperands(operationContentArray[a - 1], operationContentArray[a + 1]);
            operationContentArray = updateArrayContent(operationContentArray, resultValue, a - 1, 3);
            a -= 1;
        }
        else if (operationContentArray[a] == '-') {
            resultValue = subOperands(operationContentArray[a - 1], operationContentArray[a + 1]);
            operationContentArray = updateArrayContent(operationContentArray, resultValue, a - 1, 3);
            a -= 1;
        }
        if (resultValue === "ERROR")
            return ("ERROR");
    }
    operationContentArray = roundResult(operationContentArray);
    let operationResult = transformArrayToString(operationContentArray, '');
    return (operationResult);
}

function transformArrayToString(array, separator) {
    return (array.join(separator));
}

function displayResult(result) {
    if (result.length >= 19) {
        alert(`Your result is too long.\nHere it is : ${result}`);
    } else {
        paraDisplayContainer[0].innerHTML = result;
    }
    operationContent = "";
}

function displayErrorMessage()
{
    paraDisplayContainer[0].innerHTML = "What you're trying to do is not possible !";
    operationContent = "";
}

function manageOperation() {
    const cleanOperationContent = deleteSpaces(operationContent);

    let operationContentArray = transformStringToArray(cleanOperationContent);
    if (verifyOperation(operationContentArray) == -1) {
        displayErrorMessage();
        return (-1);
    }

    operationContentArray = doMultDivide(operationContentArray);
    if (operationContentArray == "ERROR") {
        return (-1);
    }

    let operationResult = doSumSub(operationContentArray);

    if (operationResult == "ERROR")
        return (-1);
    displayResult(operationResult);
}

function addOperandToOperation(event) {
    let targetElement = event.target || event.srcElement;

    if (operationContent.length < 19) {
        operationContent += targetElement.getAttribute("value");
        paraDisplayContainer[0].innerHTML = operationContent;
    } else {
        if (operationContent.length == 19) {
            paraDisplayContainer[0].innerHTML = paraDisplayContainer[0].innerHTML.slice(0, -1) + "...";
        }
        operationContent += targetElement.getAttribute("value");
    }
}

Array.from(operands).forEach((operand) => {
    operand.addEventListener("click", (event) => addOperandToOperation(event));
});

function addOperatorToOperation(event) {
    let targetElement = event.target || event.srcElement;

    if (targetElement.getAttribute("value") === "=") {
        manageOperation();
    } else if (operationContent.length < 17) {
        operationContent += ' ' + targetElement.getAttribute("value") + ' ';
        paraDisplayContainer[0].innerHTML = operationContent;
    } else {
        if (operationContent.length >= 17 && operationContent.length <= 20) {
            paraDisplayContainer[0].innerHTML = paraDisplayContainer[0].innerHTML + "...";
        }
        operationContent += ' ' + targetElement.getAttribute("value") + ' ';
    }
}

Array.from(operators).forEach((operator) => {
    operator.addEventListener("click", (event) => addOperatorToOperation(event));
});

function resetParaDisplay() {
    operationContent = "";
    paraDisplayContainer[0].innerHTML = operationContent;
}

reset.addEventListener("click", () => resetParaDisplay());

function deleteOneValue() {
    if (isNaN(operationContent[operationContent.length - 2])) {
        operationContent = operationContent.slice(0, -3);
        paraDisplayContainer[0].innerHTML = operationContent;
    } else {
        operationContent = operationContent.slice(0, -1);
        paraDisplayContainer[0].innerHTML = operationContent;
    }
}

del.addEventListener("click", () => deleteOneValue());
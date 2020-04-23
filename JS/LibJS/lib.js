function randomizeValue(smallestValue, biggestValue) { // biggestValue exclude from possibilities
    let randomValue = Math.random() * (biggestValue - smallestValue);
    randomValue = Math.floor(randomValue) + smallestValue;
    return (randomValue);
}

function upperCasePosition(string, charPosition) { // charPosition = 0 for first character
    let upperChar = string.charAt(charPosition).toUpperCase();
    let stringFirst = string.substr(0, charPosition);
    let stringSecond = string.slice(charPosition + 1);
    let returnedString = stringFirst + upperChar + stringSecond
    return (returnedString);
}

function lowerCasePosition(string, charPosition) { // charPosition = 0 for first character
    let lowerChar = string.charAt(charPosition).toLowerCase();
    let stringFirst = string.substr(0, charPosition);
    let stringSecond = string.slice(charPosition + 1);
    let returnedString = stringFirst + lowerChar + stringSecond
    return (returnedString);
}

function lastChar(string) {
    let returnedString = str[str.length - 1]
    return (returnedString);
}

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1; // override system isArray for compatibility problem with older browsers
}

function getMaxArrayValue(arrayNumber) { //get max number of an array of NUMBER
    let maxValue = 0;

    for (let i = 0; i < arrayNumber.length; i++) {
        if (maxValue < arrayNumber[i])
            maxValue = arrayNumber[i];
    }
    return (maxValue);
}

function getMinArrayValue(arrayNumber) { //get min number of an array of NUMBER
    let minValue = arrayNumber[0];

    for (let i = 0; i < arrayNumber.length; i++) {
        if (minValue > arrayNumber[i])
            minValue = arrayNumber[i];
    }
    return (minValue);
}

function getPrimeNumbers(intervalExtreme) { //get all prime numbers to 0 to intervalExtreme
    let primeArray = [];

    mainLoop: for (let j = 2; j < intervalExtreme; j++) {
        for (let i = 2; i < j; i++) {
            if (j % i == 0)
                continue mainLoop;
        }
        primeArray.push(j);
    }
    return (primeArray);
}

function removeFromArray (array) { // delete all elements passed by args of array
    let functionArgs = Array.prototype.slice.call(arguments);

    for (let j = 0; j < array.length; j++) {
        for (let i = 1; i < functionArgs.length; i++) {
            if (array[j] == functionArgs[i]) {
                array.splice(j, 1);
                j -= 1;
            }
        }
    }
    return (array);
}

function sumAll (firstValue, secondValue) {
    if (typeof(firstValue) === "object" || typeof(secondValue) === "object")
        return ("ERROR");
        if (typeof(firstValue) === "string" || typeof(secondValue) === "string")
        return ("ERROR");
    if (typeof(firstValue) === "number" || typeof(secondValue) === "number");
    else
        return ("ERROR");
    if (firstValue < 0 || secondValue < 0)
        return ("ERROR");

    if (firstValue > secondValue) {
        let temporaryValue = secondValue;
        secondValue = firstValue;
        firstValue = temporaryValue;
    }
    let finalSum = 0;
    for (let i = firstValue; i < secondValue + 1; i++) {
        finalSum += i;
    }
    return (finalSum);
}

function reverseString(string) {
    let reversedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i);
    }
    return (reversedString);
}

function repeatString(string, repeatValue) {
    let repeatedString = "";

    if (repeatValue < 0)
        return ("ERROR");
    for (let i = 0; i < repeatValue; i++) {
        repeatedString += string;
    }
    return (repeatedString);
}

function leapYears(year) {
    if (year % 400 == 0)
        return (true);
    if (year % 100 == 0)
        return (false);
    if (year % 4 == 0)
        return (true);
    return (false);
}

const grid = document.querySelector("#container");
let gridRows = document.getElementsByClassName("rowsGrid");
let gridCols = document.getElementsByClassName("cell");

function gridCreation(rows, cols) { //call createRows and createCols with good values
    createRows(rows);
    createCols(cols);
}

function createRows(rows) { // init rows
    for (let r = 0; r < rows; r++) {
        const cell = document.createElement("div");
        cell.className = "rowsGrid";
        grid.appendChild(cell);
    }
}

function createCols(cols) { // init all cells
    for (let c = 0; c < gridRows.length; c++) {
        for (let r = 0; r < cols; r++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            gridRows[c].appendChild(cell);
        }
    }
}

function sum(operandsArray) {
	const result = operandsArray.reduce((sum, operand) => {
		return (sum + operand);
	}, 0);
	return (result);
}

function multiply(operandsArray) {
	const result = operandsArray.reduce((sumProduct, operand) => {
		return (sumProduct * operand);
	});
	return (result);
}

function power(operand, powerValue) {
	return (operand ** powerValue);
}

function factorial(factorialValue) {
	let factorialResult = 1;

	while (factorialValue) {
		factorialResult *= factorialValue;
		factorialValue--;
	}
	return (factorialResult);
}

function reverseString(str) { //IMPORTANT
    let stringArray = str.split("");
    let reverseArray = stringArray.reverse();
    let reverseString = reverseArray.join("");

    return (reverseString);
}

function palindromes (str) {
    let sanitizedStr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    let reverseStr = reverseString(sanitizedStr);
    for (let s = 0; s < sanitizedStr.length; s++) {
        if (sanitizedStr[s] !== reverseStr[s]) {
            return (false);
        }
    }
    return (true);
}

function removeOverflow(actualValue, minValue, maxValue) { //minValue and maxValue are included
    let intervalValue = maxValue - minValue + 1; // I have to add 1 if I want the real interval

    while (actualValue < minValue) { //in case of the value is small than the min extreme
        actualValue += intervalValue;
    }
    while (actualValue > maxValue) { //in case of the value is bigger than the max extreme
        actualValue -= intervalValue;
    }
    return (actualValue);
}//if there is overflow it's smoothing the value for it to be in interval
// useless modulo the interval works fine

function caesar (str, cipherIndex) {
    let finalStr = "";

    if (cipherIndex < 0)
        return caesar(str, cipherIndex + 26);

    for (let s = 0; s < str.length; s++) {
        let actualChar = str.charCodeAt(s)
        let cipheredCharCode = actualChar + cipherIndex;

        if (actualChar >= 65 && actualChar <= 90) {
            cipheredCharCode = (cipheredCharCode - 65) % 26 + 65;
            actualChar = String.fromCharCode(cipheredCharCode);
        }
        else if (actualChar >= 97 && actualChar <= 122) {
            cipheredCharCode = (cipheredCharCode - 97) % 26 + 97;
            actualChar = String.fromCharCode(cipheredCharCode);
        } else {
            actualChar = String.fromCharCode(actualChar);
        }
        finalStr += actualChar;
    }
    return (finalStr);
}

function fibonacci (fibonacciValue) { // return the n value of fibonacci suite
    let fibonacciArray = [1, 1];

    if (fibonacciValue < 0)
        return ("OOPS");
    for (let f = 2; f < fibonacciValue; f++) {
        fibonacciArray[f] = fibonacciArray[f - 1] + fibonacciArray[f - 2];
    }
    return (fibonacciArray[fibonacciValue - 1]);
}

function getCurrentYearDate() {
    let year = new Date();

    return (year.getFullYear());
}

let findTheOldest = function (peopleObject) {
    const ageSorted = peopleObject.sort((peopleA, peopleB) => {
        let ageA = verifyObjectValues(peopleA);
        let ageB = verifyObjectValues(peopleB);
        if (ageA > ageB)
            return (-1);
        return (1);
    });
    return (ageSorted[0]);
}

function deleteSpaces(string) //deletes all spaces of the "string"
{
    return (string.replace(/ /g, ''));
}

function transformStringToArray(string) { //transform string into array e.i 12+3+5 = ["12","+","3","+","5"]; put into the array if it's NaN or not
    let array = [];
    let storageString = "";

    for (let s = 0; s < string.length; s++) {
        if (isNaN(string.charAt(s))) {
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

function multOperands(valueA, valueB) //if valueA and valueB is not isNaN return the mult if not return -1
{
    if (!isNaN(valueA) && !isNaN(valueB))
        return (valueA * valueB);
    return (-1);
}

function divOperands(valueA, valueB) //if valueA and valueB is not isNaN return the div if not return -1
{
    if (!isNaN(valueA) && !isNaN(valueB))
        return (valueA / valueB);
    return (-1);
}

function removeSpecificElements(array, a, numberToDelete) // delete the "numbertodelete value" from array[a] element
{
    array.splice(a, numberToDelete);
}

function add(...operands) {
	const result = operands.reduce((sum, operand) => {
		return (sum + operand);
	});
	return (result);
}

function subtract(...operands) {
	const result = operands.reduce((substract, operand) => {
		return (substract - operand);
	});
	return (result);
}

function roundResult(value, decimalsValue)
{
    value = Number(value).toFixed(decimalsValue);
    return (array);
}

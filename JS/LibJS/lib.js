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
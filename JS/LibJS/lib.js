
function randomizeValue(smallestValue, biggestValue) { // random returning int value and take smallest value and biggest value
    let randomValue = Math.random() * (biggestValue - smallestValue);
    randomValue = Math.floor(randomValue) + smallestValue;
    return (randomValue);
}

function upperCasePosition(string, charPosition) { // uppercase character of string at specific position
    let upperChar = string.charAt(charPosition).toUpperCase();
    let stringFirst = string.substr(0, charPosition);
    let stringSecond = string.slice(charPosition + 1);
    let returnedString = stringFirst + upperChar + stringSecond
    return (returnedString);
}

function lowerCasePosition(string, charPosition) { // lowercase character of string at specific position
    let lowerChar = string.charAt(charPosition).toLowerCase();
    let stringFirst = string.substr(0, charPosition);
    let stringSecond = string.slice(charPosition + 1);
    let returnedString = stringFirst + lowerChar + stringSecond
    return (returnedString);
}

function lastChar(string) { // return last character of string
    let returnedString = str[str.length - 1]
    return (returnedString);
}

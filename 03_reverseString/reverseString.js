const reverseString = function(stringToReverse) {
    let reversedString = "";
    for(let i = 0; i < stringToReverse.length; i++){
        reversedString += stringToReverse[(stringToReverse.length-1)-i];
    }


    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

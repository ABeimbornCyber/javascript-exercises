const repeatString = function(string, num) {
    completeString = "";
    if(num<0){
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        completeString += string;
    }
    return completeString;
};

// Do not edit below this line
module.exports = repeatString;

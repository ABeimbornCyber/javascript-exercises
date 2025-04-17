const sumAll = function(start, end) {
    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    if(start < 0 || end < 0 ){
        return "ERROR";
    }else if(!(Number.isInteger(start))){
        return "ERROR";
    }else if(!(Number.isInteger(end))){
        return "ERROR";
    }
    let total = 0;
    for(let i = start; i <= end; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

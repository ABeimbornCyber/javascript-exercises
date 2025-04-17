const removeFromArray = function(arr, ...args) {
    let returnEmpty = true;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != args[i]){
            returnEmpty = false;
        }
    }
    if(returnEmpty){
        return [];
    }
    for(let i = 0; i < arr.length; ++i){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === args[j]){
                
                arr.splice(i, 1);
                if(i != 0){
                    i--;
                }
                
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

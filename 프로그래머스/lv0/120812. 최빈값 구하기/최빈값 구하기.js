function solution(array) {
    let countArray = [];
    
    for(let a of array){
        let count = 0;
        
        for(let b of array){
            if(a===b){
                count++;
            }
        }
        
        countArray.push(count);
    }
    
    
    const maxCount = Math.max(...countArray);
    let maxCntNums = [];
    
    for(let i=0; i<countArray.length; i++){
        if(countArray[i]===maxCount){
            maxCntNums.push(array[i]);
        }
    }
    
    const newArr = Array.from(new Set(maxCntNums));
    
    if(newArr.length>=2){
        return -1;
    } else {
        return newArr[0];
    }
    
    return newArr;
}
function solution(numbers) {
    let newArr = [];
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
                newArr.push(numbers[i] * numbers[j]);
        }
    }
    
    
    for(let i=0; i<newArr.length-1; i++){
        for(let j=i+1; j<newArr.length; j++){
            let tmp;
            if(newArr[i]>newArr[j]){
                tmp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = tmp;
            }
        }
    }
    
    return newArr[newArr.length-1];
}
function solution(numbers, direction) {
    const length = numbers.length;
    let newArr = [];
    let tmp;
    
    if(direction==='right'){
        newArr.push(numbers[length-1]);
        for(let i=0;i<=length-2;i++){
            newArr.push(numbers[i]);
        }
    } else {
        for(let i=1;i<=length-1;i++){
            newArr.push(numbers[i]);
        }
        newArr.push(numbers[0]);
    }
    
    return newArr;
}
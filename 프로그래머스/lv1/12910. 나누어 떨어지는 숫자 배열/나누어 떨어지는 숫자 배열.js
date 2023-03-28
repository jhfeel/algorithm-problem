function solution(arr, divisor) {
    const newArr = [];
    
    for(let v of arr){
        if(v % divisor === 0) newArr.push(v);
    }
    
    return newArr.length === 0 ? [-1] : newArr.sort((a,b) => a-b);
}
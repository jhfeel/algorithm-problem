function solution(array) {
    array = [...array.join('')];
    let cnt = 0;
    
    for (let a of array){
        if(a === '7') cnt++;
    }
    
    return cnt;
}
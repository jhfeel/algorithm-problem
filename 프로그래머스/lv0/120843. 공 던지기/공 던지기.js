function solution(numbers, k) {
    let index = 0
    
    for(let i=1; i<k; i++){
        if(index===numbers.length-1){
            index = 0;
        } else {
            index++;
        }
        if(index===numbers.length-1){
            index = 0;
        } else {
            index++;
        }
        
    }
    
    return numbers[index];
}
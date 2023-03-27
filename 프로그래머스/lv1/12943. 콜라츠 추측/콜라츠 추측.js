function solution(num) {
    if(num === 1) return 0;
    
    let count = 0;
    while(true){
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count++;
        
        if (num === 1) return count;
        if (count === 500) return -1;
    }
}
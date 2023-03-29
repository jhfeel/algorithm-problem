function solution(n) {
    let reverse = '';
    let answer = 0;
    
    while(n > 0) {
        reverse += n % 3;
        n = Math.floor(n / 3);
    }
    
    for(let i = reverse.length-1; i>=0; i--){
        answer += reverse[i] * (3 ** Number(reverse.length-1-i));
    }
    
    return answer;  
}
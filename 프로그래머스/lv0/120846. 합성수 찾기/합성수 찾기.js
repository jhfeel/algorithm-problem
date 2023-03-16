function countDivisor(x){
    let cnt = 0;
    for(let i=1; i<=x; i++){
        if(x%i===0){
            cnt++;
        }
    }
    
    return cnt;
}

function solution(n) {
    
    
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(countDivisor(i)>=3){
            cnt++;
        }
    }
    return cnt;
}
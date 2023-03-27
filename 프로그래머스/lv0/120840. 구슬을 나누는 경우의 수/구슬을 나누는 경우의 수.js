function factorial(x){
    if (x === 0) return 1;
    
    let result = 1;
    for(let i=1;i<=x;i++){
        result *= i;
    }
    
    return result;
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));       
}
function solution(n) {
    n = n.toString();
    let sum = 0;
    for(let a of n){
        sum += Number(a);
    }
    
    return sum;
}
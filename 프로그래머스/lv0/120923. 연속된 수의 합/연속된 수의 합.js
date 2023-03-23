function solution(num, total) {
    let ans = [];
    let sum = 0;
    let prev;
    
    for(let i=1; i<=num; i++){
        sum += i;
    }
    prev = (total-sum)/num;
    
    for(let j=1; j<=num; j++){
        ans.push(prev+j);
    }
    return ans; 
}
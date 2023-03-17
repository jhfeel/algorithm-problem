function solution(n, numlist) {
    let ans = [];
    for(let a of numlist){
        if(a%n===0){
            ans.push(a);
        }
    }
    
    return ans;
}
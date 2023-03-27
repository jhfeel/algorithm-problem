function solution(n) {
    n = String(n);
    const ans = [];
    
    for(let i = n.length-1; i>=0; i--)  ans.push(Number(n[i])); 
    
    return ans;
}
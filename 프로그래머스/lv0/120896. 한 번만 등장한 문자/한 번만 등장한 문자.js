function solution(s) {
    s = [...s];
    let ans = [];
    
    for(let a of s){
        let cnt = 0;
        for(let b of s){
            if(a===b){
                cnt++;
            }
        }
        if(cnt===1){
            ans.push(a);
        }
    }
    
    return ans.sort().join('');
}
function solution(emergency) {
    let ans = [];
    let emergency2 = [];
    
    for(let a of emergency){
        emergency2.push(a);
    }
    emergency.sort((a,b)=>b-a);
    
    for(let b of emergency2){
        ans.push(emergency.indexOf(b)+1);
    }
    
    return ans;
}
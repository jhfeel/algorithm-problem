function solution(array) {
    let ans = [];
    
    for(let i=0; i<array.length; i++){
        if(array[i]===Math.max(...array)){
            ans.push(array[i],i);
        }
    }
    
    return ans;
}
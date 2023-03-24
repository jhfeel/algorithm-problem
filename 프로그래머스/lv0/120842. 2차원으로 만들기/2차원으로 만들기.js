function solution(num_list, n) {
    
    let ans = [];
    for(let i=1; i<=num_list.length/n; i++){
        ans.push([]);
    }
    
    // 배열 채워넣기
    for(let k=0, len=num_list.length/n; k<len; k++){
        for(let j=1; j<=n; j++){
            ans[k].push(num_list.shift());
        }
    }
        
    return ans;
}
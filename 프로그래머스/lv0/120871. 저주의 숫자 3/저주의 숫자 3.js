function solution(n) {
    let ans = 0;
    for(let i=1;i<=n; i++){
        // 기본 플러스
        ans++;
        
        // 3의 배수이거나 3 포함하면 또 플러스(조건 해당 시 계속 플러스)
        while (ans%3 === 0 || [...String(ans)].includes('3')){
            ans++;
        }
    }
    
    return ans;
}
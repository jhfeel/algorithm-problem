function solution(n, k) {
    let x = 0;
    for(let i=1;i<=n;i++){
        if(i%10===0){
            x++;
        }
    }
    return 12000*n + 2000*(k-x);
}
// 소수인지
function isPrime(x){
    let cnt = 0;
    for(let i=1; i<=x;i++){
        if(x%i===0){
            cnt++;
        }
    }
    return cnt===2;
}

// y가 x의 약수인지
function isDivisor(x, y){
    let arr = [];
    for(let i=0; i<=x; i++){
        if(x%i===0){
            arr.push(i);
        }
    }
    return arr.includes(y);
}

function solution(n) {
    let ans = [];
    for(let i=1; i<=n; i++){
        if(isPrime(i) && isDivisor(n,i)){
            ans.push(i);
        }
    }
    return ans;
}
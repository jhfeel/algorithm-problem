// 소수인지 판별하는 함수
function isPrime(n){
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            cnt++;
        }
    }
    return cnt===2;
}

function solution(a, b) {
    
    // 기약분수 만들기
    for(let i=Math.min(a,b); i>=2; i--){
        if(a%i===0 && b%i===0){
            a /= i;
            b /= i;
            break;
        }
    }
    
    // 분모의 소인수 구하기
    let arr = [];
    for(let i=2; i<=b; i++){
        if(b%i === 0 && isPrime(i)){
            arr.push(i);
        }
    }
    
    // 분모의 소인수가 2나 5만 있는지 확인하기
    for(let a of arr){
        if(a !== 2 && a !== 5){
            return 2;
        }
    }
    return 1;
}
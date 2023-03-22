function solution(i, j, k) {
    let str = '';
    let cnt = 0;
    
    for(let n=i; n<=j; n++){
        str += String(n);
    }
    
    for(let m=0; m<str.length; m++){
        if(str[m] === String(k)){
            cnt++;
        }
    }
    
    return cnt;
}
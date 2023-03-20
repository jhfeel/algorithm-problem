function solution(cipher, code) {
    let ans = '';
    for(let i=0; i<cipher.length; i++){
        if((i+1)%code === 0){
            ans += cipher[i];
        }
    }
    
    return ans;
}
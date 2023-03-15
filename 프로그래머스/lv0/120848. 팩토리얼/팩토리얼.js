function solution(n) {
    let ans;
    let x = 1;
    
    for(let i=1;;i++){
        x *= i; 
        ans = i-1;
        if(x>n){
            break;
        }
    }
    
    return ans;
        
}
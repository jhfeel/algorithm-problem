function solution(n, m) {
    let gcf;
    let lcm;
    
    for(let i=Math.min(n,m); i>=1; i--){
        if(n%i === 0 && m%i === 0) {
            gcf = i;
            break;
        }
    }
    
    for(let j=Math.max(n,m); ; j++){
        if(j%n === 0 && j%m === 0){
            lcm = j;
            break;
        }
    }
    
    return [gcf, lcm];
}
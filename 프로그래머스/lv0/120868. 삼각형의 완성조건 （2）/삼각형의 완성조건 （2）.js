function solution(sides) {
    const a = sides[0];
    const b = sides[1];
    let cnt = 0;
    let zzz;
    
    for(let c=1; c<a+b; c++){
        if(a<b+c && b<a+c && c<a+b){
            cnt++;
        }
    }
    
    return cnt;
}
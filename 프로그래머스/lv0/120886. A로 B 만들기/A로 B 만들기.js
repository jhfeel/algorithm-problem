function solution(before, after) {
    before = [...before].sort();
    after = [...after].sort();
    
    if(before.join('') === after.join('')){
        return 1;
    } else {
        return 0;
    }
    
}
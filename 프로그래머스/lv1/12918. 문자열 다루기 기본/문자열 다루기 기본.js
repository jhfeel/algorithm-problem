function solution(s) {
    s = [...s];
    for(let v of s){
        if(isNaN(v)) return false
    }
    return s.length === 4 || s.length === 6
}
function solution(sides) {
    const s0 = sides[0];
    const s1 = sides[1];
    const s2 = sides[2];
    
    if(s0<s1+s2 && s1<s0+s2 && s2<s0+s1) return 1;
    else return 2;    
}
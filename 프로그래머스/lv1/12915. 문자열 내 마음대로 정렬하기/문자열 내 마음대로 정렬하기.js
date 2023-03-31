function solution(strings, n) {
    return strings.sort().sort((s1, s2) => {
        return s1.charCodeAt(n) - s2.charCodeAt(n); 
    });
}
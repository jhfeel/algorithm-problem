function solution(s) {
    const len = s.length;
    return len % 2 === 1 ? s[(len-1)/2] : s.slice(len/2-1, len/2+1);
}
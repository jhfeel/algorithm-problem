function solution(num, k) {
    num = [...String(num)];
    k = String(k);
    return num.indexOf(k)+1 ? num.indexOf(k)+1: -1;
}
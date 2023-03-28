function solution(arr) {
    let answer = [];
    answer = arr.filter(x => x !== Math.min(...arr));
    
    return answer.length === 0 ? [-1] : answer;
}
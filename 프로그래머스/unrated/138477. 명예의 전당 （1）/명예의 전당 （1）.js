function solution(k, score) {
    const arr = [];
    const answer = [];
    
    for(let v of score){
        if(arr.length < k){
            arr.push(v);
        } else {
            if(Math.min(...arr) < v) {
                arr[arr.indexOf(Math.min(...arr))] = v;
            }
        }
        
        answer.push(Math.min(...arr));
    }
    
    return answer;
}
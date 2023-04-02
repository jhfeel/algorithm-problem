function solution(arr){
    const answer = [];
    
    for(let v of arr){
        if(answer[answer.length-1] !== v){
            answer.push(v);
        }
    }
    
    return answer;
    
}
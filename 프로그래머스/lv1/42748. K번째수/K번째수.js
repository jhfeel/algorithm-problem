function solution(array, commands) {
    const answer = [];
    let newArr;
    
    for(let command of commands){
        newArr = array.slice(command[0]-1, command[1]).sort((a,b)=>a-b);
        answer.push(newArr[command[2]-1]);
    }
    
    return answer;
}
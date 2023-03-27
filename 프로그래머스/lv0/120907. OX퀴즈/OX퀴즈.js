function solution(quiz) {
    let ans = [];
    
    for(let i=0; i<quiz.length; i++){
        quiz[i] = quiz[i].split(' ');
        if(quiz[i][1]==='+'){
            if(Number(quiz[i][0])+Number(quiz[i][2]) === Number(quiz[i][4])){
                ans.push('O');
            } else {
                ans.push('X');
            }
        } else {
            if(Number(quiz[i][0])-Number(quiz[i][2]) === Number(quiz[i][4])){
                ans.push('O');
            } else {
                ans.push('X');
            }
        }
    }
    
    return ans;
}
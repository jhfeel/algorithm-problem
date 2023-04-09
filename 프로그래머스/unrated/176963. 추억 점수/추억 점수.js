function solution(name, yearning, photo) {
    const answer = [];
    let sum = 0;
    
    for(let arr of photo){
        sum = 0;
        for(let person of arr){
            if(name.includes(person)) {
                sum += yearning[name.indexOf(person)]
            }
        }
        answer.push(sum);
    }
    
    return answer;
}
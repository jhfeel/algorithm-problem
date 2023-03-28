function solution(seoul) {
    for(let x=0; x<seoul.length; x++){
        if(seoul[x] === 'Kim') return `김서방은 ${x}에 있다`;
    }
}
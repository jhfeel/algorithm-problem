function solution(s) {
    let X = 0;
    let notX = 0;
    let start = 0;
    const newArr = [];
    
    for(let i=0; i<s.length; i++){
        if(s[i] === s[start]) X++;
        else notX++;
        
        if(X === notX){
            newArr.push(s.slice(start, i+1));
            start = i + 1;
        }
        
        if(X + notX === s.length && start !== s.length){
            newArr.push(s.slice(start));
        }
    }
    
    return newArr.length;
}
function pushOnce (str){
    str = [...str];
    const lastIndex = str.length-1;
    let result = [];
    
    result.push(str[lastIndex]);
    for(let i=0; i<=lastIndex-1; i++){
        result.push(str[i]);
    }
    
    return result.join('');
}



function solution(A, B) {    
    if(A === B){
        return 0;
    }
    for(let i=1; i<=A.length; i++){
        A = pushOnce(A);
        if(A === B){
            return i;
        }
    }
    return -1;
}
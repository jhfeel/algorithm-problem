function solution(my_string) {
    let newStr = '';
    for(let a of my_string){
        if(!newStr.includes(a)){
            newStr += a;
        } 
    }
    
    return newStr;
    
    return ;
}
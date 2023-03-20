function solution(my_str, n) {
    let tmp = '';
    let arr = [];
    
    for(let i=0; i<my_str.length; i++){
        tmp += my_str[i];
        
        if(tmp.length === n){
            arr.push(tmp);
            tmp = '';
        }
        
        if(i === my_str.length-1 && tmp!==''){
            arr.push(tmp);
        }
    }
    
    return arr;
}
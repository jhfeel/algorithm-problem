function solution(my_string, letter) {
    let newStrArr = [];
    for(let i=0; i<my_string.length;i++){
        if(my_string[i]!==letter){
            newStrArr.push(my_string[i]);
        }
    }
    
    return newStrArr.join('');
}
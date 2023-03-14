function solution(my_string) {
    let new_string = [];
    const lastIndex = my_string.length-1;
    
    for(let i=lastIndex;i>=0;i--){
        new_string[lastIndex-i] = my_string[i];
    }
    
    return new_string.join('');
}
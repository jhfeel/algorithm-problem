function solution(my_string, n) {
    let newStr = [];
    for(let i=0;i<my_string.length;i++){
        for(let j=1;j<=n;j++){
            newStr.push(my_string[i]);
        }
    }
    
    return newStr.join('');
}
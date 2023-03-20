function solution(my_string) {
    let newArr = [];
    
    for(let i=0; i<my_string.length; i++){
        if(my_string.charCodeAt(i)<97){
            newArr.push(String.fromCharCode(my_string.charCodeAt(i)+32))
        } else {
            newArr.push(my_string[i]);
        }
    }
    
    return newArr.sort().join('');
    
    
    
}
function solution(my_string) {
    let arr = [];
    for(let i=0; i<my_string.length; i++){
        let num = my_string.charCodeAt(i);
        if(num>=97){
            num -= 32;
        } else {
            num += 32;
        }
        arr.push(String.fromCharCode(num));
    }
    
    return arr.join('');
}
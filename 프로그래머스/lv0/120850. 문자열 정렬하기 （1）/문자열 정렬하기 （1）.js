function solution(my_string) {
    let numbers = [];
    
    for(let i=0;i<my_string.length;i++) {
        if(!isNaN(my_string[i])){
            numbers.push(Number(my_string[i]));
        }
    }

    
    return numbers.sort();
}
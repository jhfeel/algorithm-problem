function solution(my_string) {
    my_string = [...my_string.split(' ')];
    let ans = 0;
    for(let i=0; i<my_string.length; i++){
        if(!isNaN(my_string[i])){
            if(my_string[i-1] === '-'){
                ans -= Number(my_string[i]);
            } else {
                ans += Number(my_string[i]);
            }
        }
    }
    
    return ans;
}
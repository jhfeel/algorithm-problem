function solution(my_string) {
    // const aeiou = ['a','e','i','o','u'];
    // let newStr = [];
    // for(let i=0;i<my_string.length;i++){
    //     if(aeiou.includes(my_string[i])===false){
    //         newStr.push(my_string[i]);   
    //     }
    // }
    // return newStr.join('');
    
    return my_string.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('');
}
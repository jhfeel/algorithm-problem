function solution(my_string) {
    let newArr = [];
    let tmp = '';
    let sum = 0;
    
    for(let i=0; i<my_string.length; i++){
        if(isNaN(my_string[i]) && tmp!==''){ // 지금 인덱스의 값이 문자라면 && tmp가 비어있지 않으면
            newArr.push(tmp); // newArr에 tmp 넣고 
            tmp = ''; // tmp 비우기
        }
        
        if(!isNaN(my_string[i])){ // 지금 인덱스의 값이 숫자라면
            tmp += my_string[i]; // tmp에 넣어 두기
            if(i === my_string.length-1){ // 마지막 인덱스라면 숫자라도 tmp를 newArr에 담기
                newArr.push(tmp);
            }
        } 
        
    }
    
    for(let a of newArr){
        sum += Number(a);
    }
        
    return sum;
}
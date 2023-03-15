function solution(numbers) {    
    for(let i=0;i<=numbers.length-2;i++){
        for(let j=i+1;j<=numbers.length-1;j++){
            let tmp;
            if(numbers[i]<numbers[j]){
                tmp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = tmp;
            }
        }
    }
    
    return numbers[0]*numbers[1];
    
}
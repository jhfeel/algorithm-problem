function solution(numbers, num1, num2) {
    let newArr =[];
    for(let i=num1; i<=num2; i++){
        newArr.push(numbers[i]);
    }
    
    return newArr;
}
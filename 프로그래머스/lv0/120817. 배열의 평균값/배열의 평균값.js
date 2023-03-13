function solution(numbers) {
    let sum = 0;
    const n = numbers.length;
    for (let i=0;i<n;i++){
        sum += numbers[i];
    }
    return sum/n;
}
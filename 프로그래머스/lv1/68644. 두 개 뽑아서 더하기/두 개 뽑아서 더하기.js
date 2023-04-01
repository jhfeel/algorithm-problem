function solution(numbers) {
    const arr = [];
    for(let i=0; i<=numbers.length-2; i++){
        for(let j=i+1; j<=numbers.length-1; j++){
            arr.push(numbers[i]+numbers[j]);
        }
    }
    
    return Array.from(new Set(arr)).sort((a,b)=>a-b);
}
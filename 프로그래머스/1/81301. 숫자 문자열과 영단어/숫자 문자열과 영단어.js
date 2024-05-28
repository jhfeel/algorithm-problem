function solution(s) {
    const numberArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let concatNumber = '';
    let concatAlphabet = '';

    // 1. 문자열 순회하면서 영어 표기를 숫자로 바꾸기
    for (let char of s){
        // 1-1. 문자열 순회하면서 숫자라면 숫자 문자열에 합치기
        if(!isNaN(char)){
            concatNumber += char;
        // 1-2. 문자열 순회하면서 숫자가 아니라면 알파벳 문자열에 합치기  
        } else {
            concatAlphabet += char;
        }
        
        // 1-3. 숫자의 영어 표기가 완성되면 숫자로 바꾸고 숫자 문자열에 합치기
        if(numberArr.includes(concatAlphabet)){
            concatNumber += numberArr.indexOf(concatAlphabet)
            concatAlphabet = '';
        }
    }
    
    // 2. 문자열을 숫자형으로 바꾸기
    return parseInt(concatNumber);
}


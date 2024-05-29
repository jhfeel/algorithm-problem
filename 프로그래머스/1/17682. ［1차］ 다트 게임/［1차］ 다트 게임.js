// 점수 계산기
function calculatePoints(pointArr, bonusArr, optionArr) {
    let sum = 0;
    
    for (let i = 0; i < 3; i++) {
        if(bonusArr[i] === 'D') {
            pointArr[i] = pointArr[i] * pointArr[i]
        } 
        if(bonusArr[i] === 'T') {
            pointArr[i] = pointArr[i] * pointArr[i] * pointArr[i]
        }
        
        if(optionArr[i] === '#') {
            pointArr[i] = -pointArr[i];
        }
        if(optionArr[i] === '*' && i === 0) {
            pointArr[i] *= 2;
        }
        if(optionArr[i] === '*' && i !== 0) {
            pointArr[i-1] *= 2;
            pointArr[i] *= 2;
        }
    }
    
    for (let i = 0; i < 3; i++) {
        sum += pointArr[i];
    }
    
    return sum;
}

function solution(dartResult) {
    let numString = '';
    const pointArr = [];
    const bonusArr = [];
    const optionArr = [];
    let round = -1;
    
    // 1. 문자열 순회하면서 각 배열에 나눠 담기(점수, 보너스, 옵션)
    for (let char of dartResult) {
        if (isNaN(char)) {
            if (char === 'S' || char === 'D' || char === 'T') {
                pointArr.push(+numString);
                numString = '';
                
                bonusArr.push(char);
                round++; // 보너스는 라운드당 하나 -> 보너스로 라운드 카운트
            } else {
                optionArr[round] = char;
            }
        } else {
            numString += char;
        }
    }
    
    // 2. 배열들을 순회하며 최종 점수 계산
    return calculatePoints(pointArr, bonusArr, optionArr);
}
function solution(polynomial) {
    polynomial = polynomial.split(' + '); // 배열로 바꾸기(' + ' 기준)
    let x = 0; // 결과값의 x의 계수 카운트 
    let constant = 0; // 결과값의 상수항 카운트 
    
    // 배열 돌면서 x의 계수와 상수항 카운트하기
    for(let v of polynomial){
        // 일차항이라면(x가 포함)
        if(v.includes('x')){
            // 계수가 1인 경우
            if(v === 'x'){
                x++;
            // 계수가 2 이상인 경우
            } else {
                x += Number([...v].filter(x => !isNaN(x)).join(''));
            }
        // 상수항이라면
        } else {
            constant += Number(v);
        }
    }
    
    // 결과 출력
    // x의 계수가 0이라면
    if(x === 0){
        // 상수가 0일 때
        if(constant === 0) {
            return '';   
        // 상수가 있을 때
        } else {
            return `${constant}`;
        } 
    // x의 계수가 1 이상이라면
    } else {
        // 상수가 0일 때
        if(constant === 0) {
            return `${x > 1? x : ''}x`
        } else {
        // 상수가 있을 때
            return `${x > 1? x : ''}x + ${constant}`
        }
    }
}
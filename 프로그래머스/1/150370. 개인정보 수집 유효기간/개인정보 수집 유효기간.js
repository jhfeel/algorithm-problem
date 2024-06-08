function solution(today, terms, privacies) {
    const answer = [];
    const periods = new Map();
    
    // 1. terms 돌며 약관별 유효기간 Map에 보관
    terms.forEach((it) => {
        let [term, period] = it.split(' ');
        periods.set(term, +period)
    })
    
    // 2. privacies 돌며 종료일 구하고 그게 오늘 이전이면 answer에 넣기
    privacies.forEach((it, idx) => {
        let [start, term] = it.split(' ');
        let period = periods.get(term);
        
        if(gedEnd(start, period) < today) {
            answer.push(idx + 1);
        }
    }) 
    return answer;
}

// 시작일에 기간을 더한 종료일을 반환하는 함수
function gedEnd (start, period) {
    let [year, month, day] = start.split('.').map((v) => +v);
    
    // 1. 월에 period 더하고 12개월마다 연도로 옮기기
    month += period;
    year += Math.floor(month / 12);
    month = month % 12;
    
    // 2. 일에서 1 빼기
    day -= 1;
    if (day === 0) {
        day = 28;
        month -= 1;
    }
    if(month === 0) {
        month = 12;
        year -= 1;
    }

    // 3. 문자열 만들기(월, 일은 한 자리라면 앞에 0 붙이기)
    year = String(year);
    month = month < 10 ? "0" + month : String(month);
    day = day < 10 ? "0" + day : String(day);

    return [year, month, day].join(".");
}
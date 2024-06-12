// fees: 기본 시간, 기본 요금, 단위 시간, 단위 요금
// record: 시각 차량번호 내역

function solution(fees, records) {
    let answer;
    const cars = {}
    let IN = [];
    const old = [];
    
    records.forEach((record,i) => {
        const [time, carNum, io] = record.split(' ');
        let [h, m] = time.split(':').map(Number);
        let minutes = h * 60 + m;
                
        if (!old.includes(carNum)) {
            // 첫 방문이면 -> old에 포함 & 객체 만들기
            old.push(carNum);
            cars[carNum] = { in: 0, acc: 0 };

        }
            
        
        if (io === 'IN') {
            // 입차라면 -> 입차 시간 기록 & 입차 처리
            cars[carNum].in = minutes;
            IN.push(carNum);
        } else {
            // 출차라면 -> 누적 시간 기록 & 출차 처리
            cars[carNum].acc += (minutes - cars[carNum].in);
            IN = IN.filter((el) => el !== carNum)
        }
    })
    
    // 안 나간 차 처리
    IN.forEach((carNum) => {
        // 23:59 - 마지막 입차 -> 누적 기록
        const outTimeMinutes = 23 * 60 + 59;
        cars[carNum].acc += (outTimeMinutes - cars[carNum].in);
    })
    
    // 차 번호 낮은 순 정렬한 요금 배열
    // 1) old 정렬
    old.sort();
    
    // 2) 배열 돌면서 누적 시간 -> 요금 계산기 -> 요금 배열
    answer = old.map((v) => {
        const fee = getFee(cars[v].acc, fees);
        return fee;
    })
    
    
    return answer;
}


// 요금 계산기
function getFee(acc, fees) {
    const [dt, df, t, f] = fees;
    
    if (acc <= dt) {
        return df;
    } else {
        return df + Math.ceil((acc - dt) / t) * f;
    }
}
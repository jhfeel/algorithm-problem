function solution(numbers, hand) {
    let answer = '';
    let leftP = '*';
    let rightP = '#';
    const L = [1, 4, 7];
    const R = [3, 6, 9];   
    const C = [2, 5, 8, 0];
    
    // numbers를 돌면서
    numbers.forEach((num) => {
        // 목표 숫자가 왼쪽 줄이라면 -> 왼손으로 누르기
        if(L.includes(num)){
            leftP = num;
            answer += 'L';
        // 목표 숫자가 오른쪽 줄이라면 -> 오른손으로 누르기
        } else if (R.includes(num)) {
            rightP = num;
            answer += 'R';
        // 목표 숫자가 가운데 줄이라면 -> 목표까지의 거리 비교 후 가까운 손으로 누르기
        } else {
            if (getDistance(leftP, num) < getDistance(rightP, num)) {
                leftP = num;
                answer += 'L';
            } else if (getDistance(leftP, num) > getDistance(rightP, num)) {
                rightP = num;
                answer += 'R';
            } else {
                // 거리가 같으면 주로 쓰는 손으로 누르기
                if(hand === 'left') {
                    leftP = num;
                    answer += 'L';
                } else {
                    rightP = num;
                    answer += 'R';
                }
            }
        }
    })
    
    return answer;
}

// 현재 손가락에서 목표까지의 거리를 구하는 함수
function getDistance(now, to) {
    let distance = 0;
    const C = [2, 5, 8, 0];
    const pad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']]
    let nowLine; // 현재 라인
    let toLine; // 목표 라인
    
    // 현재 위치가 가운데 줄이 아니라면 -> 가운데로 1칸 이동
    if (!C.includes(now)) distance++;
    
    // 패드 2차원 배열을 돌면서 현재 라인과 목표 라인 차이만큼 이동
    pad.forEach((arr, idx) => {
        if (arr.includes(now)) nowLine = idx;
        if (arr.includes(to)) toLine = idx;
    })
    distance += Math.abs(nowLine-toLine);    
    
    return distance;
}
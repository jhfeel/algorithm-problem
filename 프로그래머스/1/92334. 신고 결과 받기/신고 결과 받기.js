function solution(id_list, report, k) {
    const answer = [];
    let accusing;
    let accused;
    const bannedList = [];
    const count = {}; // id별로 신고 당한 횟수, 메일 받은 횟수 카운트하는 객체
    
    for (let id of id_list) {
        count[id] = {accused: 0, mailed: 0};
    }
    
    
    // 1. 한 유저가 특정 유저 신고하는 경우의 중복 제거(배열 -> Set -> 배열)
    report = [...new Set(report)];

    
    // 2. report를 순회하면서 신고 당한 id 별로 신고 당한 횟수 카운트
    for (let val of report) {
        [accusing, accused] = val.split(" ");
        count[accused].accused++;
    }

    // 3. 신고 당한 횟수 >= k 라면 bannedList에 넣기
    for (let id of id_list) {
        if(count[id].accused >= k) {
            bannedList.push(id);
        }
    }
    
    // 4. bannedList에 속하면 신고자 mailed 카운트
    for (let val of report) {
        [accusing, accused] = val.split(" ");
        if (bannedList.includes(accused)) {
            count[accusing].mailed++;
        }
    }
    
    // 5. mail 받은 횟수 배열로 출력
    for(let id of id_list) {
        answer.push(count[id].mailed)
    }
    
    return answer;
}
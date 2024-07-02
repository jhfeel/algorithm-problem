function solution(record) {
    const answer = [];
    const usernames = {};
    const entryRecord = [];
    
    record.forEach((str) => {
        const [state, uid, username] = str.split(' ');
        
        if (state === 'Enter') {
            usernames[uid] = username;
            entryRecord.push([uid, '님이 들어왔습니다.']);
        }
        if (state === 'Leave') {
            entryRecord.push([uid, '님이 나갔습니다.']);
        } 
        if (state === 'Change') {
            usernames[uid] = username;
        }
        
    })
    
        
    entryRecord.forEach((val) => {
        const [uid, inOrOut] = val;
        
        answer.push(usernames[uid] + inOrOut)
    })
    
    return answer;
}
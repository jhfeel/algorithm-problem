function solution(friends, gifts) {
    const take = [];
    const friendsObj = {};
    friends.forEach((friend) => {
        friendsObj[friend] = { give: 0, take: 0, point: 0, nextMonth: 0, };
        friends.forEach((to) => {
            friendsObj[friend][to] = 0;
        })
    })
    
    // 이번 달까지 주고 받은 것과 선물 지수 계산
    gifts.forEach((gift) => {
        const [from, to] = gift.split(' ');
        
        friendsObj[from][to]++;
        
        friendsObj[from].point++;
        friendsObj[to].point--;
    })
        
    // 다음 달 정산
    for (let a of friends) {
        for (let b of friends) {
            if (a === b) continue;
            
            if (friendsObj[a][b] > friendsObj[b][a]) {
                friendsObj[a].nextMonth++;
            }
            
            if (friendsObj[a][b] === friendsObj[b][a]) {
                if (friendsObj[a].point > friendsObj[b].point) {
                    friendsObj[a].nextMonth++;
                }
            }
        }
    }
    
    friends.forEach((friend) => {
        take.push(friendsObj[friend].nextMonth)
    })
    
    return Math.max(...take);
}
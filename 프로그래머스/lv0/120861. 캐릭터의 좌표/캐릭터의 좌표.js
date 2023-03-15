function solution(keyinput, board) {
    let ans = [0, 0];
    const xLimit = Math.floor(board[0]/2);
    const yLimit = Math.floor(board[1]/2);
    
    for (let a of keyinput){
        if(a === 'right'){
            if(ans[0]===xLimit){
                
            } else {
                ans[0]++;
            }
        }
        if(a === 'left'){
            if(ans[0] === - xLimit){
                
            } else {
                ans[0]--;
            }
        }
        if(a === 'up'){
            if(ans[1]===yLimit){
                
            } else {
                ans[1]++;
            }
        }
        if(a === 'down'){
            if(ans[1] === - yLimit){
                
            } else {
                ans[1]--;
            }
        }
    }
    return ans;
}
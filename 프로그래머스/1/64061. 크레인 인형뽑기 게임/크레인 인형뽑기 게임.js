function solution(board, moves) {
    let count = 0;
    const newBoard = [];
    const basket = [];
    let pickNum;
    
    // 1. 2차원 배열의 행과 열 바꾸기
    // 1-1. 같은 길이의 2차원 배열 newBoard 만들기
    for (let i = 0; i < board[0].length; i++) {
        newBoard.push([]);
    }
    
    // 1-2. board의 행과 열을 바꾸기
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            newBoard[j][i] = board[i][j];
        }
    }
    
    // 2. 뽑아서 바구니에 순서대로 넣기
    for (let k = 0; k < moves.length; k++) {
        pickNum = moves[k] - 1; // 뽑을 줄 번호 
        
        for (let l = 0; l < newBoard[pickNum].length; l++) {
            // 해당 줄의 처음부터 순회하되 0이면 다음 칸으로 넘어가기
            if (newBoard[pickNum][l] === 0) {
                continue;
                
            // 0이 아니면 값을 바구니에 담기
            } else {
                // 바구니에 같은 값이 연속으로 담기면 둘 다 지우고, 2개 카운트 세기
                if (newBoard[pickNum][l] === basket[basket.length - 1]) {
                    basket.pop();
                    count = count + 2;
                } else {
                    basket.push(newBoard[pickNum][l]);
                }
                // 뽑았으면 0으로 바꾸기
                newBoard[pickNum][l] = 0;
                break;
            }            
        }
    }

    return count;
}
function solution(board) {
    const n = board.length;
    const danger = [];
    for(let x=0; x<n; x++){
        danger.push([]);
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] === 1) {
                danger[i-1===-1?0:i-1][j-1===-1?0:j-1] = 1;
                danger[i-1===-1?0:i-1][j] = 1;
                danger[i-1===-1?0:i-1][j+1===n?n-1:j+1] = 1;
                danger[i][j-1===-1?0:j-1] = 1;
                danger[i][j] = 1;
                danger[i][j+1===n?n-1:j+1] = 1;
                danger[i+1===n?n-1:i+1][j-1===-1?0:j-1] = 1;
                danger[i+1===n?n-1:i+1][j] = 1;
                danger[i+1===n?n-1:i+1][j+1===n?n-1:j+1] = 1;
            }
        }
    }
    
    let dangerCount = 0;
    for(let a=0; a<n; a++){
        for(let b=0; b<n; b++){
            if(danger[a][b] === 1) dangerCount++;
        }
    }
    
    return n*n - dangerCount;
}
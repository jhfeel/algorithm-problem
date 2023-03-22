function solution(keyinput, board) {
		// 시작 위치 초기화하기
		let position = [0, 0];

		// 최대로 갈 수 있는 거리에 제한 두기
		// board의 가로, 세로가 홀수이고 [0,0]이 정중앙이므로 -> 가로, 세로 2를 나누고 소수점 아래 버리면 제한값 완성
		const xLimit = Math.floor(board[0]/2); // right, left 제한  
		const yLimit = Math.floor(board[1]/2); // up, down 제한

		for (let v of keyinput){
		    if(v === 'right' && position[0] !== +xLimit){ // 입력값이 right이고 오른쪽 끝(xLimit)에 있지 않다면 -> x좌표 1칸 플러스
            position[0]++;
		    }
		    if(v === 'left' && position[0] !== -xLimit){ // 입력값이 left이고 왼쪽 끝(-xLimit)에 있지 않다면 -> x좌표 1칸 마이너스
		        position[0]--;
		    }
		    if(v === 'up' && position[1] !== +yLimit){ // 입력값이 up이고 위쪽 끝(yLimit)에 있지 않다면 -> y좌표 1칸 플러스
		        position[1]++;
		    }
		    if(v === 'down' && position[1] !== -yLimit){ // 입력값이 down이고 아래쪽 끝(-yLimit)에 있지 않다면 -> y좌표 1칸 마이너스
		        position[1]--;
		    }
		}

		return position;
}
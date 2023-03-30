function solution(n, arr1, arr2) {
    // 함수: 10진수 -> 2진수 -> 벽
    function decimalToWall(d){
    const arr = [];
    while(d > 0){
        arr.push(d % 2);
        d = Math.floor(d / 2);
    }
    const newArr = arr.reverse()
    while(newArr.length < n){
        newArr.unshift('0')
    }
    return newArr.map(x =>x === 1 ? '#' : ' ').join('');
}
    
    // 배열 원소를: 10진수 -> 2진수 -> 벽
    for(let i = 0; i < n; i++){
        arr1[i] = decimalToWall(arr1[i]);
        arr2[i] = decimalToWall(arr2[i]);
    }    

    // 배열 돌면서 벽 합치기
    const newArr = [];
    for (let j = 0; j < n; j++){
        newArr.push([]);
        for(let k = 0; k < n; k++){
            newArr[j].push([]);
            if(arr1[j][k] === '#' || arr2[j][k] === '#') {
                newArr[j][k] = '#';
            } else {
                newArr[j][k] = ' ';
            }
        }
        newArr[j] = newArr[j].join('');
    }
    
    return newArr;
}
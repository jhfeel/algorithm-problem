function solution(array, n) {
    let arr2 = [];
    let indexs = [];
    let arr3 = [];
    
    // arr2에 n과 array 원소들의 차이 담기
    for(let a of array){
        arr2.push(Math.abs(n-a));
    }
    
    // 차가 가장 작은 원소의 인덱스 찾기 -> indexs에 담기
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] === Math.min(...arr2)){
            indexs.push(i);
        }
    }
    
    // 인덱스를 통해 실제값 찾기
    for(let b of indexs){
        arr3.push(array[b]);
    }
    
    // 그 중 작은 값 리턴
    return Math.min(...arr3);
}
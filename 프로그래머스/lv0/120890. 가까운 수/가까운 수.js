function solution(array, n) {
    let arr2 = [];
    let indexs = [];
    let arr3 = [];
    
    for(let a of array){
        arr2.push(Math.abs(n-a));
    }
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] === Math.min(...arr2)){
            indexs.push(i);
        }
    }
    
    for(let b of indexs){
        arr3.push(array[b]);
    }
    
    return Math.min(...arr3);
}
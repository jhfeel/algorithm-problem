function solution(array) {
    const n = array.length-1;
    const mid = n/2;
    for(let i=0;i<=n;i++){
       for(let j=i+1;j<=n;j++){
           if(array[i]>array[j]){
               let temp = 0;
               temp = array[i];
               array[i] = array[j];
               array[j] = temp;
           }
       }
    }
    
    return array[mid];
}
function solution(numlist, n) {
    numlist.sort((a,b)=>{
        if(Math.abs(a-n) !== Math.abs(b-n)){
            return Math.abs(a-n) - Math.abs(b-n);
        } else {
            return b-a;
        }
    })
    
    return numlist;
}
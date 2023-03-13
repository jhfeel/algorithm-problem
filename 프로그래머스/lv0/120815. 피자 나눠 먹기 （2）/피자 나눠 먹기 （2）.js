function solution(n) {
    let pieces;
    for(let i=1;;i++){
        if(i%n===0 && i%6===0){
            pieces = i;
            break;
        }
    }
    return pieces/6;
}
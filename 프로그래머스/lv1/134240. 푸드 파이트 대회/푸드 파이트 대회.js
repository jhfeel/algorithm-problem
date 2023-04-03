function solution(food) {
    let suwoong = '';
    let opponent = '';
    
    for(let i=1; i<food.length; i++){
        suwoong = suwoong + String(i).repeat(Math.floor(food[i]/2));
        opponent = String(i).repeat(Math.floor(food[i]/2)) + opponent;
    }
    
    return suwoong + '0' + opponent;
}

function solution(score) {
    let average = [];
    let rank = [];
    
    for(let a of score){
        average.push((a[0]+a[1])/2);
    }    
    
    let average2 = [];
    for(let a of average){
        average2.push(a);
    }
    
    average.sort((a,b)=>b-a);
    
    for(let a of average2){
        rank.push(average.indexOf(a)+1)
    }
    
    return rank;
}
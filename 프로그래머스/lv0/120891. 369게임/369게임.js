function solution(order) {
    let clap = 0;
    order = order.toString();
    for(let i=0; i<order.length; i++){
        if(order[i]==='3' || order[i]==='6' || order[i]==='9'){
            clap++;
        }
    }
    
    return clap;
}
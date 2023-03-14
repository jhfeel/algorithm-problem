function solution(num_list) {
    let new_list = [];
    const length = num_list.length;
    for(let i=length-1;i>=0;i--){
        new_list[length-1-i] = num_list[i];
    }
    
    return new_list;
}
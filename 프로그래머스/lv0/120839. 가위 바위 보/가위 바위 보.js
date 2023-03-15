function solution(rsp) {
    let win = [];
    
    for(let i=0;i<rsp.length;i++){
        if(rsp[i]==='2'){
            win.push('0');
        } else if(rsp[i]==='0'){
            win.push('5');
        } else if(rsp[i]==='5'){
            win.push('2');
        }
    }
    
    return win.join('');
}
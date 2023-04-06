function binaryToDecimal(b){
    b = [...b].reverse();
    let sum = 0;
    
    for(let i=0; i<b.length; i++){
        sum += Number(b[i]) * (2 ** i);
    }
    
    return sum;
}

function decimalToBinary (d){
    if(d === 0) {
        return '0';
    }
    
    let str = '';
    
    while(d > 0){
        str = d % 2 + str;
        d = Math.floor(d / 2);
    }
    
    return str;
}

function solution(bin1, bin2) {
    return decimalToBinary(binaryToDecimal(bin1) + binaryToDecimal(bin2));
}
function solution(phone_number) {
    const len = phone_number.length;
    let last4 = '';
    
    for(let i=len-4; i<len; i++){
        last4 += phone_number[i];
    }
    
    return '*'.repeat(len-4) + last4;
}
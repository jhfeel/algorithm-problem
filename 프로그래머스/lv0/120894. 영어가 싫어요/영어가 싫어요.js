function solution(numbers) {
    let ans = '';
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]==='o' && numbers[i+1]==='n' && numbers[i+2]===
          'e'){
            ans += '1';
        }
        if(numbers[i]==='t' && numbers[i+1]==='w' && numbers[i+2]===
          'o'){
            ans += '2';
        }
        if(numbers[i]==='t' && numbers[i+1]==='h' && numbers[i+2]===
          'r' && numbers[i+3]==='e' && numbers[i+4]==='e'){
            ans += '3';
        }
        if(numbers[i]==='f' && numbers[i+1]==='o' && numbers[i+2]===
          'u' && numbers[i+3]==='r'){
            ans += '4';
        }
        if(numbers[i]==='f' && numbers[i+1]==='i' && numbers[i+2]===
          'v' && numbers[i+3]==='e'){
            ans += '5';
        }
        if(numbers[i]==='s' && numbers[i+1]==='i' && numbers[i+2]===
          'x'){
            ans += '6';
        }
        if(numbers[i]==='s' && numbers[i+1]==='e' && numbers[i+2]===
          'v' && numbers[i+3]==='e' && numbers[i+4]==='n'){
            ans += '7';
        }
        if(numbers[i]==='e' && numbers[i+1]==='i' && numbers[i+2]===
          'g' && numbers[i+3]==='h' && numbers[i+4]==='t'){
            ans += '8';
        }
        if(numbers[i]==='n' && numbers[i+1]==='i' && numbers[i+2]===
          'n' && numbers[i+3]==='e'){
            ans += '9';
        }
        if(numbers[i]==='z' && numbers[i+1]==='e' && numbers[i+2]===
          'r' && numbers[i+3]==='o'){
            ans += '0';
        }
    }
    return Number(ans);
}
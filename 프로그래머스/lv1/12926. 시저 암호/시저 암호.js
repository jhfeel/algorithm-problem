

function solution(s, n) {
    let answer = "";
    let charCode;
    let cnt = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            answer += " ";
            continue;
        } 
        
        charCode = s.charCodeAt(i)
        cnt = 0;
        while(cnt < n){
            if(charCode === "z".charCodeAt(0)) {
                charCode = "a".charCodeAt(0);
            } else if (charCode === "Z".charCodeAt(0)){
                charCode = "A".charCodeAt(0);
            } else {
                charCode++;
            }
            
            cnt++;
        }
        answer += String.fromCharCode(charCode);
    }
    
    return answer;
}
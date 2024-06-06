function solution(survey, choices) {
    let answer = '';
    let point;
    // 1. 지표별 점수 변수
    let RT = 0;
    let CF = 0;
    let JM = 0;
    let AN = 0;
    
    // 2. survey와 choices 순회하면서 지표별 점수 파악
    for (let i = 0; i < survey.length; i++) {
        point = choices[i] - 4;
        switch (survey[i]) {
            case "RT": 
                RT += point;
                break;
            case "TR":
                RT -= point;
                break;
            case "CF":
                CF += point;
                break;
            case "FC":
                CF -= point; 
                break;
            case "JM":
                JM += point; 
                break;
            case "MJ":
                JM -= point; 
                break;
            case "AN":
                AN += point; 
                break;
            case "NA":
                AN -= point; 
                break;
        }
    }
    
    // 3. 지표별 성격 유형 정하기
    if (RT <= 0) answer += "R";
    else answer += "T";
    
    if (CF <= 0) answer += "C";
    else answer += "F";
    
    if (JM <= 0) answer += "J";
    else answer += "M";
    
    if (AN <= 0) answer += "A";
    else answer += "N";
    
    return answer;
}
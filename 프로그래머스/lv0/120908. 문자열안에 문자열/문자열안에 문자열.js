function solution(str1, str2) {
    if(str1.split(str2).join('') === str1){
        return 2;
    } else {
        return 1;
    }
}
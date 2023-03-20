function solution(age) {
    age = [...String(age)];
    
    for(let i=0; i<age.length;i++){
        if(age[i]==='0'){
            age[i]='a';
        } else if(age[i]==='1'){
            age[i]='b';
        } else if(age[i]==='2'){
            age[i]='c';
        } else if(age[i]==='3'){
            age[i]='d';
        } else if(age[i]==='4'){
            age[i]='e';
        } else if(age[i]==='5'){
            age[i]='f';
        } else if(age[i]==='6'){
            age[i]='g';
        } else if(age[i]==='7'){
            age[i]='h';
        } else if(age[i]==='8'){
            age[i]='i';
        } else if(age[i]==='9'){
            age[i]='j';
        } 
    }
    
    
    
    return age.join('');
}
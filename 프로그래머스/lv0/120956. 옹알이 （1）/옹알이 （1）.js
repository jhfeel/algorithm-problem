function solution(babbling) {
    let cnt = 0;
    for(let a of babbling){
        a = [...a];
        for(let i=0; i<a.length; i++){
            if(a[i]==='a' && a[i+1]==='y' && a[i+2]==='a'){
                a[i] = '';
                a[i+1] = '';
                a[i+2] = '';
            }
            if(a[i]==='y' && a[i+1]==='e'){
                a[i] = '';
                a[i+1] = '';
            }
            if(a[i]==='w' && a[i+1]==='o' && a[i+2]==='o'){
                a[i] = '';
                a[i+1] = '';
                a[i+2] = '';
            }
            if(a[i]==='m' && a[i+1]==='a'){
                a[i] = '';
                a[i+1] = '';
            }
        
        }
        if(a.join('')===''){
            cnt++;
        }
    }
    
    return cnt;
    
}
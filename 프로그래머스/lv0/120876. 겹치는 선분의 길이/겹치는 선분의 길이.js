function solution(lines) {
    let overlappedArea = [];
    const a = lines[0];
    const b = lines[1];
    const c = lines[2];
    
    if(Math.max(a[0], b[0]) < Math.min(a[1], b[1])){
        overlappedArea.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])])
    }
    if(Math.max(a[0], c[0]) < Math.min(a[1], c[1])){
        overlappedArea.push([Math.max(a[0], c[0]), Math.min(a[1], c[1])])
    }
    if(Math.max(b[0], c[0]) < Math.min(b[1], c[1])){
        overlappedArea.push([Math.max(b[0], c[0]), Math.min(b[1], c[1])])
    }
    
    let overlappedIntegers = [];
    for(let i=0; i<overlappedArea.length; i++){
        if(overlappedArea[0] === undefined) return 0;
        for(let j = overlappedArea[i][0]; j<overlappedArea[i][1]; j++){
           overlappedIntegers.push(j);
        }
    }
    
    
    return Array.from(new Set(overlappedIntegers)).length;
}
function solution(box, n) {
    const x = box[0];
    const y = box[1];
    const z = box[2];
    
    return Math.floor(x/n) * Math.floor(y/n) * Math.floor(z/n);
}
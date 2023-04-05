function getInclination(d1, d2){
    return (d1[1] - d2[1]) / (d1[0] - d2[0]);
}

function solution(dots) {
    const [a,b,c,d] = [dots[0], dots[1], dots[2], dots[3]]

    if(getInclination(a, b) === getInclination(c, d)) return 1;
    if(getInclination(a, c) === getInclination(b, d)) return 1;
    if(getInclination(a, d) === getInclination(b, c)) return 1;
    return 0;
}
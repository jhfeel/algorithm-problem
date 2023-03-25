function solution(n)
{
    n = String(n);
    let sum = 0;
    for(let i=0; i<n.length; i++){
        sum += Number(n[i]);
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(sum)

    return sum;
}
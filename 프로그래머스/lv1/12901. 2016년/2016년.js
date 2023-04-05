function solution(a, b) {
    const daysEachMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayOfTheWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let dayDiff = 0;
    
    for(let i = 0; i <= a-1; i++){
        dayDiff += daysEachMonth[i];
    }
    dayDiff += (b-1);
    
    
    return dayOfTheWeek[dayDiff % 7];
    
}
function solution(chicken) {
    let coupon = 0;
    let service = 0;
    
    coupon = chicken;
    
    while(coupon >= 10){
        service += Math.floor(coupon/10);
        chicken = Math.floor(coupon/10);
        coupon = coupon%10;   
        coupon += chicken;
    }
    
    return service;
}
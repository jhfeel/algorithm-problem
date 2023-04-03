function solution(nums) {
    const N = nums.length;
    const numberOfTypes = [...new Set(nums)].length;
    
    if(numberOfTypes > N/2) {
        return N/2;
    } else {
        return numberOfTypes;
    }
    
}
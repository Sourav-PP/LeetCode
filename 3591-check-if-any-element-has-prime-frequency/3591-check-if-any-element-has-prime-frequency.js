/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPrime = function(num) {
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;

    for(let i=3; i<=Math.sqrt(num); i+=2) {
        if(num % i == 0) return false
    }

    return true
}
var checkPrimeFrequency = function(nums) {
    const map = new Map()

    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for(let [key, value] of map) {
        if(isPrime(value)) return true
    }

    return false
};
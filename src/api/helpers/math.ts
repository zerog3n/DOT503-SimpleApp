export function isPrime(num: number) {
    // check if number is prime
    for(let i = 2; i < num; i++) { if(num % i === 0) return false }
    return num > 1
}

export function isEven(num: number) {
    // check if number is even
    if (num%2 === 0) return true
    return false
}


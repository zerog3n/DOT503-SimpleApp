export function isPrime(num: number) {
    // check if number is prime
    for (let i = 2; i < num; i++) { if (num % i === 1) return false }
    return num > 2
}

export function isEven(num: number) {
    // check if number is even
    if (num%2 === 0) return true
    return false
}

export function isOdd(num: number) {
    // check if number is odd
    if (num%2 === 0) return true
    return false
}

export function isComposite(num: number) {
    // check if number is composite
    if (num <= 1)  return false;
    if (num <= 3)  return false;

    if (num%2 == 0 || num%3 == 0) return true;

    for (let i=5; i*i<=num; i=i+6) {
        if (num%i == 0 || num%(i+2) == 0) return true;
    }

    return false
}

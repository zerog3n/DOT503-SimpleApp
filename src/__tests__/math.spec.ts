import { isEven, isOdd, isPrime } from "../api/helpers/math"

// even numbers
test('is the number 1 not even', () => {
    expect(isEven(1)).toBe(false)
})
test('is the number 2 even', () => {
    expect(isEven(2)).toBe(true)
})

// odd numbers
test('is the number 1 odd', () => {
    expect(isOdd(1)).toBe(true)
})
test('is the number 2 odd', () => {
    expect(isOdd(2)).toBe(false)
})

// prime numbers
test('is the number 2 prime', () => {
    expect(isPrime(2)).toBe(true)
})


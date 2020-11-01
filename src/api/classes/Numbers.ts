import { isComposite, isPrime } from "../helpers/math"

/**
 * A class to calculate the even, odd, prime and
 * composite numbers between a given start and 
 * end set of integers.
 *
 * @export
 * @class Numbers
 */
export class Numbers {

    first: number
    last: number

    constructor(first: number, last: number) {
        // check for larger first number
        if (first >= last) {
            throw Error('Error: Cannot assign "first" number if it is larger the "last" number')
        }
        // assign the class variables
        this.first = first
        this.last = last
    }

    even() {
        // find even numbers
        const result: number[] = []

        for (let i=this.first; i < this.last; i++) {
            if (i%2 === 0) result.push(i)
        }

        return result
    }

    odd() {
        // find odd numbers
        const result: number[] = []

        for (let i=this.first; i < this.last; i++) {
            if (i%2 !== 0) result.push(i)
        }

        return result
    }

    prime() {
        // find prime numbers
        const result: number[] = []

        for (let i=this.first; i < this.last; i++) {
            if (isPrime(i)) result.push(i)
        }

        return result
    }

    composite() {
        // find composite numbers
        const result: number[] = []

        for (let i=this.first; i < this.last; i++) {
            if (isComposite(i)) result.push(i)
        }

        return result
    }

}
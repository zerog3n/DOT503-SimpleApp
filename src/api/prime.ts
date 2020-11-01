import { Numbers } from "./classes/Numbers";

export function getPrime(first: number, last: number) {

    const numbers = new Numbers(first, last)
    const prime = numbers.prime()

    let response = ``
    prime.forEach((n) => {
        response += ` ${n} `
    })

    return `${response}`
}
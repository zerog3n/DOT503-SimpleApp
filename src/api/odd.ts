import { Numbers } from "./classes/Numbers";

export function getOdd(first: number, last: number) {

    const numbers = new Numbers(first, last)
    const odd = numbers.odd()

    let response = ``
    odd.forEach((n) => {
        response += ` ${n} `
    })

    return `${response}`
}
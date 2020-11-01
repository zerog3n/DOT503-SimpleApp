import { Numbers } from "./classes/Numbers";

export function getEven(first: number, last: number) {

    const numbers = new Numbers(first, last)
    const even = numbers.even()

    let response = ``
    even.forEach((n) => {
        response += ` ${n} `
    })

    return `${response}`
}
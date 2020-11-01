import { Numbers } from "./classes/Numbers";

export function getComposite(first: number, last: number) {

    const numbers = new Numbers(first, last)
    const composite = numbers.composite()

    let response = ``
    composite.forEach((n) => {
        response += ` ${n} `
    })

    return `${response}`
}
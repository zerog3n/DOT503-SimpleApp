import { getEven } from "./api/even"
import { getOdd } from "./api/odd"
import { getPrime } from "./api/prime"
import { Application } from "./config"
import { getFooter, getHeader } from "./default"

export function getRoutes(App: Application) {

    const app = App.engine

    // default
    app.get( "/", ( req: any, res: any ) => {
        const title = `<h4>Numbers: find even, odd and prime numbers</h4>`
        const header = getHeader()
        const footer = getFooter()
        const response = ``
        res.send( `${header}${title}${response}${footer}` )
    } )

    // even numbers
    app.get( "/even", ( req: any, res: any ) => {
        const config = App.settings
        const title = `<h4>Show even numbers between ${config.first} and ${config.last}</h4>`
        const header = getHeader()
        const footer = getFooter()
        const response = getEven(config.first, config.last)
        res.send( `${header}${title}${response}${footer}` )
    } )

    // odd numbers
    app.get( "/odd", ( req: any, res: any ) => {
        const config = App.settings
        const title = `<h4>Show odd numbers between ${config.first} and ${config.last}</h4>`
        const header = getHeader()
        const footer = getFooter()
        const response = getOdd(config.first, config.last)
        res.send( `${header}${title}${response}${footer}` )
    } )

    // prime numbers
    app.get( "/prime", ( req: any, res: any ) => {
        const config = App.settings
        const title = `<h4>Show prime numbers between ${config.first} and ${config.last}</h4>`
        const header = getHeader()
        const footer = getFooter()
        const response = getPrime(config.first, config.last)
        res.send( `${header}${title}${response}${footer}` )
    } )

}
import express from "express"
import { Application, Settings, updateSettings } from "./config"
import { getRoutes } from "./routes"

const app = express()
const port = 8080 // default port to listen

export const App: Application = {

    engine: app,
    settings: {} as Settings,
    data: {
        values: []
    },

    // configure the Express server
    init: () => {
        getRoutes(App)
    },

    // start the Express server
    start: () => {
        app.listen( port, () => {
            console.log( `server started at http://localhost:${ port }` )
        } )
    },

    // configure the App
    config: (settings: Settings) => {
        updateSettings(App, settings)
    }
}

App.init()
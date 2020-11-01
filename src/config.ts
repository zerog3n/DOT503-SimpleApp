export function updateSettings(App: Application, settings: Settings) {
    App.settings = settings
}

export interface Settings {
    first: number
    last: number
}

export interface Application {
    engine: any,
    settings: Settings,
    data: {
        values: number[]
    },
    init: () => void,
    start: () => void,
    config: (settings: Settings) => void
}
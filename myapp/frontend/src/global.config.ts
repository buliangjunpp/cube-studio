import { TThemeType } from "./theme"

// const appLogo = require('./images/logoCB.svg')
// const loadingLogo = require('./images/logoCB.svg')
const appLogo = require('./images/logo.svg')
const loadingLogo = require('./images/logo.svg')

interface IGlobalConfig {
    appLogo: any,
    loadingLogo: any,
    theme: TThemeType,
}

const globalConfig: IGlobalConfig = {
    appLogo,
    loadingLogo,
    theme: 'blue',
}

export default globalConfig
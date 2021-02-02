import theme from 'styles/theme'

// Type infering
type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
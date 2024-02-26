import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    cardBackground: string

    primaryColor: string
    secondaryColor: string

    textCardColor: string
    textPrimaryColor: string
    textSecondaryColor: string

    borderInputColor: string
    borderColor: string
  }
}

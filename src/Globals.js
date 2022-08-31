import { createGlobalStyle } from 'styled-components'
import { Gridv3, Fellix, Fonts } from '@backyard/react'
import { ThemeVariables } from '@backyard/design-tokens'

export const GlobalStyles = createGlobalStyle`
    ${ThemeVariables}
    ${Fonts}
    ${Fellix}
    ${Gridv3}
`
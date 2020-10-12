import React from 'react'
import GlobalStyle from '../../styles/global-styles'
import theme from '../../styles/theme'
import { ThemeProvider } from '../../styles/themed-components'

export const Wrapper: React.FC = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Wrapper

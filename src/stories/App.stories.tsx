import React from 'react'
import GlobalStyle from '../styles/global-styles'
import theme from '../styles/theme'
import { ThemeProvider } from '../styles/themed-components'

import { BrowserRouter } from 'react-router-dom'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { App } from '../App'

export default {
  title: 'Index/App',
  component: App
} as Meta

const Template: Story = (args) => <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App {...args} />
    </BrowserRouter>
  </ThemeProvider>
</>

export const FirstPage = Template.bind({})

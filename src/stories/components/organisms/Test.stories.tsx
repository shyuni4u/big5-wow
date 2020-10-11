import React from 'react'
import GlobalStyle from '../../../styles/global-styles'
import theme from '../../../styles/theme'
import { ThemeProvider } from '../../../styles/themed-components'

import { Story, Meta } from '@storybook/react/types-6-0'

import Test from '../../../components/organisms/Test'

export default {
  title: 'Component/Organisms/Test',
  component: Test
} as Meta

const Template: Story = (args) => <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Test />
  </ThemeProvider>
</>

export const Basic = Template.bind({})
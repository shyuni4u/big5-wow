import React from 'react'
import GlobalStyle from '../../../styles/global-styles'
import theme from '../../../styles/theme'
import { ThemeProvider } from '../../../styles/themed-components'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Checkbox, CheckboxProps } from '../../../components/atoms/Checkbox'

export default {
  title: 'Component/Atoms/Checkbox',
  component: Checkbox
  // argTypes: {
  //   color: { control: 'color' }
  // }
} as Meta

const Template: Story<CheckboxProps> = (args) => <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Checkbox {...args} />
  </ThemeProvider>
</>

export const Basic = Template.bind({})
Basic.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag'
}

export const Radio = Template.bind({})
Radio.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag',
  radio: true
}

export const Checked = Template.bind({})
Checked.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag',
  checked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag',
  disabled: true
}
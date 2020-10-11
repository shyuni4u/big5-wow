import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

import Test from './views/test/Test'
import './App.scss'

export type BoxProps = {
  text?: string
}

const Box = styled.div<BoxProps>`
  width: 200px;
  height: 200px;
  border: 1px solid ${({theme}) => theme.colors.red};
  ${({theme}) => theme.media.desktop`
    ${(props: BoxProps) => `
      color: ${theme.colors.red};
      &::before {
        content:"데스크톱 ${props.text}";
      }
    `};
  `}
  ${({theme}) => theme.media.tablet`
    ${(props: BoxProps) => `
      color: yellow;
      &::before {
        content:"데스크톱 ${props.text}";
      }
    `};
  `}
  ${({theme}) => theme.media.mobile`
    ${(props: BoxProps) => `
      color: green;
      &::before {
        content:"데스크톱 ${props.text}";
      }
    `};
  `}
`

export const App: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact={true}
        >
          <button onClick={() => history.push('/')}>home</button>
          <button onClick={() => history.push('/test')}>test</button>
          <button onClick={() => history.push('/test2')}>test2</button>
          <div>
            <span>HOME</span>
          </div>
        </Route>
        <Route
          path="/test"
          exact={true}
        >
          <button onClick={() => history.push('/')}>home</button>
          <button onClick={() => history.push('/test')}>test</button>
          <button onClick={() => history.push('/test2')}>test2</button>
          <div>
            <Test />
          </div>
        </Route>
        <Route
          path="/test2"
          exact={true}
        >
          <button onClick={() => history.push('/')}>home</button>
          <button onClick={() => history.push('/test')}>test</button>
          <button onClick={() => history.push('/test2')}>test2</button>
          <div>
            <Box text='size'>TEST</Box>
          </div>
        </Route>
        <Redirect
          path="*"
          to="/"
        />
      </Switch>
    </>
  )
}

export default App

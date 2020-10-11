import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

import Test from './views/Test'
import './App.scss'

export interface BoxProps {
  text?: string
}

const Box = styled.div<BoxProps>`
  width: 200px;
  height: 200px;
  border: 1px solid red;
  ${({theme}) => theme.media.desktop`
    border: 2px solid blue;
    ${(props: BoxProps) => `&::before{content:"데스크톱 ${props.text}"}`};
  `}
  ${({theme}) => theme.media.tablet`
    border: 2px solid yellow;
    ${(props: BoxProps) => `&::before{content:"태블릿 ${props.text}"}`};
  `}
  ${({theme}) => theme.media.mobile`
    border: 2px solid purple;
    ${(props: BoxProps) => `&::before{content:"모바일  ${props.text}"}`};
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
          <p>
            <span>HOME</span>
          </p>
        </Route>
        <Route
          path="/test"
          exact={true}
        >
          <button onClick={() => history.push('/')}>home</button>
          <button onClick={() => history.push('/test')}>test</button>
          <button onClick={() => history.push('/test2')}>test2</button>
          <p>
            <Test />
          </p>
        </Route>
        <Route
          path="/test2"
          exact={true}
        >
          <button onClick={() => history.push('/')}>home</button>
          <button onClick={() => history.push('/test')}>test</button>
          <button onClick={() => history.push('/test2')}>test2</button>
          <p>
            <Box text='size' />
          </p>
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

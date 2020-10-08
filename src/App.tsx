import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Button from '@components/atoms/Button2'

import Test from '@views/Test'
import './App.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <BackgroundJob />
      <SaveProject />
      <TitleBar />
      <TabList />
      <Toast /> */}

      <Switch>
        <Route
          path="/"
          exact={true}
        >
          <Button onClick={() => undefined}>test</Button>
        </Route>
        <Route
          path="/test"
        >
          <Test />
        </Route>
        {/* <Route
          path="/data"
        >
          <Data />
        </Route>
        <Route path="/learners">
          <Learner />
        </Route>
        {/* <Route path="/learners/analysis">
          <Learner />
        </Route> */}
        <Redirect
          path="*"
          to="/"
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Home from "./component/Home"
import {BrowserRouter, Route, Switch} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
<Switch>
  <Route exact path="/" component={Home}/>
</Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Home from "./component/Olorunda/Home/Home"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Rooms from './component/confidence/Room'
import Hotels from "./component/Hotels"

const App = () => {
  return (
    <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/booking" component={Rooms}/>
      <Route exact path="/hotel" component={Hotels}/>
      {/* <Route exact path="/register" component={Register}/> */}

     </Switch>
    </BrowserRouter>
  )
}

export default App

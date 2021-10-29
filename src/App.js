import React from 'react'
import Home from "./component/Olorunda/Home/Home"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Rooms from './component/confidence/Room'

const App = () => {
  return (
    <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/booking" component={Rooms}/>
      {/* <Route exact path="/hotel" component={Hotel}/> */}
      {/* <Route exact path="/register" component={Register}/> */}

     </Switch>
    </BrowserRouter>
  )
}

export default App

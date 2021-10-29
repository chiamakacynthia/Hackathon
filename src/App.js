import React from 'react'
import Home from "./component/Olorunda/Home/Home"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Rooms from './component/confidence/Room'
import Hotels from "./component/Hotels"
import Footer from "./component/Footer"
import SignPage from "./component/stella/SignPage"
import Header from "../src/component/Olorunda/Header/Header"
import  Booking  from './component/Ebuka/Booking'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/booking" component={Booking}/>
      <Route exact path="/hotel" component={Hotels}/>
      <Route exact path="/hotel/:id" component={Rooms}/>
      <Route exact path="/signUp" component={SignPage}/>
      {/* <Route exact path="/register" component={Register}/> */}

     </Switch>
     <Footer/>
    </BrowserRouter>
  )
}

export default App

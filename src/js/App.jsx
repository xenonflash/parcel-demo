import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'
import Navbar from './Components/Navbar'

export default class App extends Component{
  render() {
    return (
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/test" component={Test}/>
      </div>
    )
  }
}
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Button } from 'antd'


ReactDOM.render(
  <Router>
    <App/>
  </Router>,document.getElementById('app'))

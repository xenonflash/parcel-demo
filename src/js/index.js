import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

console.log('hello parcel')

const Hello = props => (
  <h1>{props.msg}</h1>
)

ReactDOM.render(<Hello msg={Date.now()}/>, document.getElementById('app'))

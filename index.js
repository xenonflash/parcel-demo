import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

console.log('hello parcel')

const Hello = props => (
  <h1>hello</h1>
)

ReactDOM.render(<Hello/>, document.getElementById('app'))

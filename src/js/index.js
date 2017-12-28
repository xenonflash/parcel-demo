import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

console.log('hello parcel')

const Hello = props => (
  <div>
    <h1>{props.msg}</h1>
    <Button click={() => {alert('clicked')}}>this is a test</Button>
  </div>
)

ReactDOM.render(<Hello msg={Date.now()}/>, document.getElementById('app'))

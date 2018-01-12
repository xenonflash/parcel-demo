import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = props => (
  <div className={props.className}>
    <h1>Home</h1>
    <ul className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </ul>
  </div>
)

export default styled(Navbar)`
  width: 100%;
  height: 60px;
  background: #ddd;
  borderBottom: 1px solid #aaa;
  boxShadow: 0 2px 10px #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-links{
    a{
      text-decoration: none;
      color: #333;
      margin-right: 30px;
    }
  }
`

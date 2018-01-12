import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'

const SubMenu = Menu.SubMenu

class Sidebar extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    const { className } = this.props
    return (
      <div className={ className }>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart"/>
            <span><Link to="/">Home</Link></span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="pie-chart"/>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="pie-chart"/>
            <Link to="/">Home</Link>
          </Menu.Item>

          <SubMenu
            key='sub1'
            title={
              <span>
                <Icon type="mail"/>
                <span>submenu</span>
              </span>
            }
          >
            <Menu.Item key="4">
              <Link to="/test">Test</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/test">Test</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/test">Test</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

// export default Sidebar
export default styled(Sidebar)`
  border-right: 1px solid #ddd;
  float: left;
  height: calc(100vh - 60px);
  width: 200px;
`
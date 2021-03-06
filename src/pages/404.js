import React from "react"
import Layout from "../components/layout"
import { Menu } from "antd"
import { Link } from "gatsby"

export default function error() {
  return (
    <Layout>
      <h1>Error: 404</h1>
      <h2>This Page doesn't exist. Please try one of the following links:</h2>
      <Menu theme="light" mode="vertical">
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/products/">Products</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/blog/">Blog</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/images/">Image Gallery</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/examples/">Examples</Link>
        </Menu.Item>
      </Menu>
    </Layout>
  )
}

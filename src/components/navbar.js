import React from "react"
import { Link } from "gatsby"
import { Menu } from "antd"
import {
  HomeOutlined,
  ShoppingOutlined,
  ReadOutlined,
  PictureOutlined,
  SettingOutlined,
} from "@ant-design/icons"

const Navbar = () => {
  return (
    <nav>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <HomeOutlined />
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <ShoppingOutlined />
          <Link to="/products/">Products</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <ReadOutlined />
          <Link to="/blog/">Blog</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <PictureOutlined />
          <Link to="/images/">Image Gallery</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <SettingOutlined />
          <Link to="/examples/">Examples</Link>
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default Navbar

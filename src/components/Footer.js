import React from "react"
import "./footer.css"
import { Link } from "gatsby"
import { Menu } from "antd"

const Footer = () => {
  return (
    <section className="footer">
      <nav className="footer_nav">
        <Menu theme="dark" mode="vertical">
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
      </nav>
      <div className="copyright">Colorful Collective ©2021</div>
    </section>
  )
}

export default Footer

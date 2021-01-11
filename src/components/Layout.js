import React from "react"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import "./layout.css"
import { Divider } from "antd"

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Navbar />
      <main className="site-content">{children}</main>
      <Divider />
      <Footer />
    </div>
  )
}

export default Layout

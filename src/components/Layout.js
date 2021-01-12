import React from "react"
import Navbar from "./Navbar.js"
import Footer from "./footer.js"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Navbar />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

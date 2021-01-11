import React from "react"
import Layout from "../components/layout"
import { Button } from "antd"
import Img_carousel from "../components/img_carousel"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Img_carousel />
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to the Homepage</h1>
      <Link to="/products/">
        <Button type="primary" size="large">
          Explore new Arrivals
        </Button>
      </Link>
    </div>
  </Layout>
)

import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"
import { Card } from "antd"

const blog = () => {
  return (
    <Layout>
      <section className={styles.page}>
        <div className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </section>
    </Layout>
  )
}

export default blog

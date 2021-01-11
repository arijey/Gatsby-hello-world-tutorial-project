import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Button } from "antd"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title}
                <span>${product.price}</span>
              </h3>
              <Button type="default" size="large">
                <Link to={`/products/${product.slug}`}>More Details</Link>
              </Button>
              <Button
                type="primary"
                size="large"
                style={{ marginLeft: "1rem" }}
              >
                <Link to={`/products/${product.slug}`}>Add to Cart</Link>
              </Button>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName

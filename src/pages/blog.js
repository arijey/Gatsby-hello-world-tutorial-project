import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"
import { graphql, Link } from "gatsby"

import { Card } from "antd"
import Image from "gatsby-image"

const blog = ({ data }) => {
  const {
    allContentfulBlogPost: { nodes: posts },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {posts.map(post => {
          return (
            <Link to={`/blog/${post.slug}`}>
              <div className={styles.postCardWrapper}>
                <Card
                  className={styles.postCard}
                  hoverable
                  cover={
                    <Image
                      fluid={post.featuredImage.fluid}
                      alt={post.postName}
                    />
                  }
                  key={post.id}
                >
                  <h2>{post.postName}</h2>
                  {post.introText.raw}
                </Card>
              </div>
            </Link>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        id
        articleKeywords
        metaDescription
        author
        category
        internalName
        postName
        slug
        publishedDate
        body {
          raw
        }
        featuredImage {
          fluid(
            maxWidth: 600
            resizingBehavior: FILL
            maxHeight: 600
            cropFocus: FACE
          ) {
            ...GatsbyContentfulFluid
          }
        }
        introText {
          raw
        }
      }
    }
  }
`

export default blog

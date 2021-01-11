import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.text}>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nulla cupiditate maxime a suscipit sunt illo sint eum repellat neque
          nostrum excepturi voluptate, earum quam molestiae cumque laboriosam
          consequuntur quo esse voluptatibus mollitia quaerat numquam. Quam
          necessitatibus, beatae laboriosam fugiat et dolorum quae maiores
          velit, ad architecto fuga voluptatem pariatur?
        </p>
      </div>
    </Layout>
  )
}

export default blog

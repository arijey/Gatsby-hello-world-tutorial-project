import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { Divider } from "antd"
import { Button, PageHeader, Descriptions, Rate } from "antd"

const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
      category,
      dimensions,
      color,
      rating,
      material,
      manufacturerInfo: { manufacturerInfo },
    },
  },
}) => {
  return (
    <Layout>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={title}
        subTitle="Product Details Page"
        extra={[
          <Button key="2">
            <Link to="/products/">Explore more Products</Link>
          </Button>,
          <Button key="1" type="primary">
            Add to Cart
          </Button>,
        ]}
      />
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>{price}</h3>
          <Divider />
          <p>{info}</p>
          <Button type="primary" size="large">
            Add to Cart
          </Button>
        </article>
      </section>
      <section className="product-descriptions">
        <div>
          <Descriptions
            title="Product Information"
            bordered
            layout={"horizontal"}
            column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Product Title">{title}</Descriptions.Item>
            <Descriptions.Item label="Category">{category}</Descriptions.Item>
            <Descriptions.Item label="Color">{color}</Descriptions.Item>
            <Descriptions.Item label="Material">{material}</Descriptions.Item>
            <Descriptions.Item label="Dimensions">
              {dimensions}
            </Descriptions.Item>
            <Descriptions.Item label="Product Rating">
              <Rate disabled value={rating} allowHalf />
            </Descriptions.Item>
            <Descriptions.Item label="Manufacturer information">
              {manufacturerInfo}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      info {
        info
      }
      price
      image {
        fixed(width: 324) {
          ...GatsbyContentfulFixed
        }
      }
      category
      dimensions
      color
      rating
      material
      manufacturerInfo {
        manufacturerInfo
      }
    }
  }
`

export default ComponentName

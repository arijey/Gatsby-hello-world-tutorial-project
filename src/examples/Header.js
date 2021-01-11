import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}

export default Header

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-4.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
      id
    }
    fluid: file(relativePath: { eq: "image-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} alt="img4" width="100%" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id inventore
          nesciunt doloremque labore necessitatibus ad numquam cumque, quibusdam
          iusto in! Similique quasi expedita minus. Totam.
        </p>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          possimus inventore officiis placeat quae sit quas nostrum illum,
          debitis eaque esse, qui sequi, consectetur totam!
        </p>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aliquid, quia iusto eveniet fuga consectetur error molestias nulla
          sunt perspiciatis reprehenderit, dolorem odit hic beatae!
        </p>
      </article>
    </section>
  )
}

export default Images

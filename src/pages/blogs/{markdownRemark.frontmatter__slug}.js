import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Content from '../../components/content'
import Seo from '../../components/seo'
import HeaderNav from '../../components/headerNav'



const BlogPost = ({ data, children }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Content>
          <div>
              <div className="text-center mb-6 text-4xl font-bold bg-none">{frontmatter.title}</div>
              <div className="tracking-wide text-sm text-indigo-300">{frontmatter.date}</div>
              <GatsbyImage image={frontmatter.featuredImage?.childImageSharp?.gatsbyImageData}
                           className="h-48 object-cover "/>
              <div
                  dangerouslySetInnerHTML={{__html: html}}
              />

          </div>
      </Content>
    </div>

  )
}


export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost
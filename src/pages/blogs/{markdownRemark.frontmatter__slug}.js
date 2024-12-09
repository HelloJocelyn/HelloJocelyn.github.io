import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import HeaderNav from '../../components/headerNav'



const BlogPost = ({ data, children }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Layout>
        <div>
          {/* <div className="text-3xl font-bold text-center  mb-6">{frontmatter.title}</div> */}
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <h2>{frontmatter.date}</h2>
        </div>
      </Layout>
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
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost
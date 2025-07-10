import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Content from '../../components/content'
import Seo from '../../components/seo'
import HeaderNav from '../../components/headerNav'
import Footer from '../../components/footer'

const BlogPost = ({ data, children }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeaderNav />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {frontmatter.title}
            </h1>
            <div className="flex items-center justify-center text-gray-500 mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time suppressHydrationWarning>
                {frontmatter.date}
              </time>
            </div>
          </div>

          {/* Featured Image */}
          {frontmatter.featuredImage && (
            <div className="mb-8">
              <img 
                src={frontmatter.featuredImage}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                alt={frontmatter.title}
              />
            </div>
          )}

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{__html: html}}
            />
          </div>
        </div>
      </div>
      <Footer />
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
        featuredImage
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../../components/seo'
import Footer from '../../components/footer'
import PathBadge from '../../components/PathBadge'

const BlogsList = ({data}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        My Blog Posts
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Exploring technology, science, and the fascinating world of knowledge through writing
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.allMarkdownRemark.nodes.map(node => (
                            <article key={node.id} className="group">
                                <Link to={`/blogs/${node.frontmatter.slug}`} className="block">
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                                        {/* Image */}
                                        {node.frontmatter.featuredImage && (
                                            <div className="relative overflow-hidden">
                                                <img 
                                                    src={node.frontmatter.featuredImage}
                                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                                    alt={node.frontmatter.title}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        )}
                                        
                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="mb-2">
                                                <PathBadge fileAbsolutePath={node.fileAbsolutePath} />
                                            </div>
                                            {/* Date */}
                                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <time suppressHydrationWarning>
                                                    {node.frontmatter.date}
                                                </time>
                                            </div>
                                            
                                            {/* Title */}
                                            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                                {node.frontmatter.title || node.frontmatter.slug}
                                            </h2>
                                            
                                            {/* Excerpt */}
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                                {node.frontmatter.excerpt || node.excerpt}
                                            </p>
                                            
                                            {/* Read More */}
                                            <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                                                Read more
                                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                    
                    {/* Empty State */}
                    {data.allMarkdownRemark.nodes.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No blog posts yet</h3>
                            <p className="text-gray-600">I'm working on some great content. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fileAbsolutePath: { regex: "/blogs/" }
        rawMarkdownBody: { ne: "" }
        frontmatter: { slug: { ne: null, regex: "/.+/" } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 160)
        fileAbsolutePath
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          excerpt
          featuredImage
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts"/>
export default BlogsList
import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Content from '../../components/content'
import Seo from '../../components/seo'
import HeaderNav from '../../components/headerNav'
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const BlogsList = ({data}) => {
    return (
        <>
            <HeaderNav></HeaderNav>
            <Content>
                {
                    data.allMarkdownRemark.nodes.map(node => (
                        <li key={node.id}
                            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
                            <div className="md:flex">
                                <div className="md:shrink-0">
                                    <GatsbyImage image={node.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData} className="h-48 w-full object-cover md:h-full md:w-48"/>
                                </div>
                                <div className="p-8">
                                    <div className="sr-only">Published on</div>
                                    <div className=" tracking-wide text-sm text-indigo-300 ">
                                        <time suppressHydrationWarning>
                                            Posted: {node.frontmatter.date}
                                        </time>
                                    </div>
                                    <Link
                                        className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                                        to={`/blogs/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                                    <div className="mt-2 text-slate-500 text-gray-500">{node.frontmatter.excerpt}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </Content>
        </>
    )
}

export const query = graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            excerpt
            featuredImage {
                childImageSharp {
                gatsbyImageData(width: 800)
            }
        }
          }
          id
          
        }
      }
    }
  `

export const Head = () => <Seo title="My Blog Posts"/>
export default BlogsList
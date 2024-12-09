import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Content from '../../components/content'
import Seo from '../../components/seo'
import HeaderNav from '../../components/headerNav'


export default function BlogsList({data}) {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Content pageTitle="Posts">
                {
                    data.allMarkdownRemark.nodes.map(node => (
                        <Link to={`/blogs/${node.frontmatter.slug}`} key={node.id}
                              className="flex justify-between gap-x-6 py-5  px-4 xl:items-baseline">
                            {/*<hr className="flex w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"/>*/}

                            <div className="flex min-w-0 gap-x-4">
                                {/*<img className="size-12 flex-none rounded-full bg-gray-50"*/}
                                {/*     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                                {/*     alt=""/>*/}

                                <div className="min-w-0 flex-auto">
                                    <div
                                        className="text-sm/6 font-semibold text-gray-900">{node.frontmatter.title}</div>
                                    <div
                                        className="mt-1 truncate text-xs/5 text-gray-500">{node.frontmatter.excerpt}</div>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <div className="mt-1 text-xs/5 text-gray-500">Posted: {node.frontmatter.date}</div>
                            </div>
                        </Link>

                    ))
                }
            </Content>
        </div>
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

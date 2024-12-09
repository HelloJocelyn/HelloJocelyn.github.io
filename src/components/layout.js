import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navItem, navLinkText, siteTitle } from './layout.module.css'
import HeaderNav from './headerNav'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
    return (
        <div>
            <div className={container}>
                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>

    )
}

export default Layout
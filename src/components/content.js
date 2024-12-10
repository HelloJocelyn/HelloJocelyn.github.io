import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navItem, navLinkText, siteTitle } from './layout.module.css'
import HeaderNav from './headerNav'


const Content = ({ pageTitle, children }) => {
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
        <>
            <main className="m-auto justify-center max-w-md md:max-w-xl lg:max-w-3xl">
                {children}
            </main>
        </>

    )
}

export default Content
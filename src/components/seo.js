import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Helmet} from "react-helmet";

const Seo = ({ title }) => {
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
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{title}|{data.site.siteMetadata.title}</title>
        </Helmet>

    )
}
export default Seo
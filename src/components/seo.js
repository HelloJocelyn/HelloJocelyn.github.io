import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from "react-helmet"

const Seo = ({ 
  title, 
  description, 
  image, 
  article, 
  pathname 
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
          twitterUsername
          keywords
        }
      }
    }
  `)

  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
    image: defaultImage,
    twitterUsername,
    keywords
  } = data.site.siteMetadata

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`,
    url: pathname ? `${siteUrl}${pathname}` : siteUrl,
    author,
    keywords: keywords.join(', ')
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#3b82f6" />
      <link rel="canonical" href={seo.url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/images/icon.png" />
      <link rel="apple-touch-icon" href="/images/icon.png" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  )
}

export default Seo
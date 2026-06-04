import * as React from 'react'
import HeaderNav from './headerNav'

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      {children}
    </>
  )
}

export default Layout


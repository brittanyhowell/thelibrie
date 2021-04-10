import React from 'react'
import { Link } from 'gatsby'
import { Navigation } from './navigation.tsx'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <div className={"font-crimsonpro"}>
        <Navigation location={location} title={title} />
        {children}
        {/* <footer className={"fixed bottom-0 bg-yellow-200 min-w-full px-10"}>
          <div className={"max-w-screen-xl mx-auto py-2"}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer> */}
      </div>
    )
  }
}

export default Layout

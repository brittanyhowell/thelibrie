import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import './master_style.scss'
import { Header } from './header'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
        <Header />
        {children}
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </div>
    )
  }
}

export default Layout

const Footer = styled.div`
  max-width: 1140px;
  margin: auto;
`

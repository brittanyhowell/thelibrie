import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { brandColors } from '../colors'
export function Header() {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <HeaderContainer>
            <Link to={'/'}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginLeft: 16,
                  minWidth: 50,
                }}
              />
            </Link>
            <p>
              Written by <strong>{author}</strong> who lives and works in the
              oven.
            </p>
          </HeaderContainer>
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query HeaderQuery {
    avatar: file(absolutePath: { regex: "/Logo_purple.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`

const HeaderContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  background-color: white;
  border-bottom: 3px solid ${brandColors.purple};
  padding-top: 8px;
  padding-bottom: 8px;
  -webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
`

export default Header

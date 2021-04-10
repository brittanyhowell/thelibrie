import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allWpRecipe.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <Bio /> */}
        <div className="container mx-auto py-10 ">
          {posts.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <div
                key={node.slug}
                className={'shadow-md p-4 mb-4 rounded-md bg-white'}
              >
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
                {/* <small>{node.date}</small> */}
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpRecipe {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { brandColors } from '../colors'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Container>
          <GridLayout>
            <div>
              <Card>
                <CardContainer>
                  <p>Checkout these other recipes</p>{' '}
                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </CardContainer>
              </Card>
            </div>
            <Card>
              <CardContainer>
                <h1>{post.frontmatter.title}</h1>
                <p
                  style={{
                    display: `block`,
                  }}
                >
                  {post.frontmatter.date}
                </p>
                <MDXRenderer>{post.body}</MDXRenderer>
                {/* <hr /> */}
              </CardContainer>
            </Card>
          </GridLayout>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 10%;
`

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-top: 128px;
`
const Card = styled.div`
  border-radius: 8px;
  /* border: 1px solid black; */
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  overflow: hidden;
`
const CardContainer = styled.div`
  padding-left: 16px;
`

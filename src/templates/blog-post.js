import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  //hello
  render() {
    const post = this.props.data.wpPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={'description'} />
        <h1>{post.title}</h1>
        <p>{/* {post.date} */}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }}>{}</div>
        <hr />
        {/* <Bio /> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wpPost(id: { eq: $id }) {
      id
      title
      slug
      content
    }
  }
`

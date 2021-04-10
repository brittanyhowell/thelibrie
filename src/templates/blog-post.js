import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  //hello
  render() {
    const post = this.props.data.wpRecipe
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(post.lazy_data)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={'description'} />
        <div className={'container mx-auto '}>
          <h1
            className={
              'font-bold text-5xl text-blue-900 text-opacity-75 pt-20 pb-10'
            }
          >
            {post.title}
          </h1>
          <p>{/* {post.date} */}</p>
          <div dangerouslySetInnerHTML={{ __html: post.lazy_data }}>{}</div>
          <hr />
        </div>
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
    wpRecipe(id: { eq: $id }) {
      id
      title
      slug
      lazy_data
    }
  }
`

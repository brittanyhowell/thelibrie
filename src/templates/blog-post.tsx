import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { parse } from '@wordpress/block-serialization-default-parser';
import { LazyBlock } from '../components/LazyBlocks'
const BlogPostTemplate = ({data, pageContext, })=> {
    const post = data.wpRecipe
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext
    const lazyData = parse(post.lazy_data)
    
    const method = lazyData.filter(v=> v.blockName === "lazyblock/recipe-method-container" )[0]
    console.log(method)
    const methodObject = LazyBlock[method.blockName](method)

    const ingredients = lazyData.filter(v=> v.blockName === "lazyblock/ingredients" )[0]
    console.log(ingredients)
    const ingredientsObject = LazyBlock[ingredients.blockName](ingredients)


    const stuff = lazyData.map(v=> LazyBlock[v.blockName](v))
   

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={post.title} description={'description'} />
        <div className={'container mx-auto '}>
          <h1
            className={
              'font-bold text-5xl text-blue-900 text-opacity-75 pt-20 pb-10'
            }
          >
            {post.title}
          </h1>
        <div className={"grid grid-cols-3 gap-4"}>
          <div>
{ingredientsObject}
          </div>
        <div className={"col-span-2 ..."}>{methodObject}</div>
          </div>
            
          {/* {stuff.map(v=>v)} */}
          <hr />
        </div>
        {/* <Bio /> */}
      </Layout>
    )
 
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

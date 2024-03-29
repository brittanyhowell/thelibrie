import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    console.log(data)
    const recipes = data.recipes.edges
    const blogs = data.blogs.edges
    console.log(recipes)
    //hello
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <BioContainer>
          {/* <Card> */}
          <ImageBox src={`brie.PNG`} />
          {/* </Card> */}
          <div>
            <h1>Good day m8</h1>
            <p>
              Hello this is the librie. Welcome.
            </p>
          </div>
        </BioContainer>

        <HeadingContainer>
          <h1>Latest Recipes:</h1>
          <p>Iterations of sprinkles</p>
        </HeadingContainer>
        <CardGrid>
          {recipes.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <Card key={node.fields.slug}>
                  <ThunbnailContainer>
                    <ImageBox src={`${node.frontmatter.thumb_nail}`} />
                    {/* <img src={``} /> */}
                  </ThunbnailContainer>
                  <CardContent>
                    <h3>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </CardGrid>

        <HeadingContainer>
          <h1>Latest Blogs:</h1>
          <p>Mainly music reviews but I guess other thoughts eventually.</p>
        </HeadingContainer>
        <CardGrid>
          {blogs.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Card key={node.fields.slug}>
                <CardContent>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </CardContent>
              </Card>
            )
          })}
        </CardGrid>
      </Layout>
    )
  }
}

const BioContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  padding-top: 64px;
  padding-bottom: 64px;
  grid-template-columns: 1fr 3fr;
  column-gap: 64px;
  padding-left: 16px;
  padding-right: 16px;
`

const ThunbnailContainer = styled.div`
  max-width: 100%;
  max-height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageBox = styled.img`
  flex: 1;
  max-width: 100%;
  max-height: auto;
  /* overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center; */
`
const HeadingContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px;
`

const CardGrid = styled.div`
  display: grid;
  max-width: 1440px;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* border: 1px solid red; */
  column-gap: 64px;
  row-gap: 64px;
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;
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

const CardContent = styled.div`
  /* border: 1px solid white; */
  padding: 8px;
`
export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    recipes: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { post_type: { eq: "recipe" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumb_nail
          }
        }
      }
    }
    blogs: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { post_type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumb_nail
          }
        }
      }
    }
  }
`

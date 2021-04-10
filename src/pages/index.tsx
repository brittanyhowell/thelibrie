import React from 'react';
import { Link, graphql } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export const BlogIndex: React.FC = () => {
  const { data } = this.props;
  const siteTitle = data.site.siteMetadata.title;
  const recipes = data.allWpRecipe.edges;
  const posts = data.allWpPost.edges;

  return (
    <Layout location={this.props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      {/* <Bio /> */}
      <div className="bg-yellow-100">
        <div className="max-w-screen-xl mx-auto py-10 px-10">

          <h1
            className="font-black text-9xl text-blue-900 text-opacity-75 pt-20 pb-10W"
          >
            CodeBrie.com
          </h1>

          <h2
            className="font-black text-6xl text-blue-900 text-opacity-75 pt-20 pb-10W"
          >
            Recipes
          </h2>
          <hr className="my-5 border-blue-900" />
          <div className="grid grid-cols-3 border-black">

            {recipes.map(({ node }) => {
              const title = node.title || node.slug;
              return (
                <Link to={node.slug} key={node.slug}>
                  <div className="shadow-sm hover:shadow-lg overflow-hidden rounded-xl transition-all bg-white ">
                    <GatsbyImage
                      image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      className="h-64 w-full max-w-64 max-h-64 "
                      // imgStyle={{ objectFit: "cover" }}
                      // key={"id"}

                      alt="Recipe Hero Image"
                    />
                    <div

                      className="flex-row flex"
                    >

                      <div>
                        <h3 className="ml-5 mt-2 ">

                          {title}

                        </h3>
                        {/* <small>{node.date}</small> */}
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} className="m-5 text-sm " />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            <h2
              className="font-black text-6xl text-blue-900 text-opacity-75 pt-20 pb-10W"
            >
              Posts
            </h2>
            <hr className="my-5 border-blue-900" />
            {posts.map(({ node }) => {
              const title = node.title || node.slug;
              return (
                <Link to={node.slug} key={node.slug}>
                  <div className="shadow-sm hover:shadow-lg overflow-hidden rounded-xl transition-all bg-white ">
                    {node.featuredImage ? (
                      <GatsbyImage
                        image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                        className="h-64 w-full max-w-64 max-h-64 "
                      // imgStyle={{ objectFit: "cover" }}
                      // key={"id"}

                        alt="Recipe Hero Image"
                      />
                    ) : (null)}

                    <div

                      className="flex-row flex"
                    >

                      <div>
                        <h3 className="ml-5 mt-2 ">

                          {title}

                        </h3>
                        {/* <small>{node.date}</small> */}
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} className="m-5 text-sm " />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

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
          excerpt
          featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
    }
 
        }
      }
    }
    allWpPost {
      edges {
        node {
          slug
          title
          excerpt
          featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
    }
 
        }
      }
    }
  }
`;

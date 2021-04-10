import React from 'react';
import { Link, graphql } from 'gatsby';

import { parse } from '@wordpress/block-serialization-default-parser';
import { GatsbyImage } from 'gatsby-plugin-image';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { LazyBlock } from '../components/LazyBlocks';

const RecipePostTemplate = ({ data, pageContext, location }) => {
  const post = data.wpRecipe;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const lazyData = parse(post.lazy_data);

  const stuff = lazyData.map((v) => LazyBlock[v.blockName](v));
  console.log(post.featuredImage.node.localFile.childImageSharp.gatsbyImageData);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description="description" />
      {/* LAYER 1 ==================================================== */}
      <div className="bg-yellow-100">
        <div className="max-w-screen-xl mx-auto h-96 px-10">
          <div className="grid grid-cols-3 h-full -top-16 relative">
            <div className="flex items-end justify-center">
              {/* Hero Image */}
              <GatsbyImage
                image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                className="shadow-xl z-10 relative top-4"
                      // imgStyle={{ objectFit: "cover" }}
                      // key={"id"}

                alt="Recipe Hero Image"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-end ">
              {/* Title */}
              <h1
                className="font-black text-9xl text-blue-900 text-opacity-75 pt-20 pb-10 pl-16"
              >
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* LAYER 2 ==================================================== */}

      {/* <Bio /> */}
    </Layout>
  );
};

export default RecipePostTemplate;

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
`;

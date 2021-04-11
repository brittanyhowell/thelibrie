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
  const { placeholder } = data;

  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const lazyData = parse(post.lazy_data);

  const method = lazyData.filter((v) => v.blockName === 'lazyblock/recipe-method-container')[0];
  const methodObject = LazyBlock[method.blockName](method);
  const ingredients = lazyData.filter((v) => v.blockName === 'lazyblock/ingredients')[0];
  const ingredientsObject = LazyBlock[ingredients.blockName](ingredients);
  const stuff = lazyData.map((v) => LazyBlock[v.blockName](v));

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
                image={post.featuredImage
                  ? post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
                  : placeholder.childImageSharp.gatsbyImageData}
                className="shadow-xl z-10 relative top-4"
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
      <div className="bg-green-100">
        <div className="max-w-screen-xl mx-auto px-10 -top-16 relative">
          <div className="grid grid-cols-3 ">
            <div className={' '}>
              <div className=" bg-gray-100 p-10 shadow-lg">
                {ingredientsObject}
              </div>
            </div>
            <div className="col-span-2 bg-white p-16 shadow-xl">
              {methodObject}
            </div>
          </div>
        </div>
      </div>
      {/* {stuff.map(v=>v)} */}

      {/* <Bio /> */}
    </Layout>
  );
};

export default RecipePostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    placeholder: file(absolutePath: {regex: "/placeholder.jpg/"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
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

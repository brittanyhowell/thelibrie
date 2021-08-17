import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export const BlogIndex: React.FC = ({ data, location }) => (
  <Layout location={location} title="Code Brie">
    <SEO
      title="All posts"
      keywords={['blog', 'gatsby', 'javascript', 'react']}
    />
    {/* <Bio /> */}
    <div className="bg-blue-900">
      <div className="max-w-screen-xl mx-auto py-10 px-10 bg-yellow-100">

        <h1
          className=" pt-20 pb-10W"
        >
          CodeBrie.com
        </h1>

        <h2
          className=" pt-20 pb-10W"
        >
          Recipes
        </h2>
        <hr className="my-5 border-blue-900" />
        <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" />
      </div>
      <div className="bg-blue-900">
        <div className="max-w-screen-xl mx-auto py-10 px-10 bg-green-100">
          <h2
            className=" pt-20 pb-10W"
          >
            Posts
          </h2>
          <hr className="my-5 border-blue-900" />
          <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" />
        </div>
      </div>
    </div>

  </Layout>
);

export default BlogIndex;

export const pageQuery = graphql`
  query {
    placeholder: file(absolutePath: {regex: "/placeholder.jpg/"}) {
    childImageSharp {
      gatsbyImageData
    }
  }

    site {
      siteMetadata {
        title
      }
    }

  }
`;

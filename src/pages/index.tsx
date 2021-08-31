import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export const BlogIndex: React.FC = ({ data, location }) => {
  const links = [{
    title: 'NAAG_SVs',
    URL: '/NAAG_SVs.html',
  }, {
    title: 'SNPsLD_distance',
    URL: '/SNPsLD_distance.html',
  },

  ];
  return (
    <Layout location={location} title="Code Brie">
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      {/* <Bio /> */}
      <div className="">
        <div className="max-w-screen-xl mx-auto py-10 px-10 bg-yellow-100">

          <h1
            className=" pt-20 pb-10W"
          >
            CodeBrie.com
          </h1>

          <h2
            className=" pt-20 pb-10W mb-5"
          >
            Thesis Plots
          </h2>
          <ul className="border border-yellow-200 bg-yellow-300 rounded-xl p-5">
            {links.map((v) => (
              <li className="py-2 ml-5 list-disc">
                <a className="font-mono text-xl text-blue-900  font-bold  " href={v.URL} target="_blank" rel="noreferrer">{v.title}</a>
              </li>
            ))}

          </ul>
        </div>
      </div>

    </Layout>
  );
};

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

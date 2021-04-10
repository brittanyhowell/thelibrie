const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const recipePost = path.resolve(`./src/templates/recipe-post.tsx`)
  return graphql(
    `
      {
        allWpRecipe {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
        allWpPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const recipes = result.data.allWpRecipe.edges
    const posts = result.data.allWpPost.edges

    posts.forEach((post, index) => {
      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          id: post.node.id,
        },
      })
    })
    recipes.forEach((post, index) => {
      createPage({
        path: post.node.slug,
        component: recipePost,
        context: {
          id: post.node.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

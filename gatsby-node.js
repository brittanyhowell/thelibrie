const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const recipePost = path.resolve(`./src/templates/recipe-post.tsx`)
  return graphql(
    `
      {
        recipes: allMdx(
          filter: { frontmatter: { post_type: { eq: "recipe" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
        blogs: allMdx(
          filter: { frontmatter: { post_type: { eq: "blog" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const recipes = result.data.recipes.edges
    const blogs = result.data.blogs.edges

    recipes.forEach((recipe, index) => {
      const previous =
        index === recipes.length - 1 ? null : recipes[index + 1].node
      const next = index === 0 ? null : recipes[index - 1].node

      createPage({
        path: recipe.node.fields.slug,
        component: recipePost,
        context: {
          slug: recipe.node.fields.slug,
          previous,
          next,
        },
      })
    })

    blogs.forEach((blog, index) => {
      const previous = index === blogs.length - 1 ? null : blogs[index + 1].node
      const next = index === 0 ? null : blogs[index - 1].node

      createPage({
        path: blog.node.fields.slug,
        component: blogPost,
        context: {
          slug: blog.node.fields.slug,
          previous,
          next,
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

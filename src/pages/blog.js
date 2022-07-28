import * as React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({data}) => {
  console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
        
        <p>My cool posts will go here</p>
        <ul>
          {data.allFile.nodes.map(node => {
            return <li key={node.name}>{node.name}</li>
          })}
        </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blogs"}}) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
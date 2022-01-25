import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

// If your API needs an authorization, use like this
// const api = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
//   },
// })

const api = new GraphQLClient(endpoint)

export default api

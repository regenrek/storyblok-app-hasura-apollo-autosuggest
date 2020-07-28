import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

// const GRAPHCMS_API = 'https://<myname>.herokuapp.com//v1/graphql'
const GRAPHCMS_API = '<put-your-hasura-graphql-api-in>'

export default function (context) {
  return {
    link: new HttpLink({ uri: GRAPHCMS_API }),
    // httpLinkOptions: {
    //   uri: 'https://umseck.herokuapp.com//v1/graphql',
    //   credentials: 'same-origin'
    // },
    cache: new InMemoryCache(),
    // wsEndpoint: 'https://umseck.herokuapp.com//v1/graphql',

    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    getAuth: (tokenName = 'apollo-token') => {
      let token = ''
      if (process.browser) {
        token = localStorage.getItem(tokenName)
      }
      if (token) {
        return 'Bearer ' + token
      } else {
        return ''
      }
    }
  }
}

# storyblok-app-hasura-example

Storyblok App + Hasura GraphQL 

I followed this tutorial: https://www.storyblok.com/tp/how-to-create-custom-app-for-storyblok-with-nuxt-js-and-oauth2


Add your `.env` file to the root of the project
```
CONFIDENTIAL_CLIENT_ID=""
CONFIDENTIAL_CLIENT_SECRET=""
CONFIDENTIAL_CLIENT_REDIRECT_URI=""
```

Add your graphql api to `apollo/clientConfig.js`
```
const GRAPHCMS_API = '<put-your-hasura-graphql-api-in>'
```

## Nuxt Build Setup

```bash
yarn
yarn dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

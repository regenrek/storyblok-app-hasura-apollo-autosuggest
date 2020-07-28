<template>
  <div class="container">
    <div>
      <div>
        Type in m...
      </div>
      <vue-simple-suggest
        v-model="chosen"
        :list="list"
        :filter-by-query="true"
      >
        <!-- Filter by input text to only show the matching results -->
      </vue-simple-suggest>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS

const GET_COMPANIES = gql`
  query listBusiness {
    business {
      id
      email
      info
      info2
      location_id
      menu_url
      name
      phone
    }
  }
`

export default {
  components: {
    VueSimpleSuggest
  },
  data () {
    return {
      business: [],
      chosen: ''
    }
  },
  methods: {
    list () {
      return this.business.map(item => item.name)
    }
  },
  apollo: {
    business: {
      query: GET_COMPANIES
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

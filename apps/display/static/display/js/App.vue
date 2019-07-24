<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      {{ quoteText }} - {{ quoteAuthor }}
    </div>
    <div class="d-flex flex-row justify-content-center" @click="getQuote()">
      Next
    </div>
  </div>
</template>
<script>
require('bootstrap/dist/css/bootstrap.min.css');
const axios = require('axios');

export default {
  name: 'App',
  data() {
    return {
      quoteText: '',
      quoteAuthor: '',
    };
  },
  created() {
    this.getQuote();
  },
  methods: {
    getQuote() {
      const url = '/quote';
      axios.get(url)
        .then((x) => {
          this.quoteText = x.data.text;
          this.quoteAuthor = x.data.author;
        });
    },
  },
};
</script>
<style>
</style>

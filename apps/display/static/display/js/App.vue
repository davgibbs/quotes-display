<template>
  <div class="full-area h-100">
    <div class="d-flex flex-row justify-content-center">
      <p>{{ quoteText }}</p>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <p>- <i>{{ quoteAuthor }}</i></p>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <button class="btn btn-clear button" @click="getQuote()">
        Next
      </button>
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
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
}
.full-area {
  background-color: #D3D3D3;
  padding-top: 10%;
}
p {
  font-size: 30px;
}
</style>

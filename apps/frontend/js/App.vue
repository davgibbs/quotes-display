<template>
  <div class="full-area h-100">
    <div class="d-flex justify-content-center">
      <img :src="environmentImage" alt="Earth with tree" height="200px">
    </div>
    <div class="d-flex justify-content-center">
      <h1>Environment Random Quote</h1>
    </div>
    <div class="quote">
      <div class="d-flex flex-row justify-content-center">
        <p>{{ quoteText }}</p>
      </div>
      <div class="d-flex flex-row justify-content-center">
        <p>- <i>{{ quoteAuthor }}</i></p>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <button class="btn btn-clear button" @click="getQuote()">
        Next
      </button>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import environmentImage  from '../img/environment.png';

export default {
  name: 'App',
  data() {
    return {
      quoteText: '',
      quoteAuthor: '',
      environmentImage,
    };
  },
  created() {
    // Get initial quote
    this.getQuote();
  },
  methods: {
    getQuote() {
      const url = '/random-quote';
      fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.quoteText = json.text;
          this.quoteAuthor = json.author;
        });
    },
  },
};
</script>
<style>
.button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 35px;
  display: inline-block;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
}
.full-area {
  background-color: #D3D3D3;
  padding-top: 2%;
}
.quote {
  margin-top: 3%;
  margin-bottom: 2%;
  border-style: solid;
  background-color: white;
  font-size: 30px;
}
</style>

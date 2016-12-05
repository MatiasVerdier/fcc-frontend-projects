<template lang="html">
  <div class="ui container random-quotes-container">

    <div class="ui two column centered doubling grid">
      <div class="center aligned column">
        <h1 class="ui centered header">Random Quotes Machine</h1>
        <div class="ui piled segment random-quote">
          <p class="quote-text">{{ quoteText }}</p>
          <div class="quote-author">{{ quoteAuthor }}</div>
        </div>

        <div class="ui secondary button" @click="getNewQuote()">
          New Quote
        </div>

        <a class="ui twitter button" :href="tweetLink" target="_blank">
          <i class="twitter icon"></i>
          Tweet it!
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const QUOTES_API = 'http://api.forismatic.com/api/1.0/';

export default {
  data() {
    return {
      quoteText: '',
      quoteAuthor: '',
      quoteLink: '',
      defaultAuthor: 'Anonymous',
    };
  },
  computed: {
    tweetLink() {
      return `https://twitter.com/intent/tweet?text=${this.quoteText} ${this.quoteAuthor}`;
    },
  },
  mounted() {
    this.getNewQuote();
  },
  methods: {
    getNewQuote() {
      this.$jsonp(QUOTES_API, {
        method: 'getQuote',
        format: 'jsonp',
        lang: 'en',
        callbackQuery: 'jsonp',
      }).then((json) => {
        console.log(json);
        this.quoteText = `"${json.quoteText}"`;
        this.quoteAuthor = `-${json.quoteAuthor || this.defaultAuthor}`;
        this.quoteLink = json.quoteLink;
      });
    },
  },
};
</script>

<style lang="css">
.ui.segment.random-quote {
  background: #235985;
  border: 1px solid white;
  color: #dedede;
  font-family: 'Courgette', cursive;
  min-height: 250px;
}
.ui.segment.random-quote::before, .ui.segment.random-quote::after {
  background-color: #235985;
  border: 1px solid #dedede;
}
.quote-text {
  font-size: 2.5em;
  text-align: center;
}
.quote-author {
  font-size: 1.5em;
  text-align: right;
}
</style>

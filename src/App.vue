<template>
  <div id="app">
    <site-header></site-header>
    <main id="main-content" class="ui container fluid">
      <router-view></router-view>
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style lang="css">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#main-content {
  flex: 1;
  margin-top: 7em;
}
</style>

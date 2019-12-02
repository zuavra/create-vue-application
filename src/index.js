import Vue from 'vue';
import App from './components/App.vue';
import {Http} from './lib/http';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {
    App,
  },
  provide: {
    http: new Http(),
  },
  render(h) {
    return h(App);
  },
});

import Vue from 'vue'

/** Vue A La Carte **/
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn
} from 'vuetify'

import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn
  }
})

// import Vuetify from 'vuetify'
// Vue.use(Vuetify)

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' /* Remove the '#' from the URL */
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

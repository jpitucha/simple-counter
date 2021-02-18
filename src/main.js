import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n'
import { translations } from './translations'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'pl',
  messages: translations
})

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

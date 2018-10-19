// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Moment from 'moment'
import Axios from 'axios'

Vue.prototype.$moment = Moment

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$axios = Axios
const getConfigJson = function () {
  Axios.get('/static/settings.json').then(res => {
    // Vue.prototype.api_baseURL = res.data.api_baseURL
    Axios.defaults.baseURL = res.data.api_baseURL + '/api/'
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  }).catch(err => console.log(err))
}
getConfigJson()

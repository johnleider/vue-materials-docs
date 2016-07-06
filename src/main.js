import Vue from 'vue'
import Materials from 'vue-materials'
import Resource from 'vue-resource'
import Components from './components/index'
import App from './app.vue'

Vue.use(Resource)
Vue.use(Materials)

Vue.http.options.root = 'src/vendor/vue-materials/src/components'

for (let key in Components) {
    Vue.component(key, Components[key])
}

new Vue({
  el: '#app',
  render: h => h(App)
})

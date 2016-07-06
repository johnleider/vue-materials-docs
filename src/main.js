import Vue from 'vue'
import Materials from 'vue-materials'
import Components from './components/index'
import App from './app.vue'

Vue.use(Materials)

for (let key in Components) {
    Vue.component(key, Components[key])
}

new Vue({
  el: '#app',
  render: h => h(App)
})

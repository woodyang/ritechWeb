// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Select, Menu, Submenu, MenuItem, Switch, Image} from 'element-ui';
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Button).use(Select).use(Menu).use(Submenu).use(MenuItem).use(Switch).use(Image);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
el: '#app',
router,
components: { App },
template: '<App/>'
})


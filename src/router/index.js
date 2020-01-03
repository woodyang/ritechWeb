import Vue from 'vue'
import Router from 'vue-router'
import Productions from '@/components/productions/Productions'
import News from '@/components/company/News'
import Profile from '@/components/company/Profile'
import Customer from '@/components/company/Customer'
import Join from '@/components/company/Join'
import Xiaoxiaoq from '@/components/ritech-products/Xiaoxiaoq'
import Plushq from '@/components/ritech-products/Plushq'
import Rcradio from '@/components/ritech-products/Rcradio'
import Qrv from '@/components/ritech-products/Qrv'


Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Xiaoxiaoq',
      component: Xiaoxiaoq
    },
    {
      path: '/Productions',
      name: 'Productions',
      component: Productions
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/Xiaoxiaoq',
      name: 'Xiaoxiaoq',
      component: Xiaoxiaoq
    },
    {
      path: '/Plushq',
      name: 'Plushq',
      component: Plushq
    },
    {
      path: '/Rcradio',
      name: 'Rcradio',
      component: Rcradio
    },
    {
      path: '/Qrv',
      name: 'Qrv',
      component: Qrv
    }
  ]
})

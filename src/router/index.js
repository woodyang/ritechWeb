import Vue from 'vue'
import Router from 'vue-router'
import Productions from '@/components/AI-productions/Productions'
import News from '@/components/news/News'
import Profile from '@/components/company/Profile'
import Customer from '@/components/company/Customer'
import Join from '@/components/company/Join'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import LoggedOut from '@/components/LoggedOut'
import LoggedIn from '@/components/LoggedIn'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-64727739.okta.com/oauth2/default',
  clientId: '0oa5st38gcVdd4Za65d6',
  redirectUri: 'https://dev-64727739.okta.com/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/loggedout',
    name: 'LoggedOut',
    component: LoggedOut
  },
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
  {
    path:'/',
    name: 'Loggedin',
    component: LoggedIn,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/business-card-II/',
  routes
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router

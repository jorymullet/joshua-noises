import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as uninitializedFirebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import './registerServiceWorker'

export const firebase = uninitializedFirebase.initializeApp({
  apiKey: "AIzaSyCaXkfbCoUZE0Ky9Pi8TdNeCeI34_IMvNA",
  authDomain: "joshua-noises.firebaseapp.com",
  projectId: "joshua-noises",
  storageBucket: "joshua-noises.appspot.com",
  messagingSenderId: "199903655056",
  appId: "1:199903655056:web:1085590d1032acfe355415",
  measurementId: "G-ZX3KKFQSVX"
})
export const auth = firebase.auth()

Vue.use({
  install: Vue => {
    Vue.prototype.$firestore = firebase.firestore()
    Vue.prototype.$auth = auth
    Vue.prototype.$storage = firebase.storage()
  }
})

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import ProCookies from './global/plugins/pro-cookies'
Vue.use(ProCookies)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import ProEmissions from './global/plugins/pro-emissions'
Vue.use(ProEmissions)

import FormHelpers from './global/plugins/form-helpers'
Vue.use(FormHelpers)

import HTTP from './global/plugins/HTTP'
Vue.use(HTTP)

import toast from './global/plugins/toast'
Vue.use(toast)

import time from './global/plugins/time'
Vue.use(time)

import regex from './global/plugins/regex'
Vue.use(regex)

import loading from './global/plugins/loading'
Vue.use(loading)

import copy from './global/plugins/copy'
Vue.use(copy)

import currency from './global/plugins/currency'
Vue.use(currency)

import dig from './global/plugins/dig'
Vue.use(dig)

import TinyMethods from './global/plugins/methods'
Vue.use(TinyMethods)

import keyWatcher from './global/plugins/key-watcher'
Vue.use(keyWatcher)

Vue.config.productionTip = false

export const ThisVue = new Vue({
  el: '#app',
  router,
  store,
  render: function (h) { return h(App) }
})//.$mount('#app')

import modals from './global/plugins/modals'
Vue.use(modals, ThisVue)
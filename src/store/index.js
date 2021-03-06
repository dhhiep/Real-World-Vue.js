import Vue from 'vue'
import Vuex from 'vuex'
import * as event from '@/store/modules/event.js'
import * as user from '@/store/modules/user.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: ['food', 'community', 'education', 'animal', 'personal']
  },
  mutations: {},
  actions: {},
  modules: { user, event, notification },
  getters: {}
})

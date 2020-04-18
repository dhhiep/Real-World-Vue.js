import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 123, name: 'Hiep Dinh' },
    categories: ['food', 'community', 'education', 'animal', 'personal'],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.createEvent(event).then(eventResp => {
        commit('ADD_EVENT', eventResp)

        return eventResp
      })
    }
  },
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneEvents: state => {
      return state.events.filter(event => event.done)
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})

import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  event: {},
  events: [],
  eventsTotal: 0
}

export const mutations = {
  SET_EVENT(state, event) {
    state.event = event
  },
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  }
}

export const actions = {
  setEvent({ commit, getters, dispatch }, id) {
    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(resp => {
          commit('SET_EVENT', resp.data)
        })
        .catch(error => {
          let notification = {
            type: 'error',
            message: 'Fetch event fail. Error message: ' + error.message
          }

          dispatch('notification/add', notification, { root: true })

          throw error
        })
    }
  },
  createEvent({ commit, dispatch }, event) {
    return EventService.createEvent(event)
      .then(eventResp => {
        commit('ADD_EVENT', eventResp)

        let notification = {
          type: 'success',
          message: 'Create event success: ' + eventResp.title
        }

        dispatch('notification/add', notification, { root: true })

        // return eventResp
      })
      .catch(error => {
        let notification = {
          type: 'error',
          message: 'Create event fail. Error message: ' + error.message
        }

        dispatch('notification/add', notification, { root: true })

        throw error
      })
  },
  fetchEvents({ commit, dispatch, rootState }, { page, perPage }) {
    console.log('Fetching by', rootState.user.user.name)

    dispatch('user/tracking', 'Load list (by dispatch). Page:' + page, {
      root: true
    })

    EventService.getEvents(page, perPage)
      .then(response => {
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        let notification = {
          type: 'error',
          message: 'Create event fail. Error message: ' + error.message
        }

        dispatch('notification/add', notification, { root: true })

        throw error
      })
  }
}

export const getters = {
  doneEvents: state => {
    return state.events.filter(event => event.done)
  },
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}

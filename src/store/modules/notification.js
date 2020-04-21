export const namespaced = true

export const state = {
  notifications: []
}

let currID = 0

export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: currID++
    })
  },
  REMOVE_NOTIFICATION(state, notification) {
    console.log('mutations remove')
    state.notifications = state.notifications.filter(
      e => e.id != notification.id
    )
  }
}

export const actions = {
  add({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification)
  },
  remove({ commit }, notification) {
    console.log('action remove')

    commit('REMOVE_NOTIFICATION', notification)
  }
}

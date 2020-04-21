export const namespaced = true

export const state = { user: { id: 123, name: 'Hiep Dinh' } }

export const mutations = {
  TRACKING(state, text) {
    console.log('User tracking in action:', text)
  }
}

export const actions = {
  tracking({ commit }, text) {
    commit('TRACKING', text)
  }
}

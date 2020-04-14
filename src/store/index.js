import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 123, name: 'Hiep Dinh' },
    categories: ['food', 'community', 'education', 'animal', 'personal'],
    todos: [
      { id: 1, text: 'Task 1', done: true },
      { id: 2, text: 'Task 2', done: false },
      { id: 3, text: 'Task 3', done: true },
      { id: 4, text: 'Task 4', done: false },
      { id: 5, text: 'Task 5', done: true }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})

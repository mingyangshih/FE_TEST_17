import { getField, updateField } from 'vuex-map-fields'
export const state = () => ({
  list: [],
  text: ''
})

export const getters = {
  getField
}

export const actions = {
  async getTodos ({ commit }) {
    await this.$fire.database.ref('/todos/items').once('value', async function (snapshot) {
      let items
      if (!snapshot.val()) {
        items = []
      } else {
        items = snapshot.val()
      }
      await commit('setList', { items })
    })
  },
  async setTodos ({ state, commit, dispatch }) {
    const vm = this
    const item = {
      text: state.text,
      done: false
    }
    const oldItems = state.list
    const data = [...oldItems, item]
    commit('clearInput')
    await vm.$fire.database.ref('todos/items').set(data)
    await dispatch('getTodos')
  },
  async remove ({ dispatch, state }, { todo }) {
    const vm = this
    const id = state.list.indexOf(todo)
    await vm.$fire.database.ref(`todos/items/${id}`).remove()
    await dispatch('getTodos')
  }
}

export const mutations = {
  setList (state, { items }) {
    state.list = items
  },
  clearInput (state) {
    state.text = ''
  },
  toggle (todo) {
    todo.done = !todo.done
  },
  updateField
}

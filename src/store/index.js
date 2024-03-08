import { createStore } from 'vuex'

export default createStore({
  state: {
    modal: false,
    editIndex: 0,

  },
  getters: {
  },
  mutations: {

    openModal(state) {
      state.modal = true
      
    },

    closeModal(state) {
      state.modal = false
      state.editIndex = 0 ;

    }

  },
  actions: {
  },
  modules: {
  }
})

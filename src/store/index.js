import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation.js'
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    askItem: {},
    List: [],
  },
  getters: {
    getList(state) {
      return state.List;
    },
    getUser(state) {
      return state.user;
    },
    getAskItem(state) {
      return state.askItem;
    },
  },
  mutations,
  actions,
});
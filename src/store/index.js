import Vue from "vue";
import { reactive } from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = reactive({
  firstTime: true,
});

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

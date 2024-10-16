import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import createMultiTabState from 'vuex-multi-tab-state';

//Плагин для сохранения состояния после перезагрузки страницы
const vuexPersistence = new VuexPersistence({
  storage: window.localStorage
});
//Плагин для синхронизации состояния между вкладками
const vuexMultiTab = createMultiTabState({
  statesPaths: ['cards']
});

export default createStore({
  state() {
    return {
      isMenuExpanded: false,
      isMobile: false,
      isTablet: false,
      cards: []
    };
  },
  getters: {
    IS_MENU_EXPANDED(state) {
      return state.isMenuExpanded;
    },

    IS_MOBILE(state) {
      return state.isMobile;
    },

    IS_TABLET(state) {
      return state.isTablet;
    },

    GET_CARDS(state) {
      return state.cards;
    }
  },
  mutations: {
    CHANGE_IS_MENU_EXPANDED(state, value) {
      state.isMenuExpanded = value;
    },

    CHANGE_IS_MOBILE(state, value) {
      state.isMobile = value;
      if (value && state.isMenuExpanded) {
        state.isMenuExpanded = false;
      }
    },

    CHANGE_IS_TABLET(state, value) {
      state.isTablet = value;
      if (value && state.isMenuExpanded) {
        state.isMenuExpanded = false;
      }
    },

    SET_CARDS(state, value) {
      state.cards = value;
    }
  },
  actions: {
    SET_IS_MOBILE({ commit }, value) {
      commit('CHANGE_IS_MOBILE', value);
    },

    SET_IS_TABLET({ commit }, value) {
      commit('CHANGE_IS_TABLET', value);
    },

    SET_CARDS({ commit }, value) {
      commit('SET_CARDS', value);
    },

    SET_MENU_EXPANDED({ commit }, value) {
      commit('CHANGE_IS_MENU_EXPANDED', value);
    }
  },

  plugins: [vuexMultiTab, vuexPersistence.plugin]
});

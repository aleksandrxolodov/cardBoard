import AppMenu from './appMenu';

export default {
  components: {
    'app-menu': AppMenu
  },

  computed: {
    lightweight() {
      return !this.$store.getters?.['IS_MENU_EXPANDED'];
    },

    isMobile() {
      return this.$store.getters?.['IS_MOBILE'];
    },

    isTablet() {
      return this.$store.getters?.['IS_TABLET'];
    }
  },

  methods: {
    toggleMenu() {
      this.$store.dispatch('SET_MENU_EXPANDED', !!this.lightweight);
    }
  }
};

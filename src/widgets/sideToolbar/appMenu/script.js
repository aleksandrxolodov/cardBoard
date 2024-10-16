import MenuItem from './menuItem';
export default {
  props: {
    lightweight: {
      type: Boolean,
      default: false
    }
  },

  components: {
    'menu-item': MenuItem
  },

  computed: {
    appMenu() {
      return [
        {
          icon: 'home',
          name: 'Домашняя страница',
          link: '/',
          order: 0
        },
        {
          icon: 'settings',
          name: 'Настройки',
          link: '/settings',
          order: 1
        }
      ];
    }
  },

  methods: {
    onClickGroup() {
      if (this.lightweight) {
        this.$store.dispatch('state/SET_MENU_EXPANDED', true);
      }
    }
  }
};

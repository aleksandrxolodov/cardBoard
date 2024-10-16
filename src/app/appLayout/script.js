import HeaderToolbar from '@/widgets/headerToolbar';
import SideToolbar from '@/widgets/sideToolbar';

export default {
  components: {
    'header-toolbar': HeaderToolbar,
    'side-toolbar': SideToolbar
  },

  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  },

  methods: {
    onResize() {
      const w = window.innerWidth;
      let isMobile = w <= 1000;
      let isTablet = w > 1000 && w <= 1500;
      if (isMobile !== this.isMobile) {
        this.$store.dispatch('SET_IS_MOBILE', isMobile);
      }
      if (isTablet !== this.isTablet) {
        this.$store.dispatch('SET_IS_TABLET', isTablet);
      }
    }
  },

  computed: {
    isMobile() {
      return this.$store.getters?.['IS_MOBILE'];
    },

    isTablet() {
      return this.$store.getters?.['IS_TABLET'];
    }
    // isAvailable() {
    //   return this.$store.getters?.['state/IS_APP_INFO_LOADED'];
    // },
    //
    // appInfo() {
    //   return this.$store.getters['state/STATES']?.application;
    // },
    //
    // isAuth() {
    //   return this.$store.getters?.['auth/USER']?.token?.length > 0;
    // },
    //
    // isViewToolbar() {
    //   const canView = ![
    //     'login',
    //     'registration',
    //     'confirmRegistration',
    //     'resetPassword',
    //     'logout'
    //   ].includes(this.$route?.name);
    //
    //   const canAccess =
    //     this.isAuth ||
    //     (this.appInfo?.anonymousUI && this.appInfo?.anonymousUser);
    //
    //   return canView && canAccess;
    // },
    //
    // isViewSideToolbar() {
    //   return this.isViewToolbar && this.appInfo?.sidebar;
    // }
  }
};

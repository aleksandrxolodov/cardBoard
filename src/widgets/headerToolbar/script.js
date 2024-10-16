export default {
  computed: {
    isMobile() {
      return this.$store.getters?.['IS_MOBILE'];
    },

    title() {
      return this.$route?.meta?.title;
    }
  }
};

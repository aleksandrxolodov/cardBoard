import CardRender from '@/shared/ui/components/cardRender';

export default {
  components: {
    'card-render': CardRender
  },

  computed: {
    isMobile() {
      return this.$store.getters?.['IS_MOBILE'];
    },

    cards() {
      return this.$store.getters?.['GET_CARDS'] ?? [];
    }
  }
};

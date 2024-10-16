import CardRender from '@/shared/ui/components/cardRender';
import { CARD } from '@/shared/const/boardModel';

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
  },

  methods: {
    addCard() {
      let card = Object.values(CARD.FIELDS).reduce((r, c) => {
        r[c] = null;
        return r;
      }, {});
      card[CARD.FIELDS.ID] = +this.cards?.length + 1;

      this.$store.dispatch('SET_CARDS', [card, ...this.cards]);

      //Скролл в начало страницы во время создания карточки

      document.getElementById('card-render')?.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  }
};

import HeaderToolbar from '@/widgets/headerToolbar';
import SideToolbar from '@/widgets/sideToolbar';
import { VueDraggableNext } from 'vue-draggable-next';
import BoardCard from '@/shared/ui/components/boardCard';
import { CARD } from '@/shared/const/boardModel';

export default {
  CARD,
  components: {
    'header-toolbar': HeaderToolbar,
    'side-toolbar': SideToolbar,
    'board-card': BoardCard,
    draggable: VueDraggableNext
  },

  props: {
    isReadOnly: {
      type: Boolean
    }
  },

  computed: {
    cards: {
      get() {
        return this.$store.getters?.['GET_CARDS'] ?? [];
      },
      set(value) {
        this.$store.dispatch('SET_CARDS', value);
      }
    },

    isMobile() {
      return this.$store.getters?.['IS_MOBILE'];
    },

    isTablet() {
      return this.$store.getters?.['IS_TABLET'];
    }
  },

  methods: {
    onSaveCard(payload) {
      const cards = [...this.cards];
      const index = cards?.findIndex(card => card?.id === payload?.id);
      if (index < 0) return;
      cards[index] = payload;
      this.$store.dispatch('SET_CARDS', cards);
    },

    onDeleteCard(payload) {
      const cards = [...this.cards];
      const index = cards?.findIndex(card => card?.id === payload?.id);
      if (index < 0) return;
      cards?.splice(index, 1);
      this.$store.dispatch('SET_CARDS', cards);
    }
  }
};

import HeaderToolbar from '@/widgets/headerToolbar';
import SideToolbar from '@/widgets/sideToolbar';
import { VueDraggableNext } from 'vue-draggable-next';
import { CARD } from '@/shared/const/boardModel';

export default {
  CARD,
  components: {
    'header-toolbar': HeaderToolbar,
    'side-toolbar': SideToolbar,
    draggable: VueDraggableNext
  },

  props: {
    card: {
      type: Object
    },
    isReadOnly: {
      type: Boolean
    }
  },

  data() {
    return {
      form: { ...this.card },
      isEditing: false
    };
  },

  watch: {
    'card.description'(value) {
      if (value !== this.form[CARD.FIELDS.DESCRIPTION]) {
        this.form[CARD.FIELDS.DESCRIPTION] = value;
      }
    }
  },

  methods: {
    onBlur() {
      this.isEditing = false;
    },

    onDelete() {
      this.$emit('delete', { ...this.form });
    },

    onEdit() {
      this.isEditing = true;
    },

    onSave() {
      this.$emit('save', { ...this.form });
      this.isEditing = false;
    }
  },

  computed: {
    isMobile() {
      return this.$store.getters?.['IS_MOBILE'];
    },

    isTablet() {
      return this.$store.getters?.['IS_TABLET'];
    },

    canSave() {
      return (
        this.form[CARD.FIELDS.DESCRIPTION] !==
        this.card[CARD.FIELDS.DESCRIPTION]
      );
    }
  }
};

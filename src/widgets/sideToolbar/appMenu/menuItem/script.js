export default {
  props: {
    item: {
      type: Object
    },
    lightweight: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isViewGroup: false
    };
  },

  watch: {
    lightweight() {
      this.toggleGroupState();
    }
  },

  methods: {
    toggleGroupState() {
      // Сворачиваем группу, когда указан компактный вид
      if (this.lightweight) {
        this.isViewGroup = false;
        return;
      }
      this.isViewGroup = true;
    }
  }
};

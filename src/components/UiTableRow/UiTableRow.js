export default {
  name: 'ui-table-row',
  props: {
    expandable: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    related: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e);

      if (this.expandable) {
        this.$emit('toggle');
      }
    },
  },
  render(h) {
    return h(
      'tr',
      {
        staticClass: 'table-row',
        class: {
          '-related': this.related,
          '-expandable': this.expandable,
          '-expanded': this.expanded,
        },
        on: {
          click: (e) => this.clickHandler(e),
        },
      },
      this.$slots.default,
    );
  },
};

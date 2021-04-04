export default {
  name: 'ui-table-cell',
  props: {
    cols: {
      type: [String, Number],
      default: null,
      validator: (v) => !Number.isNaN(parseInt(v, 10)) && v > 0,
    },
    rows: {
      type: [String, Number],
      default: null,
      validator: (v) => !Number.isNaN(parseInt(v, 10)) && v > 0,
    },
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e);
    },
  },
  render(h) {
    return h(
      'td',
      {
        staticClass: 'table-cell',
        attrs: {
          colspan: this.cols,
          rowspan: this.rows,
        },
        on: {
          click: (e) => this.clickHandler(e),
        },
      },
      this.$slots.default,
    );
  },
};

import UiIcon from '../UiIcon/UiIcon';

export default {
  name: 'UiTableColumn',
  props: {
    /**
     * Content alignment inside wrapper
     */
    align: {
      type: String,
      default: null,
      validator: (v) => ['left', 'right', 'center', null].includes(v),
    },
    /**
     * Shows sort icon and make column sortable
     */
    sortable: {
      type: Boolean,
      default: false,
    },
    /**
     * Sort direction
     */
    direction: {
      type: String,
      default: null,
      validator: (v) => ['asc', 'desc'].includes(v),
    },
  },
  methods: {
    /**
     * Click event handler
     *
     * @param {MouseEvent} e
     */
    clickHandler(e) {
      this.$emit('click', e);

      if (this.sortable) {
        let v = null;

        switch (this.direction) {
          case null:
            v = 'desc';
            break;
          case 'desc':
            v = 'asc';
            break;
          case 'asc':
          default:
            v = null;
            break;
        }

        this.$emit('toggle', v);
      }
    },
    /**
     * Generates column template
     *
     * @param {Array<VNode>} content
     * @return {VNode}
     */
    genColumn(content) {
      return this.$createElement(
        'th',
        {
          staticClass: 'table-col',
          class: {
            '-sortable': this.sortable,
          },
          on: {
            click: (e) => this.clickHandler(e),
          },
        },
        content,
      );
    },
    /**
     * Generates title's wrapper template
     *
     * @param {Array<VNode>} content
     * @return {VNode}
     */
    genWrapper(content) {
      return this.$createElement(
        'span',
        {
          staticClass: 'table-col__content',
          class: {
            '-right': this.align === 'right',
            '-center': this.align === 'center',
          },
        },
        content,
      );
    },
    /**
     * Generates title template
     *
     * @return {VNode}
     */
    genTitle() {
      return this.$createElement('span', { staticClass: 'table-col__title' }, this.$slots.default);
    },
    /**
     * Generates sort icon template
     *
     * @return {VNode | null}
     */
    genIcon() {
      if (!this.sortable) {
        return null;
      }

      return this.$createElement(UiIcon, {
        staticClass: 'table-col__icon',
        class: {
          '-asc': this.direction === 'asc',
          '-desc': this.direction === 'desc',
        },
        props: {
          name: 'sort',
          interactive: true,
        },
      });
    },
  },
  render() {
    return this.genColumn([this.genWrapper([this.genTitle(), this.genIcon()])]);
  },
};

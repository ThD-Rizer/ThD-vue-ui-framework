import { orderBy } from '@/utils';
import UiTableColumn from '@/components/UiTableColumn/UiTableColumn';
import UiTableRow from '@/components/UiTableRow/UiTableRow';
import UiTableCell from '@/components/UiTableCell/UiTableCell';

import styles from './UiTable.scss';

/**
 * @type {{ column: string, indexedColumn: (function(*): string), row: string, indexedRow: (function(*): string) }}
 */
const defaultSlots = {
  column: 'column',
  indexedColumn: (index) => `column-${index}`,
  row: 'row',
  indexedRow: (index) => `row-${index}`,
  related: 'related',
  indexedRelated: (index) => `related-${index}`,
  relatedRow: 'related-row',
  indexedRelatedRow: (index) => `related-row-${index}`,
};

export default {
  name: 'UiTable',

  model: {
    prop: 'sort',
    event: 'change',
  },

  props: {
    /**
     * Sort options. Uses for v-model.
     */
    sort: {
      type: Object,
      default: null,
      validator: (v) => v === null || (typeof v.column === 'string' && ['asc', 'desc'].includes(v.direction)),
    },
    /**
     * Table columns which will be rendered in head
     */
    columns: {
      type: Array,
      default: () => [],
    },
    /**
     * Table rows which will be rendered in body
     */
    rows: {
      type: Array,
      default: () => [],
    },
    /**
     * Related rows field name
     */
    relatedRows: {
      type: String,
      default: null,
    },
    /**
     * Custom names of slots
     */
    slots: {
      type: Object,
      default: () => ({ ...defaultSlots }),
    },
    /**
     * Disable native inner table scroll
     */
    disableScroll: {
      type: Boolean,
      default: false,
    },
    /**
     * Applies inline scss to table
     */
    inline: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    /**
     * Current sort column
     *
     * @type {string | null}
     */
    column: null,
    /**
     * Current sort direction
     *
     * @type {'asc' | 'desc' | null}
     */
    direction: null,
    /**
     * Current expanded row
     *
     * @type {number | null}
     */
    expandedRow: null,
    /**
     * Shadows visibility state
     *
     * @type {{ left: boolean, right: boolean }}
     */
    shadows: {
      left: false,
      right: false,
    },
  }),

  computed: {
    /**
     * All columns' keys
     *
     * @returns {Array<string>}
     */
    keys() {
      return this.columns.map(({ key }) => key);
    },
    /**
     * All rows in sort order
     *
     * @returns {Array<Object>}
     */
    sortedRows() {
      return this.column && this.direction ? orderBy(this.rows, [this.column], [this.direction]) : this.rows;
    },
    /**
     * Sort direction for each column
     *
     * @returns {Object<string, 'asc' | 'desc' | null>}
     */
    columnsDirection() {
      return this.columns.reduce(
        (acc, { key }) => ({
          ...acc,
          [key]: this.column === key ? this.direction : null,
        }),
        {},
      );
    },
    /**
     * Rows' indexes which could be expanded
     *
     * @returns {Array<number>}
     */
    expandableRows() {
      if (typeof this.relatedRows !== 'string') {
        return [];
      }

      return this.rows
        .map((row, index) => {
          const rows = row[this.relatedRows];
          const isExpandable = Array.isArray(rows) ? rows.length > 0 : !!rows;

          return isExpandable ? index : null;
        })
        .filter((v) => v !== null);
    },
  },

  watch: {
    sort: {
      immediate: true,
      deep: true,
      handler(v) {
        this.column = v !== null ? v.column : null;
        this.direction = v !== null ? v.direction : null;
      },
    },
  },

  methods: {
    /**
     * Width resize handler
     */
    calculateShadowsVisibility() {
      const { scrollLeft, scrollWidth, clientWidth } = this.$refs.container;

      this.shadows.left = scrollLeft > 0;
      this.shadows.right = scrollLeft + clientWidth < scrollWidth;
    },
    /**
     * Column sort change event handler
     *
     * @param {string} column Column key
     * @param {'asc' | 'desc' | null} direction Sort direction
     */
    handleSortChange(column, direction) {
      this.column = column;
      this.direction = direction;

      this.$emit('change', direction === null ? null : { column, direction });
    },
    /**
     * @param {number} index
     */
    handleExpandedRowChange(index) {
      this.expandedRow = this.expandedRow === index ? null : index;

      this.$emit('row-toggle', { index, isExpanded: this.expandedRow === index });
    },
    /**
     * @param {Event} e
     * @param {string | number} key
     */
    handleColumnClick(e, key) {
      this.$emit('column-click', e, key);
    },
    /**
     * @param {Event} e
     * @param {string | number} index
     */
    handleRowClick(e, index) {
      this.$emit('row-click', e, index);
    },
    /**
     * @param {Event} e
     * @param {string | number} rowIndex
     * @param {string | number} columnKey
     */
    handleCellClick(e, rowIndex, columnKey) {
      this.$emit('cell-click', e, rowIndex, columnKey);
    },
    /**
     * Get content from slot with priority
     *
     * @param {string | number} key
     * @param {string | number} indexedKey
     * @return {function(props: *): VNode[] | VNode[] | undefined}
     */
    getSlotContent(key, indexedKey) {
      return this.$scopedSlots[indexedKey] || this.$slots[indexedKey] || this.$scopedSlots[key] || this.$slots[key];
    },
    /**
     * Get content for cols and cells
     *
     * @param {*} value
     * @return {*}
     */
    getContent(value) {
      return value === null || value === undefined ? '' : value;
    },
    /**
     * Generates wrapper template
     *
     * @param {Array<VNode>} content
     * @returns {VNode}
     */
    genWrapper(content = []) {
      return this.$createElement(
        'div',
        {
          class: styles['ui-table'],
        },
        [
          this.genLeftShadow(),
          this.genRightShadow(),
          this.$createElement(
            'div',
            {
              ref: 'container',
              class: 'table__container',
            },
            [this.genTable(content)],
          ),
        ],
      );
    },
    /**
     * Generates shadow template
     *
     * @param {boolean} show
     * @param {string} type
     * @return {VNode}
     */
    genShadow(show, type) {
      return this.$createElement('div', {
        class: {
          table__shadow: true,
          [`-${type}`]: true,
          '-hidden': !show,
        },
        attrs: {
          'data-shadow': type,
        },
      });
    },
    /**
     * Generates left shadow template
     *
     * @return {VNode}
     */
    genLeftShadow() {
      return this.genShadow(this.shadows.left, 'left');
    },
    /**
     * Generates right shadow template
     *
     * @return {VNode}
     */
    genRightShadow() {
      return this.genShadow(this.shadows.right, 'right');
    },
    /**
     * Generates table template
     *
     * @param {Array<VNode>} content
     * @param {Object?} data
     * @returns {VNode}
     */
    genTable(content, data = {}) {
      return this.$createElement('table', data, content);
    },
    /**
     * Generates header template
     *
     * @param {Object?} options
     * @returns {VNode}
     */
    genHead(options = {}) {
      return this.$createElement(
        'thead',
        {
          ...options,
          class: 'table__head',
        },
        [this.$createElement('tr', this.genColumns())],
      );
    },
    /**
     * Generates columns templates
     *
     * @returns {Array<VNode>}
     */
    genColumns() {
      return this.columns.map((col) => this.genColumn(col));
    },
    /**
     * Generates column template
     *
     * @param {{ key: string, title?: string, class?: string | Array<string> | Object, style?: string | Array<string> | Object, sortable?: boolean }} col
     * @returns {VNode}
     */
    genColumn(col) {
      const { class: classes = null, style, ...props } = col;
      let content = this.getSlotContent(this.slots.column, this.slots.indexedColumn(col.key, col));

      if (!content) {
        content = this.getContent(col.title);
      }

      return this.$createElement(
        UiTableColumn,
        {
          class: classes,
          style,
          props: {
            ...props,
            direction: this.columnsDirection[col.key],
          },
          on: {
            click: (e) => this.handleColumnClick(e, col.key),
            toggle: (direction) => this.handleSortChange(col.key, direction),
          },
        },
        [typeof content === 'function' ? content(col) : content],
      );
    },
    /**
     * Generates body template
     *
     * @returns {VNode}
     */
    genBody() {
      return this.$createElement('tbody', this.$slots.body || this.genRows(this.sortedRows));
    },
    /**
     * Generates rows templates
     *
     * @param {Array<Object>} rows
     * @returns {Array<Array<VNode>>}
     */
    genRows(rows) {
      return rows.map((row) => {
        const index = this.rows.indexOf(row);
        const expandable = this.expandableRows.includes(index);

        return [
          this.genRow(row, index, { expandable }),
          ...(expandable && this.expandedRow === index ? this.genRelatedRows(row[this.relatedRows], row, index) : []),
        ];
      });
    },
    /**
     * Generates related rows templates
     *
     * @param {*} rows
     * @param {Object} parent
     * @param {number} parentIndex
     * @returns {Array<VNode>}
     */
    genRelatedRows(rows, parent, parentIndex) {
      const content = this.getSlotContent(this.slots.related, this.slots.indexedRelated(parentIndex));

      if (content) {
        return typeof content === 'function' ? content({ rows, parent, parentIndex }) : content;
      }

      if (Array.isArray(rows) && rows.length > 0) {
        return rows.map((row, index) => this.genRow(row, index, {
          related: true,
          parent,
          parentIndex,
        }));
      }

      return [this.genRow({}, 0, { related: true, parent, parentIndex })];
    },
    /**
     * Generates row template
     *
     * @param {Object} row
     * @param {number} index
     * @param {{ related?: boolean, expandable?: boolean, parent?: Object, parentIndex?: number | null }} options
     * @returns {VNode}
     */
    genRow(row, index, options) {
      const {
        related = false,
        expandable = false,
        parent = null,
        parentIndex = null,
      } = options;
      const relatedIndex = related ? `${parentIndex}-${index}` : null;
      const indexedSlot = related ? this.slots.indexedRelatedRow(relatedIndex) : this.slots.indexedRow(index);
      const slot = related ? this.slots.relatedRow : this.slots.row;

      let content = this.$scopedSlots[indexedSlot]
        || this.$slots[indexedSlot]
        || this.$scopedSlots[slot]
        || this.$slots[slot]
        || this.genCells(row, related ? relatedIndex : index);

      if (typeof content === 'function') {
        content = content({ row, parent, expandedRowIndex: this.expandedRow });
      }

      return this.$createElement(
        UiTableRow,
        {
          key: related ? relatedIndex : index,
          props: {
            related,
            expandable,
            expanded: related ? false : this.expandedRow === index,
          },
          on: {
            click: (e) => this.handleRowClick(e, index),
            toggle: () => this.handleExpandedRowChange(index),
          },
        },
        [content],
      );
    },
    /**
     * Generates cells templates
     *
     * @param {Object} row
     * @param {number} index
     * @returns {Array<VNode>}
     */
    genCells(row, index) {
      return this.keys.map((key) => this.genCell(key, row, index));
    },
    /**
     * Generates cell template
     *
     * @param {string} key
     * @param {Object} row
     * @param {number} index
     * @returns {VNode}
     */
    genCell(key, row, index) {
      const value = row[key];
      const content = this.getSlotContent(key, `${key}-${index}`) || this.getContent(value);

      return this.$createElement(
        UiTableCell,
        {
          key,
          on: {
            click: (e) => this.handleCellClick(e, index, key),
          },
        },
        [typeof content === 'function' ? content({ value, row }) : content],
      );
    },
    /**
     * Generate footer template
     *
     * @returns {null | VNode}
     */
    genFoot() {
      const content = this.$slots.foot;

      if (!content) return null;

      return this.$createElement('tfoot', content);
    },
  },

  render() {
    return this.genWrapper([
      this.genHead(),
      this.genBody(),
      this.genFoot(),
    ]);
  },
};

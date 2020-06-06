import VueMarkdown from 'vue-markdown/src/VueMarkdown';
import styles from './UiMarkdownViewer.scss';

export default {
  name: 'UiMarkdownViewer',
  props: {
    source: {
      type: String,
      default: null,
    },
    toc: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    properties() {
      return {
        source: this.source,
        toc: this.toc,
      };
    },
  },
  methods: {
    genRoot() {
      return this.$createElement(VueMarkdown, {
        class: styles.root,
        props: this.properties,
      });
    },
  },
  render() {
    return this.genRoot();
  },
};

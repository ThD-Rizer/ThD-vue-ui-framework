import VueMarkdown from 'vue-markdown/src/VueMarkdown';
import styles from './UiMarkdownViewer.scss';

export default {
  name: 'UiMarkdownViewer',
  props: {
    source: {
      type: String,
      default: null,
    },
  },
  computed: {
    properties() {
      const { source } = this;
      return {
        source,
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

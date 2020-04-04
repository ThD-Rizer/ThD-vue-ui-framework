<script>
  import routable from '@/mixins/routable';

  export default {
    name: 'UiLink',
    mixins: [
      routable,
    ],
    computed: {
      classesRoot() {
        return {
          [this.$style.root]: true,
          [this.$style.isDisabled]: this.disabled,
        };
      },
    },
    methods: {
      genRoot(childNodes = []) {
        const { tag, data } = this.generateRouterLink(this.classesRoot);

        return this.$createElement(tag, data, childNodes);
      },
      genDefaultSlot() {
        const { default: defaultSlot } = this.$scopedSlots;

        if (!defaultSlot) return null;

        return defaultSlot();
      },
    },
    render() {
      return this.genRoot([
        this.genDefaultSlot(),
      ]);
    },
  };
</script>

<style lang="scss" module>
  .root {
    border-bottom: 1px dashed currentColor;
    color: $colorPrimary;
    text-decoration: none;

    &.isDisabled {}
  }
</style>

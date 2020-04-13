export default {
  name: 'UiDrawer',
  render(h) {
    return h('div', {
      class: 'UiDrawer',
    }, [
      this.$slots.default,
      // h('UiOverlay'),
      // <md-overlay :md-active="mdActive" @click="closeDrawer" v-if="mdFixed" />
    ]);
  },
};

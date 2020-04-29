import FrameworkError from '@/utils/errors';
import { registrableProvide } from '@/mixins/registrable';

const containers = {
  modals: 'bmP69q486LMGsVpUnTyGC93ydKRG1vkf',
};

const registrableProvider = registrableProvide('appContainer');

export default {
  name: 'UiApp',
  mixins: [
    registrableProvider,
  ],
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    id: {
      type: String,
      default: 'app',
    },
  },
  created() {
    if (this.$ui) {
      this.$ui.setAppContainer(this);
    }
  },
  methods: {
    register(el, container) {
      const isValid = (container in this.$refs);

      if (!isValid) {
        throw new FrameworkError(`Container "${container}" does not exists`);
      }

      this.$refs[container].appendChild(el);
    },

    unregister(el, container) {
      if (this.$refs[container].contains(el)) {
        el.remove();
      }
    },

    genRoot(childNodes = []) {
      return this.$createElement(this.tag, {
        attrs: {
          id: this.id,
        },
      }, childNodes);
    },

    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return defaultSlot();
    },

    genContainers() {
      return Object.entries(containers).map(([name, id]) => (
        this.genContainer(name, id)
      ));
    },

    genContainer(name, id) {
      return this.$createElement('div', {
        attrs: {
          id,
        },
        ref: name,
      });
    },
  },
  render() {
    return this.genRoot([
      this.genDefaultSlot(),
      this.genContainers(),
    ]);
  },
};

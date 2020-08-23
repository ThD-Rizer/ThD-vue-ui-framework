import BaseError from '@/utils/errors';
import { getSlot } from '@/utils/helpers';
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
        throw new BaseError(`Container "${container}" does not exists`);
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
    const defaultSlot = getSlot(this);

    return this.genRoot([
      defaultSlot,
      this.genContainers(),
    ]);
  },
};

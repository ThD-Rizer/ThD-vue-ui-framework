import FrameworkError from '@/utils/errors';
import { provide as RegistrableProvide } from '@/mixins/registrable';

const containers = {
  modals: 'bmP69q486LMGsVpUnTyGC93ydKRG1vkf',
};

export default {
  name: 'UiApp',
  mixins: [
    RegistrableProvide('appContainer'),
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
    genContainers() {
      return Object.entries(containers).map(this.genContainer);
    },
    genContainer([name, id]) {
      return this.$createElement('div', {
        ref: name,
        attrs: {
          id,
        },
      });
    },
  },
  render() {
    return this.genRoot([
      this.$slots.default,
      this.genContainers(),
    ]);
  },
};

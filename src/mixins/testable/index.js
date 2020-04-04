import { QA_ATTRIBUTE_NAME } from '@/constants';

export default {
  props: {
    qa: {
      type: String,
      default: null,
    },
  },
  computed: {
    qaAttributes() {
      return {
        [QA_ATTRIBUTE_NAME]: this.qa,
      };
    },
  },
};

import Datepicker from 'vuejs-datepicker';
import { en, ru } from 'vuejs-datepicker/dist/locale';
import { getSlot, propValidator } from '@/utils/helpers';

const LOCALES = { en, ru };

const languageValidator = propValidator('language', Object.keys(LOCALES));

export default {
  name: 'UiDatepicker',
  props: {
    language: {
      type: String,
      default: 'en',
      ...languageValidator,
    },
  },
  computed: {
    localLanguage() {
      return LOCALES?.[this.language];
    },
  },
  methods: {
    getRoot(childNodes = []) {
      const language = this.localLanguage || null;

      return this.$createElement(Datepicker, {
        props: {
          ...this.$attrs,
          ...language && { language },
        },
      }, childNodes);
    },
  },
  render() {
    const defaultSlot = getSlot(this);

    return this.getRoot([
      defaultSlot,
    ]);
  },
};
